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

test("passes the Spaday muted token to disabled Lion form controls", async ({
  page,
}) => {
  await page.goto("/dist/index.html");
  const color = await page.evaluate(async () => {
    const app = document.createElement("spa-app");
    app.style.setProperty("--spa-muted", "rgb(12, 34, 56)");
    const input = document.createElement("lion-input");
    input.label = "Disabled";
    input.disabled = true;
    app.append(input);
    document.body.append(app);
    await input.updateComplete;
    return getComputedStyle(input.querySelector("label")).color;
  });
  expect(color).toBe("rgb(12, 34, 56)");
});

test("applies tooltip arrow tokens to the rendered arrow", async ({ page }) => {
  await page.goto("/dist/index.html");
  const dimensions = await page.evaluate(async () => {
    const tooltip = document.createElement("lion-tooltip");
    tooltip.style.setProperty("--tooltip-arrow-width", "18px");
    tooltip.style.setProperty("--tooltip-arrow-height", "11px");
    document.body.append(tooltip);
    await tooltip.updateComplete;
    const style = getComputedStyle(tooltip.shadowRoot.querySelector(".arrow"));
    return { width: style.width, height: style.height };
  });
  expect(dimensions).toEqual({ width: "18px", height: "11px" });
});

test("applies drawer size and transition tokens to its container", async ({
  page,
}) => {
  await page.goto("/dist/index.html");
  const values = await page.evaluate(async () => {
    const drawer = document.createElement("lion-drawer");
    const tokens = {
      "--min-width": "80px",
      "--max-width": "360px",
      "--min-height": "40px",
      "--max-height": "240px",
      "--start-width": "144px",
      "--start-height": "120px",
      "--transition-property": "height",
    };
    for (const [name, value] of Object.entries(tokens)) {
      drawer.style.setProperty(name, value);
    }
    document.body.append(drawer);
    await drawer.updateComplete;
    const host = getComputedStyle(drawer);
    const style = getComputedStyle(
      drawer.shadowRoot.querySelector(".container"),
    );
    return {
      width: style.width,
      height: style.height,
      minWidth: style.minWidth,
      maxWidth: style.maxWidth,
      minHeight: style.minHeight,
      maxHeight: style.maxHeight,
      transitionProperty: style.transitionProperty,
      startWidth: host.getPropertyValue("--start-width").trim(),
      startHeight: host.getPropertyValue("--start-height").trim(),
    };
  });
  expect(values).toEqual({
    // A closed drawer uses its configured minimum; start width remains available for its CSS state.
    width: "80px",
    height: "120px",
    minWidth: "80px",
    maxWidth: "360px",
    minHeight: "40px",
    maxHeight: "240px",
    transitionProperty: "height",
    startWidth: "144px",
    startHeight: "120px",
  });
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

test("warns, naming what it serves, when another copy registered its elements first", async ({
  page,
}) => {
  // the page keeps the first registration, so the loser says which elements are not its own
  const warnings = [];
  page.on("console", (message) => {
    if (message.type() === "warning") warnings.push(message.text());
  });
  await page.addInitScript(() => {
    customElements.define("lion-button", class extends HTMLElement {});
  });
  await page.goto("/dist/index.html");
  await expect
    .poll(() => warnings.find((text) => text.includes("<lion-button>")))
    .toMatch(/ \d+\.\d+\.\d+\S*: another copy on the page already registered /);
  expect(warnings.find((text) => text.includes("<lion-button>"))).toContain(
    "@lion/ui ",
  );
});
