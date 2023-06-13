const { defineConfig } = require('cypress');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    reportFilename: 'custom-report',
    overwrite: true,
    html: true,
    json: true,
    code: true,
    autoOpen: false,
    overwriteScreenshots: true,
    overwriteJson: false,
    failOnConsoleError: true, // Disable failing on console errors
    codeTheme: 'agate',
  },

  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },

    baseUrl: 'https://app.influnaire.dreamkashmir.com/brand/admin/login',
  },
});
