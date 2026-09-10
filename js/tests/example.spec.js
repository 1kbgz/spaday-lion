import { expect, test } from "@playwright/test";

/* The account opening page in spaday_lion/example.py, run as its own server. */

const PAGE = "http://127.0.0.1:8025";

const tab = (page, name) =>
  page.locator("lion-tabs > button", { hasText: name });

test("opens an account with the whole Lion form as the request", async ({
  page,
}) => {
  await page.goto(PAGE);
  await page.locator("lion-input-email input").fill("ada@example.com");
  await page.locator("lion-input-iban input").fill("NL91ABNA0417164300");
  // Lion formats the IBAN as it is entered
  await page.locator("lion-input-iban input").blur();
  await expect(page.locator("lion-input-iban input")).toHaveValue(
    "NL91 ABNA 0417 1643 00",
  );
  await page.locator("lion-combobox input").click();
  await page.locator("lion-combobox input").pressSequentially("Ger");
  await page
    .locator("lion-combobox lion-option", { hasText: "Germany" })
    .click();
  await page.locator("#submit").click();
  const message = page.locator("#confirm-message");
  await expect(message).toContainText(
    "a personal Basic account for Ada Lovelace (Germany), €1,500.00 opening deposit, 1 card(s), debit card",
  );
  const id = (await message.textContent()).split(":")[0];
  await page.locator("#confirm-close").click();
  await tab(page, "Review queue").click();
  await expect(page.locator(`.application[data-id="${id}"]`)).toContainText(
    "Ada Lovelace",
  );
});

test("two-way bindings keep the preview in step with the fields", async ({
  page,
}) => {
  await page.goto(PAGE);
  const preview = page.locator("#preview");
  await expect(preview).toContainText("Ada Lovelace with €1500");
  await page.locator("lion-input input").first().fill("Grace Hopper");
  await expect(preview).toContainText("Grace Hopper");
});

test("streams the review queue from Python", async ({ page }) => {
  await page.goto(PAGE);
  await tab(page, "Review queue").click();
  const rows = page.locator(".application");
  await expect(rows.first()).toBeVisible();
  const ids = () => rows.evaluateAll((all) => all.map((row) => row.dataset.id));
  const initial = await ids();
  await expect
    .poll(async () => (await ids()).some((id) => !initial.includes(id)), {
      timeout: 10_000,
    })
    .toBe(true);
});

test("the help tab expands answers and the fee schedule", async ({ page }) => {
  await page.goto(PAGE);
  await tab(page, "Help").click();
  await page.locator(".accordion-invoker", { hasText: "Which IBANs" }).click();
  await expect(page.getByText("Any valid SEPA IBAN")).toBeVisible();
  await page.locator("#fees [slot=invoker]").click();
  await expect(page.locator("#fees")).toContainText("Premium: €12/month");
});

test("the dark switch flips the palette the Lion elements are styled with", async ({
  page,
}) => {
  await page.goto(PAGE);
  const surface = () =>
    page
      .locator(".stat")
      .first()
      .evaluate((el) => getComputedStyle(el).backgroundColor);
  const light = await surface();
  await page.locator("#dark").click();
  await expect(page.locator("html")).toHaveClass(/wa-dark/);
  await expect.poll(surface).not.toBe(light);
});
