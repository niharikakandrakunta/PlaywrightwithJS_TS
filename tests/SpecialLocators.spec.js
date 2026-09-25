const { test, expect } = require("@playwright/test");

// checkboxes and Radio Btns
test("Special Locators", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  await page.getByLabel("Check me out if you Love IceCreams!").click();
  await page.getByLabel("Employed").check();
  await page.getByLabel("Gender").selectOption("Female");
  await page.getByPlaceholder("Password").fill("abc123");

  // used to click on the button
  await page.getByRole("button",{name:'Submit'}).click();
  await page.getByText(" The Form has been submitted successfully!.").isVisible({timeout:10_000});

  await page.getByRole("link",{name:"Shop"}).click();
  await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();


});

test.only("Test Level timeout", async ({ page }) => {
  
  const slowExpect = expect.configure({timeout:9000});
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  await page.getByLabel("Check me out if you Love IceCreams!").click();
  await page.getByLabel("Employed").check();
  await page.getByLabel("Gender").selectOption("Female");
  await page.getByPlaceholder("Password").fill("abc123");

  // used to click on the button
  await page.getByRole("button",{name:'Submit'}).click();
  await slowExpect(page.getByText(" The Form has been submitted successfully!.")).isVisible();

  await page.getByRole("link",{name:"Shop"}).click();
  await slowExpect(page.locator(".my-4").first()).toHaveText("Shop");
  await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();

});
