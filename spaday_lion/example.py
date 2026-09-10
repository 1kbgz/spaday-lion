import asyncio
import logging

import transports
import uvicorn
from pydantic import BaseModel
from spaday import CallEndpoint, Emit, Sequence, SetField, SetProp, by_id, concat, element, eq, event_prop, field, item, not_
from spaday.backends.starlette import serve
from spaday.components.shell import App, Body, Each, Main, Nav, Row
from starlette.responses import JSONResponse
from starlette.routing import Route, WebSocketRoute

from spaday_lion import (
    LionAccordion,
    LionButton,
    LionButtonReset,
    LionButtonSubmit,
    LionCheckbox,
    LionCheckboxGroup,
    LionCollapsible,
    LionCombobox,
    LionDialog,
    LionForm,
    LionInput,
    LionInputAmount,
    LionInputDatepicker,
    LionInputEmail,
    LionInputIban,
    LionInputRange,
    LionInputStepper,
    LionOption,
    LionProgressIndicator,
    LionRadio,
    LionRadioGroup,
    LionSelectRich,
    LionSwitch,
    LionTabs,
    LionTextarea,
    LionTooltip,
    package,
)

logger = logging.getLogger("uvicorn.error")

PLANS = {"basic": "Basic", "plus": "Plus", "premium": "Premium"}
COUNTRIES = ["Netherlands", "Germany", "France", "Belgium", "Spain"]
ARRIVING = [
    ("Sanne de Vries", "plus", 2_500),
    ("Lukas Becker", "basic", 400),
    ("Camille Martin", "premium", 12_000),
    ("Pieter Janssens", "plus", 1_800),
]


def application(number: int, name: str, plan: str, deposit: float, progress: int = 0, status: str = "In review") -> dict:
    return {
        "id": f"A-{number}",
        "name": name,
        "plan": PLANS[plan],
        "deposit": f"€{deposit:,.2f}",
        "progress": progress,
        "status": status,
    }


class OnboardingFeed(BaseModel):
    applications: list[dict] = [
        application(311, "Noor Bakker", "premium", 8_000, 70),
        application(312, "Jonas Weber", "basic", 250, 35),
        application(310, "Élodie Laurent", "plus", 3_100, 100, "Approved"),
    ]
    opened_today: int = 14
    in_review: int = 0
    capacity: int = 0


feed = OnboardingFeed()
session = transports.Session()
session.host(feed)
server = transports.Server(session)


def refresh_totals() -> None:
    feed.in_review = sum(row["status"] == "In review" for row in feed.applications)
    feed.capacity = min(100, feed.in_review * 20)


refresh_totals()


def next_number() -> int:
    return max(int(row["id"].removeprefix("A-")) for row in feed.applications) + 1


def add_application(row: dict) -> None:
    """Newest first; past eight rows the oldest approved one drops off."""
    rows = [row, *feed.applications]
    approved = [existing for existing in rows if existing["status"] == "Approved"]
    if len(rows) > 8 and approved:
        rows.remove(approved[-1])
    feed.applications = rows


