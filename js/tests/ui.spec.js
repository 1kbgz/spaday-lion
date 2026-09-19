import { expect, test } from "@playwright/test";

const PAGE = "http://127.0.0.1:8033";

test("renders Lion controls and one explicit fallback", async ({ page }) => {
  await page.goto(PAGE);
  await page.locator("#dialog").waitFor({ state: "attached" });
  expect(
    await page.evaluate(() =>
      [
        "save",
        "name",
        "notes",
        "count",
        "date",
        "agree",
        "dark",
        "plan",
        "priority",
        "volume",
        "progress",
        "dialog",
      ].map((id) => document.getElementById(id).localName),
    ),
  ).toEqual([
    "lion-button",
    "lion-input",
    "lion-textarea",
    "lion-input-stepper",
    "lion-input-date",
    "lion-checkbox",
    "lion-switch",
    "lion-select-rich",
    "lion-radio-group",
    "lion-input-range",
    "lion-progress-indicator",
    "lion-dialog",
  ]);
  await expect(page.locator("[data-ui-fallback]")).toHaveCount(1);
});

test("Lion serialized values round-trip through the store", async ({
  page,
}) => {
  await page.goto(PAGE);
  const state = page.locator("#state");
  await page.locator("#name").evaluate((element) => {
    element.modelValue = "Ada";
  });
  await page.locator("#notes").evaluate((element) => {
    element.modelValue = "Ready";
  });
  await expect(state).toContainText("Ada|Ready|");
  await page.getByRole("checkbox", { name: "Agree" }).check();
  await page.getByRole("switch", { name: "Dark" }).check();
  await expect(state).toContainText("|true|true|");
  await page.locator("#save").click();
  await expect(state).toContainText("|true|false");
});

test("dialog and field errors keep their shared behavior", async ({ page }) => {
  await page.goto(PAGE);
  const dialog = page.locator("#dialog");
  await expect(dialog).toHaveJSProperty("opened", false);
  await page.locator("#open").click();
  await expect(dialog).toHaveJSProperty("opened", true);
  await dialog.evaluate((element) => {
    element.opened = false;
  });
  await expect(page.locator("#state")).toContainText("|false");
  await expect(page.locator("#email")).toHaveAttribute("aria-invalid", "true");
  await expect(page.getByText("Required")).toBeVisible();
});
