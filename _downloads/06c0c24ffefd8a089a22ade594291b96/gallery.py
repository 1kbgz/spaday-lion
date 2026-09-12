"""Gallery of every Lion component wrapped by spaday-lion."""

from __future__ import annotations

import io
import keyword
import textwrap
import tokenize

from spaday import Emit, SetProp, by_id, element
from spaday.backends.starlette import serve

from . import components as lion, package

COMPONENT_SNIPPETS: list[str] = []


def _snippet(names: str, body: str) -> str:
    source = f"from spaday_lion import {names}\n\n{textwrap.dedent(body).strip()}\n"
    COMPONENT_SNIPPETS.append(source)
    return source


def _offsets(source: str) -> list[int]:
    offsets = [0]
    for line in source.splitlines(keepends=True):
        offsets.append(offsets[-1] + len(line))
    return offsets


def _code(source: str):
    """Render dependency-free highlighted Python."""
    offsets = _offsets(source)
    children = []
    cursor = 0
    for token in tokenize.generate_tokens(io.StringIO(source).readline):
        if token.type == tokenize.ENDMARKER:
            continue
        start = offsets[token.start[0] - 1] + token.start[1]
        end = offsets[token.end[0] - 1] + token.end[1]
        if start > cursor:
            children.append(source[cursor:start])
        token_class = None
        if token.type == tokenize.NAME and keyword.iskeyword(token.string):
            token_class = "keyword"
        elif token.type == tokenize.STRING:
            token_class = "string"
        elif token.type == tokenize.NUMBER:
            token_class = "number"
        elif token.type == tokenize.COMMENT:
            token_class = "comment"
        elif token.type == tokenize.OP:
            token_class = "operator"
        children.append(element("span", class_=f"token-{token_class}").text(token.string) if token_class else token.string)
        cursor = end
    if cursor < len(source):
        children.append(source[cursor:])
    return element("pre", element("code", *children), class_="code-block")


def _demo(title: str, description: str, source: str, preview):
    return element(
        "article",
        element(
            "header",
            element("div", element("h3").text(title), element("p").text(description)),
            element("span", class_="language-pill").text("Python"),
            class_="demo-heading",
        ),
        element("div", preview, class_="preview"),
        element("div", _code(source), class_="source"),
        class_="gallery-card",
    )


def _section(section_id: str, title: str, description: str, *cards):
    return element(
        "section",
        element("header", element("p", class_="section-label").text(section_id.upper()), element("h2").text(title), element("p").text(description)),
        element("div", *cards, class_="gallery-grid"),
        id=section_id,
        class_="gallery-section",
    )


buttons = _section(
    "actions",
    "Actions and state",
    "Commands, form actions, persistent toggles, and icon hooks.",
    _demo(
        "Button family",
        "Use Lion's semantic button variants inside and outside forms.",
        _snippet(
            "LionButton, LionButtonReset, LionButtonSubmit",
            """
            actions = (
                LionButton().text("Save draft"),
                LionButtonReset().text("Reset"),
                LionButtonSubmit().text("Submit"),
            )
            """,
        ),
        element(
            "div",
            lion.LionButton().text("Save draft"),
            lion.LionButtonReset().text("Reset"),
            lion.LionButtonSubmit().text("Submit"),
            class_="inline-preview",
        ),
    ),
    _demo(
        "Switch primitives",
        "Choose the labelled form control or its lower-level switch button.",
        _snippet(
            "LionIcon, LionSwitch, LionSwitchButton",
            """
            notifications = LionSwitch(label="Notifications", checked=True)
            compact = LionSwitchButton(checked=True)
            icon = LionIcon(aria_label="Account icon")
            """,
        ),
        element(
            "div",
            lion.LionSwitch(label="Notifications", checked=True),
            element("label", lion.LionSwitchButton(checked=True), " Compact mode", class_="switch-row"),
            element("span", lion.LionIcon(aria_label="Account icon"), " Icon registry target", class_="icon-row"),
            class_="stack",
        ),
    ),
)