async def review_applications() -> None:
    """Checks advance every tick and finish in approval; every third tick an application arrives."""
    tick = 0
    while True:
        await asyncio.sleep(2)
        tick += 1
        rows = []
        for row in feed.applications:
            if row["status"] == "In review":
                progress = min(100, row["progress"] + 15)
                row = {**row, "progress": progress, "status": "Approved" if progress == 100 else "In review"}
                if progress == 100:
                    feed.opened_today += 1
            rows.append(row)
        feed.applications = rows
        if tick % 3 == 0:
            name, plan, deposit = ARRIVING[(tick // 3) % len(ARRIVING)]
            add_application(application(next_number(), name, plan, deposit))
        refresh_totals()


async def apply(request):
    body = await request.json()
    logger.info("Application from browser: %s", body)
    missing = [label for key, label in (("full_name", "your name"), ("email", "an email"), ("iban", "an IBAN")) if not body.get(key)]
    if missing:
        return JSONResponse({"message": f"Please add {', '.join(missing)}."}, status_code=422)
    plan = body.get("plan") or "basic"
    row = application(next_number(), body["full_name"], plan, float(body.get("deposit") or 0))
    add_application(row)
    refresh_totals()
    extras = ", ".join(body.get("products") or []) or "no add-ons"
    return JSONResponse(
        {
            "message": (
                f"{row['id']}: a {body.get('account_type')} {PLANS[plan]} account for {row['name']} "
                f"({body.get('country') or 'no country'}), {row['deposit']} opening deposit, "
                f"{body.get('cards')} card(s), {extras}, starting {body.get('start') or 'on a date to confirm'}."
            )
        }
    )


async def approve(request):
    key = request.path_params["id"]
    row = next((row for row in feed.applications if row["id"] == key), None)
    if row is None or row["status"] != "In review":
        return JSONResponse({"message": f"{key} is not in review."}, status_code=409)
    feed.applications = [{**row, "progress": 100, "status": "Approved"} if existing is row else existing for existing in feed.applications]
    feed.opened_today += 1
    refresh_totals()
    return JSONResponse({"message": f"Approved {key}"})


def stat(label: str, *body):
    return element("article", element("span", class_="stat-label").text(label), *body, class_="stat")


stats = Row(
    stat("Accounts opened today", element("strong", id="opened").bind("textContent", "opened_today")),
    stat("In review", element("strong", id="in-review").bind("textContent", "in_review")),
    stat(
        "Review capacity",
        LionProgressIndicator(id="capacity", min=0, max=100, **{"aria-label": "Review capacity"})
        .bind("value", "capacity")
        .compute("style", concat("--progress: ", field("capacity"), "%")),
    ),
    gap="1rem",
    align="stretch",
    class_="stats",
)

apply_form = LionForm(
    element(
        "form",
        element(
            "div",
            LionInput(name="full_name", label="Full name").bind("serializedValue", "full_name", mode="two-way"),
            LionInputEmail(name="email", label="Email", help_text="We send the contract here"),
            element(
                "div",
                LionInputIban(name="iban", label="IBAN"),
                LionTooltip(element("button", type="button", slot="invoker", class_="hint").text("?"), has_arrow=True).child_in(
                    "content", element("div", class_="tooltip").text("Lion checks and formats the IBAN as you type")
                ),
                class_="with-hint",
            ),
            LionInputAmount(name="deposit", label="Opening deposit", currency="EUR").bind("serializedValue", "deposit", mode="two-way"),
            LionInputDatepicker(name="start", label="Start date", help_text="Pick a day from the calendar"),
            LionSelectRich(*(LionOption(choice_value=key).text(label) for key, label in PLANS.items()), name="plan", label="Plan").on(
                "model-value-changed", SetField("plan", event_prop("currentTarget.modelValue"))
            ),
            # a combobox matches what is typed against each option's choiceValue
            LionCombobox(*(LionOption(choice_value=country).text(country) for country in COUNTRIES), name="country", label="Country"),
            LionRadioGroup(
                LionRadio(label="Personal", choice_value="personal", checked=True),
                LionRadio(label="Business", choice_value="business"),
                name="account_type",
                label="Account type",
            ),
            LionCheckboxGroup(
                LionCheckbox(label="Debit card", choice_value="debit card", checked=True),
                LionCheckbox(label="Savings pot", choice_value="savings pot"),
                LionCheckbox(label="Travel insurance", choice_value="travel insurance"),
                name="products",
                label="Add-ons",
            ),
            LionInputRange(name="overdraft", label="Overdraft limit", min=0, max=5000, step=250, unit="€").bind(
                "serializedValue", "overdraft", mode="two-way"
            ),
            LionInputStepper(name="cards", label="Cards", min=1, max=4).bind("serializedValue", "cards", mode="two-way"),
            LionSwitch(name="paperless", label="Paperless statements", checked=True),
            LionTextarea(name="notes", label="Anything we should know?", rows=3, class_="wide"),
            class_="form-grid",
        ),
        element(
            "p",
            id="preview",
            class_="preview",
        ).compute(
            "textContent",
            concat(
                "Opening an account for ",
                field("full_name"),
                " with €",
                field("deposit"),
                ", ",
                field("cards"),
                " card(s) and a €",
                field("overdraft"),
                " overdraft.",
            ),
        ),
        Row(
            LionButtonReset().text("Clear"),
            LionButtonSubmit(id="submit").text("Open account"),
            gap=".75rem",
            justify="end",
        ),
    ),
    id="apply",
).on(
    # Lion collects every named field into the form's serializedValue, so that is the request body
    "submit",
    Sequence(
        CallEndpoint("POST", "/api/applications", event_prop("target.serializedValue"), result="submitted"),
        SetProp(by_id("confirm"), "opened", True),
    ),
)

queue = element(
    "section",
    Each(
        element(
            "div",
            element(
                "div",
                element("strong").compute("textContent", concat(item("id"), " · ", item("name"))),
                element("span", class_="muted").compute("textContent", concat(item("plan"), " · ", item("deposit"))),
                class_="application-main",
            ),
            LionProgressIndicator(min=0, max=100, **{"aria-label": "Review progress"})
            .compute("value", item("progress"))
            .compute("style", concat("--progress: ", item("progress"), "%")),
            element("span", class_="status").compute("textContent", item("status")).compute("data-status", item("status")),
            LionButton()
            .text("Approve")
            .compute("disabled", not_(eq(item("status"), "In review")))
            .on("click", CallEndpoint("POST", concat("/api/applications/", item("id"), "/approve"), result="approved")),
            class_="application",
        ).compute("data-id", item("id")),
        field="applications",
        key="id",
    ),
    id="queue",
    class_="queue",
)

FAQ = [
    ("How long does a review take?", "Most applications are approved within a minute; the queue shows each one's progress live."),
    ("Which IBANs do you accept?", "Any valid SEPA IBAN. Lion validates the checksum and formats it while you type."),
    ("Can I change plans later?", "Yes, at any time from the account settings, without fees."),
]
help_panel = element(
    "section",
    LionAccordion(
        *(
            node
            for question, answer in FAQ
            for node in (
                element("h3", element("button", class_="accordion-invoker").text(question), slot="invoker"),
                element("p", slot="content", class_="accordion-content").text(answer),
            )
        ),
    ),
    LionCollapsible(
        element("button", slot="invoker", class_="link").text("Show the fee schedule"),
        element(
            "ul",
            *(element("li").text(f"{PLANS[key]}: €{fee}/month") for key, fee in (("basic", 0), ("plus", 4), ("premium", 12))),
            slot="content",
        ),
        id="fees",
    ),
    class_="help",
)

confirm = LionDialog(
    element(
        "div",
        element("h2").text("Application received"),
        element("p", id="confirm-message").compute("textContent", field("submitted.body.message")),
        element("button", id="confirm-close", type="button").text("Close").on("click", Emit("close-overlay")),
        slot="content",
        class_="dialog",
    ),
    id="confirm",
)

page = App(
    Nav(
        element("strong", class_="brand").text("Lion bank · account opening"),
        # a Lion switch reports through model-value-changed rather than change or input
        LionSwitch(id="dark", label="Dark theme")
        .bind("checked", "dark")
        .on("model-value-changed", SetField("dark", event_prop("currentTarget.checked"))),
    ),
    Body(
        Main(
            element("p", class_="lede").text(
                "Lion is white-label: these typed Lion elements take their look from spaday's palette, and the review queue streams from Python."
            ),
            stats,
            LionTabs(id="tabs")
            .child_in("tab", element("button").text("Apply"))
            .child_in("panel", element("section", apply_form, class_="panel"))
            .child_in("tab", element("button").text("Review queue"))
            .child_in("panel", element("section", queue, class_="panel"))
            .child_in("tab", element("button").text("Help"))
            .child_in("panel", element("section", help_panel, class_="panel")),
            confirm,
            class_="page",
        ),
    ),
).bind_root_class("wa-dark", "dark")

styles = """
<style>
  :root { --surface: var(--spa-surface, #fff); --surface-2: var(--spa-surface-2, #fafafa); --border: var(--spa-border, #e6e6e6);
    --muted: var(--spa-muted, #666); --accent: var(--spa-accent, #4a90d9); --success: var(--spa-success, #2e7d32); }
  .wa-dark { color-scheme: dark; }
  body { margin: 0; font: 15px/1.45 system-ui, sans-serif; background: var(--surface-2); color: CanvasText; }
  spa-nav { justify-content: space-between; }
  .brand { font-size: 1.05rem; }
  .page { box-sizing: border-box; width: 100%; max-width: 70rem; margin: 0 auto; padding: 1.5rem 1rem; display: grid;
    grid-template-columns: minmax(0, 1fr); align-content: start; gap: 1rem; }
  .lede, .muted, .stat-label { color: var(--muted); }
  .lede { margin: 0; }
  .stats { flex-wrap: wrap; }
  .stat { flex: 1 1 12rem; display: grid; gap: .35rem; padding: 1rem; border: 1px solid var(--border); border-radius: .75rem; background: var(--surface); }
  .stat strong { font-size: 1.75rem; }
  /* Lion's progress indicator draws nothing of its own; the page draws it from the value it is given */
  lion-progress-indicator { display: block; height: .5rem; border-radius: .25rem;
    background: linear-gradient(to right, var(--accent) var(--progress, 0%), var(--border) 0); }
  lion-switch [slot="label"] { margin-inline-end: .5rem; }
  lion-tabs > [slot="tab"] { font: inherit; padding: .5rem 1rem; border: 0; border-bottom: 2px solid transparent; background: none;
    color: var(--muted); cursor: pointer; }
  lion-tabs > [slot="tab"][selected] { color: CanvasText; border-bottom-color: var(--accent); }
  .panel { padding-top: 1rem; }
  .form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem 1.5rem; }
  .form-grid .wide { grid-column: 1 / -1; }
  .form-grid input, .form-grid textarea, lion-select-rich lion-select-invoker, lion-combobox input {
    box-sizing: border-box; width: 100%; font: inherit; padding: .5rem .6rem; border: 1px solid var(--border); border-radius: .5rem;
    background: var(--surface); color: CanvasText; }
  .form-grid [type="radio"], .form-grid [type="checkbox"], .form-grid [type="range"] { width: auto; }
  .form-grid [slot="label"], .form-grid label { font-weight: 600; }
  .form-grid [slot="help-text"] { color: var(--muted); font-size: .85rem; }
  .with-hint { display: flex; gap: .5rem; align-items: start; }
  .with-hint lion-input-iban { flex: 1; }
  .hint { margin-top: 1.6rem; width: 1.6rem; height: 1.6rem; border-radius: 50%; border: 1px solid var(--border); background: var(--surface); color: inherit; }
  .tooltip { padding: .4rem .6rem; border-radius: .4rem; background: CanvasText; color: Canvas; font-size: .85rem; }
  .preview { margin: 1rem 0; color: var(--muted); }
  /* Lion's switch keeps its track and thumb in its own shadow root; round off the host */
  lion-switch-button { border-radius: 999px; overflow: hidden; box-shadow: inset 0 0 0 1px var(--border); }
  lion-switch-button[checked] { box-shadow: 0 0 0 2px var(--accent); }
  lion-button, lion-button-submit, lion-button-reset { padding: .5rem 1rem; border-radius: .5rem; border: 1px solid var(--border);
    background: var(--surface); color: CanvasText; cursor: pointer; }
  lion-button-submit { background: var(--accent); color: #fff; border-color: transparent; }
  lion-button[disabled] { opacity: .5; cursor: default; }
  .queue { display: grid; gap: .5rem; }
  .application { display: grid; grid-template-columns: minmax(0, 1fr) 10rem 6rem auto; align-items: center; gap: 1rem; padding: .75rem 1rem;
    border: 1px solid var(--border); border-radius: .75rem; background: var(--surface); }
  .application-main { display: grid; }
  .status[data-status="Approved"] { color: var(--success); font-weight: 600; }
  .help { display: grid; gap: 1rem; }
  .accordion-invoker, .link { font: inherit; background: none; border: 0; padding: .5rem 0; color: var(--accent); cursor: pointer; }
  h3 { margin: 0; }
  .accordion-content { margin: 0 0 .5rem; color: var(--muted); }
  .dialog { max-width: 28rem; padding: 1.25rem 1.5rem; border-radius: .75rem; background: var(--surface); box-shadow: 0 20px 50px rgb(0 0 0 / .25); }
  .dialog h2 { margin-top: 0; }
  #confirm-close { font: inherit; padding: .4rem 1rem; border-radius: .5rem; border: 0; background: var(--accent); color: #fff; }
  @media (max-width: 720px) {
    .form-grid { grid-template-columns: 1fr; }
    .application { grid-template-columns: 1fr auto; }
    .application lion-progress-indicator { grid-column: 1 / -1; }
  }
</style>
"""

app = serve(
    page,
    packages=[package],
    wire="transports",
    routes=[
        WebSocketRoute("/ws", transports.ws_endpoint(server)),
        Route("/api/applications", apply, methods=["POST"]),
        Route("/api/applications/{id}/approve", approve, methods=["POST"]),
    ],
    background=[transports.autosync(server), review_applications()],
    store={
        "dark": False,
        "full_name": "Ada Lovelace",
        "deposit": 1500,
        "overdraft": 1000,
        "cards": 1,
        "plan": "basic",
        "submitted": {"body": {"message": ""}},
        "approved": {},
    },
    head=styles,
    title="spaday-lion example",
)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8025)
