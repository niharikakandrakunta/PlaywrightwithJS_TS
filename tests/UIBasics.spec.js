// const {test,expect} = require('@playwright/test');
// const { log } = require('node:console');

// test(' first testcase',async ({browser})=> {
//   //Fixtures are global variables
//   const user = page.locator("#username");
//   const signIn = page.locator("#signInBtn")
//   const context = await browser.newContext();
//   const page = await context.newPage();  
//   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//   await page.locator("#username").fill("rahulshetty");
//   await page.locator("#password").fill("Learning@830$3mK2");
//   await page.locator("#signInBtn").click();
//   console.log(await page.locator("[style*='block']").textContent());
//   await expect(await page.locator("[style* ='block']")).toContainText("Incorrect");
//   await user.fill("");
//   await user.fill("rahulshettyacademy");
//   await signIn.click()  

// });

// test('Second Testcase ', async ({page}) => {
//   await page.goto("https://www.google.co.in");
//   console.log(await page.title());
//   await expect(page).toHaveTitle("Google")
// })

// test('Third Testcase ', async ({page}) => {
  
// })