text_inputs = _section(
    "text-inputs",
    "Text and contact inputs",
    "Typed fields preserve Lion's formatting, validation, and accessible labelling contracts.",
    _demo(
        "Text entry",
        "Start with general text and multiline inputs, or compose the base field directly.",
        _snippet(
            "LionField, LionInput, LionTextarea, LionValidationFeedback",
            """
            name = LionInput(label="Account name", help_text="Shown on statements")
            notes = LionTextarea(label="Notes", rows=3)
            custom = LionField(label="Reference").child_in(
                "input", element("input", value="OPS-204")
            )
            feedback = LionValidationFeedback()
            """,
        ),
        element(
            "div",
            lion.LionInput(label="Account name", help_text="Shown on statements", placeholder="Everyday account"),
            lion.LionTextarea(label="Notes", rows=3, placeholder="Optional context"),
            lion.LionField(label="Reference").child_in("input", element("input", value="OPS-204")),
            lion.LionValidationFeedback(),
            class_="form-preview",
        ),
    ),
    _demo(
        "Email and phone",
        "Use locale-aware contact controls, including a region picker when needed.",
        _snippet(
            "LionInputEmail, LionInputTel, LionInputTelDropdown",
            """
            email = LionInputEmail(label="Email", placeholder="ada@example.com")
            phone = LionInputTel(label="Phone", activeRegion="US")
            regional = LionInputTelDropdown(
                label="International phone",
                activeRegion="NL",
                allowedRegions=["NL", "DE", "FR"],
            )
            """,
        ),
        element(
            "div",
            lion.LionInputEmail(label="Email", placeholder="ada@example.com"),
            lion.LionInputTel(label="Phone", activeRegion="US", placeholder="202 555 0142"),
            lion.LionInputTelDropdown(label="International phone", activeRegion="NL", allowedRegions=["NL", "DE", "FR"]),
            class_="form-preview",
        ),
    ),
    _demo(
        "Files",
        "The composed file input owns selection; its list primitive can also be themed independently.",
        _snippet(
            "LionInputFile, LionSelectedFileList",
            """
            documents = LionInputFile(
                label="Supporting documents",
                accept=".pdf,.png,.jpg",
                multiple=True,
                enable_drop_zone=True,
            )
            selected = LionSelectedFileList(multiple=True)
            """,
        ),
        element(
            "div",
            lion.LionInputFile(
                label="Supporting documents",
                help_text="PDF or image, up to 5 MB",
                accept=".pdf,.png,.jpg",
                multiple=True,
                enable_drop_zone=True,
            ),
            lion.LionSelectedFileList(multiple=True),
            class_="form-preview",
        ),
    ),
)


numbers_dates = _section(
    "numbers-dates",
    "Money, numbers, and dates",
    "Locale-aware values and bounded numeric controls for transactional interfaces.",
    _demo(
        "Amounts",
        "Format one currency directly or let people choose from an allowed set.",
        _snippet(
            "LionInputAmount, LionInputAmountDropdown",
            """
            amount = LionInputAmount(label="Amount", currency="EUR")
            converted = LionInputAmountDropdown(
                label="Settlement amount",
                currency="EUR",
                allowedCurrencies=["EUR", "USD", "GBP"],
            )
            """,
        ),
        element(
            "div",
            lion.LionInputAmount(label="Amount", currency="EUR", modelValue=1250),
            lion.LionInputAmountDropdown(label="Settlement amount", currency="EUR", allowedCurrencies=["EUR", "USD", "GBP"], modelValue=850),
            class_="form-preview",
        ),
    ),
    _demo(
        "Dates and calendar",
        "Choose direct date entry, a popup datepicker, or the calendar primitive.",
        _snippet(
            "LionCalendar, LionInputDate, LionInputDatepicker",
            """
            direct = LionInputDate(label="Transfer date")
            picker = LionInputDatepicker(label="Review date", has_arrow=True)
            calendar = LionCalendar()
            """,
        ),
        element(
            "div",
            lion.LionInputDate(label="Transfer date", placeholder="YYYY-MM-DD"),
            lion.LionInputDatepicker(label="Review date", has_arrow=True, placeholder="YYYY-MM-DD"),
            lion.LionCalendar(),
            class_="form-preview calendar-preview",
        ),
    ),
    _demo(
        "Structured financial fields",
        "Use checksum-aware identifiers and bounded amount controls.",
        _snippet(
            "LionInputIban, LionInputRange, LionInputStepper",
            """
            iban = LionInputIban(label="IBAN")
            limit = LionInputRange(label="Daily limit", min=0, max=5000, step=250, unit="€")
            cards = LionInputStepper(label="Cards", min=1, max=4)
            """,
        ),
        element(
            "div",
            lion.LionInputIban(label="IBAN", placeholder="NL91 ABNA 0417 1643 00"),
            lion.LionInputRange(label="Daily limit", min=0, max=5000, step=250, unit="€"),
            lion.LionInputStepper(label="Cards", min=1, max=4),
            class_="form-preview",
        ),
    ),
)


