const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1os7of',
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: true,
    html: true,
    json: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
