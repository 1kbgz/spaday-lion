import fs from "fs";
import { expect, test } from "@playwright/test";

const built = fs.existsSync("dist/lite/index.html");

async function waitForPython(page) {
  await page.waitForFunction(
    () =>
      document.documentElement.dataset.ready === "true" ||
      document.querySelector("#pyodide-status")?.textContent ===
        "Unable to start",
    undefined,
    { timeout: 150_000 },
  );
  await expect(page.locator("html")).toHaveAttribute("data-ready", "true");
}

function collectErrors(page) {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  return errors;
}

async function expectNoHorizontalOverflow(page) {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  );
  expect(overflow).toBeLessThanOrEqual(1);
}

test("runs the complete example in Pyodide", async ({ page }) => {
  test.skip(!built, "run `make pyodide-example` first");
  test.setTimeout(180_000);
  await page.setViewportSize({ width: 320, height: 800 });
  const errors = collectErrors(page);

  await page.goto("/dist/lite/index.html");
  await waitForPython(page);
  await expect(page.locator(".hero h1")).toHaveText("Open an account");
  await page.locator("lion-input-email input").fill("ada@example.com");
  await page.locator("lion-input-iban input").fill("NL91ABNA0417164300");
  await page.locator("#submit").click();
  await expect(page.locator("#confirm-message")).toContainText(
    "a personal Basic account for Ada Lovelace",
  );
  await page.locator("#confirm-close").click();
  await page.locator("lion-tabs > button", { hasText: "Review queue" }).click();
  await expect(
    page.locator(".application", { hasText: "Ada Lovelace" }),
  ).toBeVisible();
  const rows = page.locator(".application");
  await expect(rows.first()).toBeVisible();
  const initial = await rows.count();
  await expect
    .poll(() => rows.count(), { timeout: 10_000 })
    .toBeGreaterThan(initial);

  const open = rows
    .filter({ has: page.locator("lion-button:not([disabled])") })
    .first();
  const id = await open.getAttribute("data-id");
  await open.locator("lion-button").click();
  await expect(
    page.locator(`.application[data-id="${id}"] .status`),
  ).toHaveText("Approved");
  await expectNoHorizontalOverflow(page);
  expect(errors).toEqual([]);
});

test("runs the component gallery in Pyodide", async ({ page }) => {
  test.skip(!built, "run `make pyodide-example` first");
  test.setTimeout(180_000);
  await page.setViewportSize({ width: 320, height: 800 });
  const errors = collectErrors(page);

  await page.goto("/dist/lite/?example=gallery");
  await waitForPython(page);
  await expect(page.locator(".hero h1")).toHaveText("Component gallery");
  expect(await page.locator(".gallery-card").count()).toBeGreaterThan(10);
  await expect(page.locator("lion-input-amount-dropdown")).toBeVisible();
  await expect(page.locator(".token-keyword").first()).toHaveText("from");
  await expectNoHorizontalOverflow(page);
  expect(errors).toEqual([]);
});
