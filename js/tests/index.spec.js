import { expect, test } from "@playwright/test";

test("registers and renders the Lion catalog", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/dist/index.html");
  await page.evaluate(() => {
    const input = document.createElement("lion-input");
    input.label = "Name";
    document.body.appendChild(input);
  });
  await expect(page.locator("lion-input label")).toHaveText("Name");
  expect(
    await page.evaluate(() => ({
      // the two the published manifest names wrongly
      selectRich: !!customElements.get("lion-select-rich"),
      inputRange: !!customElements.get("lion-input-range"),
    })),
  ).toEqual({ selectRich: true, inputRange: true });
  expect(errors).toEqual([]);
});

test("survives an application that already registered a Lion element", async ({
  page,
}) => {
  // an app shipping its own copy of Lion registers `lion-button` first; without the define-guard
  // this bundle throws from `customElements.define` and the page renders no Lion at all
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript(() => {
    customElements.define("lion-button", class extends HTMLElement {});
  });
  await page.goto("/dist/index.html");
  await page.waitForFunction(() => !!customElements.get("lion-input"));
  expect(errors).toEqual([]);
  expect(
    await page.evaluate(() => ({
      theirs: !("disabled" in document.createElement("lion-button")),
      restored: String(customElements.define).includes("native code"),
    })),
  ).toEqual({ theirs: true, restored: true });
});

test("publishes the Lion version it serves", async ({ page }) => {
  await page.goto("/dist/index.html");
  await page.waitForFunction(() => !!globalThis.__spadayLion);
  expect(await page.evaluate(() => globalThis.__spadayLion.version)).toMatch(
    /^\d+\.\d+\.\d+/,
  );
});
