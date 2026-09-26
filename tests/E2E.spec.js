const { test, expect } = require("@playwright/test");

test.only("E2E Testing", async ({ page }) => {
  const productName = "ZARA COAT 3";
  const email = "kvijaykumar.testing@gmail.com";
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.getByPlaceholder("email@example.com").fill(email);
  await page.getByPlaceholder("enter your passsword").fill("Viasni@1");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();
  await page
    .locator(".card-body")
    .filter({ hasText: "ZARA COAT 3" })
    .getByRole("button", { name: " Add To Cart" })
    .click();
  // Wait for products to load
  const products = page.locator(".card-body");
  await products.first().waitFor();
  // Print product titles
  //   const titles = await page.locator(".card-body b").allTextContents();
  //   console.log(titles);
  //const count = await products.count();
  // Add product to cart
  //   for (let i = 0; i < count; i++) {
  //     const title = await products.nth(i).locator("b").textContent();
  //     if (title?.trim() === productName) {
  //       await products.nth(i).locator("button:has-text('Add To Cart')").click();
  //       break;
  //     }
  //   }
  // Navigate to Cart
  await page
    .getByRole("listitem")
    .getByRole("Button", { name: "Cart" })
    .click();
  // Verify product is in cart
  await page.locator("h3").first().waitFor();
  const isProductVisible = await page.getByText("${productName}").isVisible();
  //   expect(isProductVisible).toBeTruthy();
  // Checkout
  await page.locator("text=Checkout").click();
  await page
    .getByPlaceholder("Select Country")
    .pressSequentially("ind", { delay: 100 });
  await page.getByRole("button", { name: "India" }).nth(1).click();
  //   const dropdown = page.locator(".ta-results");
  //   await dropdown.waitFor();
  //   const optionsCount = await dropdown.locator("button").count();
  //   for (let i = 0; i < optionsCount; i++) {
  //     const text = await dropdown.locator("button").nth(i).textContent();
  //     if (text?.includes("India")) {
  //       await dropdown.locator("button").nth(i).click();
  //       break;
  //     }
  //   }
  await expect(page.locator(".user__name label")).toHaveText(email);
  await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary")).toHaveText(
    " Thankyou for the order. ",
  );
  // Capture Order ID
  const orderId = await page
    .locator(".em-spacer-1 .ng-star-inserted")
    .textContent();
  console.log("Order ID:", orderId);
  // Go to My Orders
  await page.locator("button[routerlink*='/dashboard/myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = page.locator("tbody tr");
  const rowCount = await rows.count();
  for (let i = 0; i < rowCount; i++) {
    const rowOrderId = await rows.nth(i).locator("th").textContent();
    if (orderId?.includes(rowOrderId?.trim())) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }
  // Verify Order ID in Details Page
  const orderIdDetails = await page.locator(".col-text").textContent();
  expect(orderIdDetails?.trim()).toContain(orderId);
  page.get;
});