selection = _section(
    "selection",
    "Selection",
    "Boolean, single-choice, native, and rich selection patterns.",
    _demo(
        "Checks",
        "Group related choices and expose a mixed-state parent when selection is partial.",
        _snippet(
            "LionCheckbox, LionCheckboxGroup, LionCheckboxIndeterminate",
            """
            products = LionCheckboxGroup(
                LionCheckbox(label="Debit card", choice_value="debit", checked=True),
                LionCheckbox(label="Savings pot", choice_value="savings"),
                label="Add-ons",
                name="addons",
            )
            all_products = LionCheckboxIndeterminate(label="Select all", indeterminate=True)
            """,
        ),
        element(
            "div",
            lion.LionCheckboxGroup(
                lion.LionCheckbox(label="Debit card", choice_value="debit", checked=True),
                lion.LionCheckbox(label="Savings pot", choice_value="savings"),
                label="Add-ons",
                name="addons",
            ),
            lion.LionCheckboxIndeterminate(label="Select all", indeterminate=True),
            class_="form-preview",
        ),
    ),
    _demo(
        "Radio group",
        "Present a short, explicit set of mutually exclusive choices.",
        _snippet(
            "LionRadio, LionRadioGroup",
            """
            type_ = LionRadioGroup(
                LionRadio(label="Personal", choice_value="personal", checked=True),
                LionRadio(label="Business", choice_value="business"),
                label="Account type",
                name="account_type",
            )
            """,
        ),
        lion.LionRadioGroup(
            lion.LionRadio(label="Personal", choice_value="personal", checked=True),
            lion.LionRadio(label="Business", choice_value="business"),
            label="Account type",
            name="account_type",
        ),
    ),
    _demo(
        "Native select",
        "Wrap a platform select while retaining Lion's field and validation behavior.",
        _snippet(
            "LionSelect",
            """
            country = LionSelect(label="Country").child_in(
                "input",
                element("select", element("option", value="nl").text("Netherlands"))
            )
            """,
        ),
        lion.LionSelect(label="Country").child_in(
            "input",
            element(
                "select",
                element("option", value="nl").text("Netherlands"),
                element("option", value="de").text("Germany"),
                element("option", value="fr").text("France"),
            ),
        ),
    ),
    _demo(
        "Rich select and combobox",
        "LionOption powers both a popup select and an editable suggestion list.",
        _snippet(
            "LionCombobox, LionListbox, LionOption, LionSelectInvoker, LionSelectRich",
            """
            plan = LionSelectRich(
                LionOption(choice_value="basic").text("Basic"),
                LionOption(choice_value="plus").text("Plus"),
                label="Plan",
                name="plan",
            )
            country = LionCombobox(
                LionOption(choice_value="nl").text("Netherlands"),
                LionOption(choice_value="de").text("Germany"),
                label="Country",
                name="country",
            )
            parts = (LionListbox(), LionSelectInvoker().text("Choose"))
            """,
        ),
        element(
            "div",
            lion.LionSelectRich(
                lion.LionOption(choice_value="basic", checked=True).text("Basic"),
                lion.LionOption(choice_value="plus").text("Plus"),
                lion.LionOption(choice_value="premium").text("Premium"),
                label="Plan",
                name="plan",
            ),
            lion.LionCombobox(
                lion.LionOption(choice_value="nl").text("Netherlands"),
                lion.LionOption(choice_value="de").text("Germany"),
                lion.LionOption(choice_value="fr").text("France"),
                label="Country",
                name="country",
            ),
            element("div", lion.LionListbox(), lion.LionSelectInvoker().text("Choose"), class_="primitive-row"),
            class_="form-preview",
        ),
    ),
    _demo(
        "Options primitive",
        "Build keyboard-driven option sets when a composed select is not the right shell.",
        _snippet(
            "LionOptions",
            """
            options = LionOptions(
                element("div", role="option").text("Operations"),
                element("div", role="option").text("Finance"),
            )
            """,
        ),
        lion.LionOptions(
            element("div", role="option", tabindex=0).text("Operations"),
            element("div", role="option", tabindex=-1).text("Finance"),
            class_="options-preview",
        ),
    ),
)


