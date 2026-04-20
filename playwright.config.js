const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./e2e", // This MUST match your folder name exactly
  use: {
    baseURL: "http://localhost:8080",
  },
  webServer: {
    command: "npm start",
    url: "http://localhost:8080",
    reuseExistingServer: !process.env.CI,
  },
});
