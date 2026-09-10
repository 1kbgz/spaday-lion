import asyncio

import httpx
import pytest

from spaday_lion import example


async def request(method: str, path: str, **kwargs):
    transport = httpx.ASGITransport(app=example.app)
    async with httpx.AsyncClient(transport=transport, base_url="http://example") as client:
        return await client.request(method, path, **kwargs)


def run_ticks(monkeypatch, ticks: int):
    """Run the review loop for ``ticks`` iterations."""
    sleeps = 0

    class Done(Exception):
        pass

    async def sleep(_delay):
        nonlocal sleeps
        sleeps += 1
        if sleeps > ticks:
            raise Done

    monkeypatch.setattr(example.asyncio, "sleep", sleep)
    with pytest.raises(Done):
        asyncio.run(example.review_applications())


def test_example_serves_the_onboarding_page():
    response = asyncio.run(request("GET", "/tree.json"))
    assert response.status_code == 200
    for tag in ("lion-form", "lion-input-iban", "lion-combobox", "lion-tabs", "lion-dialog", "lion-accordion", "spa-each"):
        assert tag in response.text


def test_reviews_advance_and_applications_arrive(monkeypatch):
    in_review = {row["id"]: row["progress"] for row in example.feed.applications if row["status"] == "In review"}
    arriving = f"A-{example.next_number()}"
    run_ticks(monkeypatch, 3)
    rows = {row["id"]: row for row in example.feed.applications}
    assert all(rows[key]["progress"] > progress for key, progress in in_review.items() if key in rows)
    assert rows[arriving]["status"] == "In review"  # every third tick an application arrives
    assert example.feed.in_review == sum(row["status"] == "In review" for row in example.feed.applications)


def test_applying_queues_the_application():
    form = {
        "full_name": "Grace Hopper",
        "email": "grace@example.com",
        "iban": "NL91ABNA0417164300",
        "deposit": 2500,
        "start": "2026-10-01",
        "plan": "premium",
        "country": "Netherlands",
        "account_type": "business",
        "products": ["debit card", "savings pot"],
        "overdraft": 1000,
        "cards": 2,
        "paperless": {"value": "", "checked": True},
        "notes": "",
    }
    response = asyncio.run(request("POST", "/api/applications", json=form))
    assert response.status_code == 200
    row = example.feed.applications[0]
    assert (row["name"], row["plan"], row["deposit"], row["status"]) == ("Grace Hopper", "Premium", "€2,500.00", "In review")
    assert response.json()["message"] == (
        f"{row['id']}: a business Premium account for Grace Hopper (Netherlands), €2,500.00 opening deposit, "
        "2 card(s), debit card, savings pot, starting 2026-10-01."
    )
    rejected = asyncio.run(request("POST", "/api/applications", json={"full_name": "", "email": "", "iban": ""}))
    assert rejected.status_code == 422
    assert rejected.json() == {"message": "Please add your name, an email, an IBAN."}


def test_approving_counts_the_account_once():
    row = next(row for row in example.feed.applications if row["status"] == "In review")
    opened = example.feed.opened_today
    assert asyncio.run(request("POST", f"/api/applications/{row['id']}/approve")).json() == {"message": f"Approved {row['id']}"}
    assert example.feed.opened_today == opened + 1
    assert asyncio.run(request("POST", f"/api/applications/{row['id']}/approve")).status_code == 409
