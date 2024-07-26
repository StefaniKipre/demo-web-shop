const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "Tests/tests.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// Catch any assertion failures and log them
/*Cypress.on('fail', (error, runnable) => {
  console.error('Assertion failure:', error.message)
  // Returning false here prevents Cypress from failing the test
  return false
})*/