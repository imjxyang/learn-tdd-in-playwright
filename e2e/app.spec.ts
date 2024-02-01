import { test, expect } from "@playwright/test";

const LINK = "https://learn-tdd-in-playwright.vercel.app/";

test.beforeEach(async ({ page }) => {
  await page.goto(LINK);
});

test.describe("Test Playwright", () => {
  test("Displays the message in the list", async ({ page }) => {
    const input = page.getByTestId("app-input");
    const button = page.getByTestId("app-button");
    await input.fill("Hello World");
    await button.click();
    await expect(input).toHaveValue("");
    await expect(page.getByTestId("app-list")).toContainText("Hello World");
  });

  test("Display menu when hovering over menu button", async ({ page }) => {
    await expect(page.getByTestId("menu")).not.toBeVisible();
    await page.getByTestId("show-menu").hover();
    await expect(page.getByTestId("menu")).toBeVisible();
  });
});
