const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const baseConfig = require('./cypress.config')

const e2eOverride = {
  baseUrl: '',
}
const envOverride = {
  ENVIRONMENT: "QA"
}

module.exports = defineConfig({
  ...baseConfig,
  env: {
    ...baseConfig.env,
    ...envOverride
  },
  e2e: {
    ...baseConfig.e2e,
    ...e2eOverride
  },
});