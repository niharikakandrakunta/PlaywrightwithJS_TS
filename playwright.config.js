// @ts-check
import { defineConfig, devices } from "@playwright/test";

const config = {
  testDir: "./tests",
  testMatch: "**/*.spec.js",
  retries: 0,

  timeout: 10 * 1000,
  actionTimeout:70*1000,
  expect: {
    timeout: 10 * 1000,
  },

  reporter: "html",
  /* Configure projects for major browsers */
  use: {
    browsername: "chromium",
    headless: false,
    screenshot: "on",    
    trace: "on",
  },
};

module.exports = config;
