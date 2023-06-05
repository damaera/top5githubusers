import { test, expect } from "@playwright/test";

test("page has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Search top 5/);
});

test("page has form", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page.locator("h2")).toContainText(/Search top 5/);
  await expect(page.locator("input")).toBeAttached();
  await expect(page.locator("button")).toBeAttached();
});

test("can search users", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const text = "hello";

  await page.locator("input").fill(text);
  await page.locator("button").click();

  const resultText = page.locator(".user-result-text");

  await expect(resultText).toContainText(text);

  const allItemResults = await page.locator(".user-result-item").all();

  expect(allItemResults.length).toBeLessThanOrEqual(5);
});
