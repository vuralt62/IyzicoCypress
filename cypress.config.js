const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
require('dotenv').config({ path: '../.env' });

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  experimentalModifyObstructiveThirdPartyCode: true,
  chromeWebSecurity: false,
  video: true,
  screenshotOnRunFailure: true,
  videosFolder: "cypress/reports/videos",
  screenshotsFolder: 'cypress/fixtures/screenshots',
  env: {
    ENVIRONMENT: "test"
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      on('after:run', (results) => {
        require('./cypress/reports/reporter')(results);
      })
    },
    specPattern: "cypress/e2e/**/*.feature",
    nonGlobalStepDefinitions: false,
    stepDefinitions: "cypress/support/step_definitions/**/*.js",
    supportFile: "cypress/support/index.js",
  },
});