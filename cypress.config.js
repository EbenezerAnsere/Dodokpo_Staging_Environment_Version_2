const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('file:preprocessor', cucumber());
    },

    specPattern: 'cypress/e2e/**/*.feature',
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 60000,
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
		downloadsFolder: "cypress/downloads",
		viewportHeight: 900,
		viewportWidth: 1300,
		chromeWebSecurity: true,
    baseUrl: "https://amap-v2.amalitech-dev.net/login"

  },
});
