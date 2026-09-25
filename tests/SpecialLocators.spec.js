const { test, expect } = require("@playwright/test");

// checkboxes and Radio Btns
test.only("checkBox and Radio btns", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  await page.getByLabel("Check me out if you Love IceCreams!").click();
  await page.getByLabel("Employed").click();
  await page.getByLabel("Gender").selectOption("Female");
});