navigation = _section(
    "navigation",
    "Navigation and progress",
    "Move through sections, disclosures, pages, and multi-step work.",
    _demo(
        "Tabs",
        "Associate tab and panel slots without hand-writing ARIA state.",
        _snippet(
            "LionTabs",
            """
            tabs = LionTabs(selected_index=0) \
                .child_in("tab", element("button").text("Overview")) \
                .child_in("panel", element("p").text("Account overview")) \
                .child_in("tab", element("button").text("Activity")) \
                .child_in("panel", element("p").text("Recent activity"))
            """,
        ),
        lion.LionTabs(selected_index=0)
        .child_in("tab", element("button").text("Overview"))
        .child_in("panel", element("p").text("Account overview"))
        .child_in("tab", element("button").text("Activity"))
        .child_in("panel", element("p").text("Recent activity")),
    ),
    _demo(
        "Disclosure",
        "Use a coordinated accordion for FAQs or a standalone collapsible for one detail.",
        _snippet(
            "LionAccordion, LionCollapsible",
            """
            faq = LionAccordion(
                element("h4", element("button").text("How long?"), slot="invoker"),
                element("p", slot="content").text("Usually one business day."),
            )
            fees = LionCollapsible(
                element("button", slot="invoker").text("Show fees"),
                element("p", slot="content").text("Basic is free."),
            )
            """,
        ),
        element(
            "div",
            lion.LionAccordion(
                element("h4", element("button", class_="link-button").text("How long does review take?"), slot="invoker"),
                element("p", slot="content").text("Usually one business day."),
            ),
            lion.LionCollapsible(
                element("button", slot="invoker", class_="link-button").text("Show account fees"),
                element("p", slot="content").text("Basic is free; Plus is €4/month."),
            ),
            class_="stack",
        ),
    ),
    _demo(
        "Steps",
        "Coordinate workflow state with a steps controller and individual step elements.",
        _snippet(
            "LionStep, LionSteps",
            """
            journey = LionSteps(
                LionStep(initial_step=True).text("Details"),
                LionStep().text("Review"),
                LionStep().text("Complete"),
            )
            """,
        ),
        lion.LionSteps(
            lion.LionStep(initial_step=True).text("1 · Details"),
            lion.LionStep().text("2 · Review"),
            lion.LionStep().text("3 · Complete"),
            class_="steps-preview",
        ),
    ),
    _demo(
        "Page and process progress",
        "Communicate location in a result set and completion in a bounded process.",
        _snippet(
            "LionPagination, LionProgressIndicator",
            """
            pages = LionPagination(current=3, count=8)
            progress = LionProgressIndicator(value=68, min=0, max=100, aria_label="Review progress")
            """,
        ),
        element(
            "div",
            lion.LionPagination(current=3, count=8),
            lion.LionProgressIndicator(value=68, min=0, max=100, aria_label="Review progress", style="--progress: 68%"),
            class_="stack",
        ),
    ),
)


