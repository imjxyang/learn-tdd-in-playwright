import { test, expect } from "@playwright/test";

const LINK = "http://localhost:5173/";

test.beforeEach(async ({ page }) => {
  await page.goto(LINK);
});

test.describe("Test Playwright", () => {
  test("Has title", async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  });

  test("Displays the message in the list", async ({ page }) => {
    const input = page.getByTestId("app-input");
    const button = page.getByTestId("app-button");
    await input.fill("Hello World");
    await button.click();
    await expect(input).toHaveValue("");
    await expect(page.getByTestId("app-list")).toContainText("Hello World");
  });
});