overlays = _section(
    "overlays",
    "Overlays and composition",
    "Dialogs, drawers, contextual help, and form-level grouping.",
    _demo(
        "Dialog and drawer",
        "Open focused content in a modal dialog or a slotted side drawer.",
        _snippet(
            "LionDialog, LionDrawer",
            """
            dialog = LionDialog(
                element("div", slot="content").text("Transfer scheduled"),
                id="gallery-dialog",
            )
            drawer = LionDrawer(
                element("button", slot="invoker").text("Open details"),
                element("div", slot="content").text("Account details"),
                position="right",
            )
            """,
        ),
        element(
            "div",
            lion.LionButton().text("Open dialog").on("click", SetProp(by_id("gallery-dialog"), "opened", True)),
            lion.LionDialog(
                element(
                    "div",
                    element("h4").text("Transfer scheduled"),
                    element("p").text("The payment will leave tomorrow."),
                    element("button", class_="primary-button").text("Done").on("click", Emit("close-overlay")),
                    slot="content",
                    class_="overlay-card",
                ),
                id="gallery-dialog",
            ),
            lion.LionDrawer(
                element("button", slot="invoker", class_="secondary-button").text("Open drawer"),
                element("div", element("h4").text("Account details"), element("p").text("Basic · Personal"), slot="content", class_="drawer-card"),
                position="right",
            ),
            class_="inline-preview",
        ),
    ),
    _demo(
        "Tooltip",
        "Attach concise contextual help to a dedicated invoker.",
        _snippet(
            "LionTooltip",
            """
            help_ = LionTooltip(
                element("button", slot="invoker").text("?"),
                has_arrow=True,
            ).child_in("content", element("span").text("A valid SEPA account"))
            """,
        ),
        lion.LionTooltip(element("button", slot="invoker", class_="hint").text("?"), has_arrow=True).child_in(
            "content", element("span", class_="tooltip-card").text("A valid SEPA account")
        ),
    ),
    _demo(
        "Form composition",
        "Collect fields at form level and group related controls in a fieldset.",
        _snippet(
            "LionFieldset, LionForm",
            """
            profile = LionForm(
                element("form", LionFieldset(
                    LionInput(label="First name", name="first_name"),
                    LionInput(label="Last name", name="last_name"),
                    label="Profile",
                    name="profile",
                ))
            )
            """,
        ),
        lion.LionForm(
            element(
                "form",
                lion.LionFieldset(
                    lion.LionInput(label="First name", name="first_name", placeholder="Ada"),
                    lion.LionInput(label="Last name", name="last_name", placeholder="Lovelace"),
                    label="Profile",
                    name="profile",
                ),
            ),
            class_="form-preview",
        ),
    ),
)


page = element(
    "main",
    element(
        "header",
        element("p", class_="eyebrow").text("SPADAY · LION"),
        element("h1").text("Component gallery"),
        element("p", class_="lede").text(
            "Every Lion web component currently wrapped by spaday-lion, styled as a coherent system with runnable Python."
        ),
        element(
            "nav",
            *(
                element("a", href=f"#{name}").text(label)
                for name, label in [
                    ("actions", "Actions"),
                    ("text-inputs", "Text inputs"),
                    ("numbers-dates", "Numbers & dates"),
                    ("selection", "Selection"),
                    ("navigation", "Navigation"),
                    ("overlays", "Overlays"),
                ]
            ),
            aria_label="Gallery sections",
            class_="section-nav",
        ),
        class_="hero",
    ),
    buttons,
    text_inputs,
    numbers_dates,
    selection,
    navigation,
    overlays,
    element("footer").text(f"Generated components: {len(lion.__all__)} Lion elements · Python runs locally in Pyodide"),
    class_="gallery-page",
)

styles = """
<style>
  :root { --ink: #17231f; --muted: #65716c; --surface: #fff; --surface-2: #f5f7f4; --border: #dce3de;
    --accent: #176b51; --accent-soft: #dff3e9; --shadow: 0 18px 50px rgb(23 35 31 / .08); color-scheme: light; }
  html { scroll-behavior: smooth; }
  body { margin: 0; color: var(--ink); background: radial-gradient(circle at 10% 0, #dff3e9 0, transparent 31rem), var(--surface-2);
    font: 15px/1.5 Inter, ui-sans-serif, system-ui, sans-serif; }
  .gallery-page { box-sizing: border-box; width: min(100%, 92rem); margin: 0 auto; padding: 2.5rem 1.25rem 4rem; }
  .hero { padding: 2rem 0 1rem; }
  .eyebrow, .section-label { margin: 0; color: var(--accent); font-size: .72rem; font-weight: 800; letter-spacing: .16em; }
  h1 { margin: .35rem 0 0; font-size: clamp(2.5rem, 6vw, 4.8rem); letter-spacing: -.055em; line-height: .98; }
  .lede { max-width: 50rem; margin: 1rem 0 1.5rem; color: var(--muted); font-size: 1.08rem; line-height: 1.6; }
  .section-nav { display: flex; flex-wrap: wrap; gap: .5rem; }
  .section-nav a { padding: .45rem .75rem; border: 1px solid var(--border); border-radius: 999px; color: var(--ink); text-decoration: none;
    background: rgb(255 255 255 / .82); }
  .section-nav a:hover { border-color: var(--accent); color: var(--accent); }
  .gallery-section { scroll-margin-top: 4rem; padding: 3rem 0 1rem; }
  .gallery-section > header { max-width: 46rem; margin-bottom: 1.25rem; }
  .gallery-section h2 { margin: .3rem 0 .4rem; font-size: 2rem; letter-spacing: -.03em; }
  .gallery-section > header > p:last-child { margin: 0; color: var(--muted); }
  .gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 27rem), 1fr)); gap: 1rem; align-items: start; }
  .gallery-card { min-width: 0; padding: 1.15rem; border: 1px solid var(--border); border-radius: 1rem; background: var(--surface); box-shadow: var(--shadow); }
  .demo-heading { display: flex; align-items: start; justify-content: space-between; gap: 1rem; margin-bottom: 1rem; }
  .demo-heading > div { min-width: 0; }
  .demo-heading h3 { margin: 0; font-size: 1.05rem; }
  .demo-heading p { margin: .3rem 0 0; color: var(--muted); font-size: .88rem; line-height: 1.45; }
  .language-pill { flex: 0 0 auto; padding: .25rem .5rem; border-radius: 999px; color: var(--accent); background: var(--accent-soft);
    font-size: .72rem; font-weight: 750; }
  .preview { box-sizing: border-box; min-height: 9rem; margin-bottom: 1rem; padding: 1.25rem; overflow: auto; border: 1px solid var(--border);
    border-radius: .75rem; background: #fafcf9; }
  .preview > * { max-width: 100%; }
  .source { min-width: 0; }
  .code-block { box-sizing: border-box; max-height: 19rem; margin: 0; padding: 1rem; overflow: auto; border-radius: .75rem; color: #dbeafe;
    background: #17231f; font: .78rem/1.6 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; tab-size: 4; white-space: pre; }
  .token-keyword { color: #c4b5fd; } .token-string { color: #86efac; } .token-number { color: #fcd34d; }
  .token-comment { color: #94a3b8; font-style: italic; } .token-operator { color: #7dd3fc; }
  .inline-preview { display: flex; flex-wrap: wrap; align-items: center; gap: .75rem; }
  .stack, .form-preview { display: grid; gap: .9rem; }
  .switch-row, .icon-row { display: flex; align-items: center; gap: .6rem; }
  .icon-row lion-icon { width: 1.25rem; height: 1.25rem; border: 2px solid var(--accent); border-radius: .3rem; }
  lion-button, lion-button-submit, lion-button-reset, .primary-button, .secondary-button { box-sizing: border-box; padding: .55rem .9rem; border: 1px solid var(--border);
    border-radius: .55rem; color: var(--ink); background: var(--surface); font: inherit; cursor: pointer; }
  lion-button-submit, .primary-button { border-color: var(--accent); color: #fff; background: var(--accent); }
  lion-switch-button { border-radius: 999px; overflow: hidden; box-shadow: inset 0 0 0 1px var(--border); }
  lion-switch-button[checked] { box-shadow: 0 0 0 2px var(--accent); }
  lion-input input, lion-input-email input, lion-input-tel input, lion-input-tel-dropdown input, lion-textarea textarea, lion-field input,
  lion-input-amount input, lion-input-amount-dropdown input, lion-input-date input, lion-input-datepicker input, lion-input-iban input,
  lion-select select, lion-select-rich lion-select-invoker, lion-combobox input, lion-input-file input { box-sizing: border-box; width: 100%; padding: .55rem .65rem;
    border: 1px solid var(--border); border-radius: .5rem; color: var(--ink); background: var(--surface); font: inherit; }
  [slot="label"], .form-preview label { font-weight: 650; }
  [slot="help-text"] { color: var(--muted); font-size: .85rem; }
  lion-checkbox, lion-radio { display: block; margin-block: .35rem; }
  lion-progress-indicator { display: block; height: .55rem; border-radius: 999px;
    background: linear-gradient(to right, var(--accent) var(--progress, 0%), var(--border) 0); }
  lion-pagination { --pagination-color: var(--accent); }
  lion-tabs > [slot="tab"] { padding: .45rem .75rem; border: 0; border-bottom: 2px solid transparent; color: var(--muted); background: none; font: inherit; }
  lion-tabs > [slot="tab"][selected] { border-bottom-color: var(--accent); color: var(--ink); }
  lion-tabs > [slot="panel"] { padding-top: .75rem; }
  .link-button { padding: .35rem 0; border: 0; color: var(--accent); background: none; font: inherit; cursor: pointer; }
  .primitive-row { display: flex; gap: .75rem; align-items: center; padding: .75rem; border: 1px dashed var(--border); border-radius: .5rem; }
  .options-preview > * { padding: .45rem .65rem; border-radius: .4rem; }
  .options-preview > *:first-child { color: var(--accent); background: var(--accent-soft); }
  .steps-preview { display: flex; flex-wrap: wrap; gap: .6rem; }
  .steps-preview lion-step { padding: .45rem .65rem; border: 1px solid var(--border); border-radius: 999px; }
  .steps-preview lion-step[status="entered"] { border-color: var(--accent); color: var(--accent); background: var(--accent-soft); }
  .hint { width: 2rem; height: 2rem; border: 1px solid var(--border); border-radius: 50%; color: var(--accent); background: var(--surface); }
  .tooltip-card { display: block; padding: .45rem .65rem; border-radius: .45rem; color: #fff; background: var(--ink); }
  .overlay-card { max-width: 26rem; padding: 1.25rem; border-radius: .8rem; background: var(--surface); box-shadow: 0 24px 70px rgb(0 0 0 / .22); }
  .overlay-card h4, .drawer-card h4 { margin-top: 0; }
  .drawer-card { box-sizing: border-box; width: min(24rem, 90vw); min-height: 100vh; padding: 1.5rem; background: var(--surface); box-shadow: -20px 0 60px rgb(0 0 0 / .16); }
  .calendar-preview lion-calendar { max-width: 22rem; }
  footer { margin-top: 4rem; padding-top: 1.5rem; border-top: 1px solid var(--border); color: var(--muted); font-size: .85rem; }
  @media (max-width: 600px) { .gallery-page { padding-inline: .75rem; } .gallery-section { padding-top: 2rem; } .preview { padding: .9rem; }
    .calendar-preview lion-calendar { zoom: .8; } }
</style>
"""

app = serve(page, packages=[package], head=styles, title="spaday-lion gallery")

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8026)
