const { defineConfig } = require('cypress');

const gmailTask = require('./cypress/support/gmail-task')

module.exports = defineConfig({
  watchForFileChanges:false,
  env: {
    StagingSigninUrl: "https://staging-fe.mezagent.com/auth/sign-in",
    StagingSignupUrl: "https://staging-fe.mezagent.com/auth/sign-up",
    ProdSigninUrl: "https://app.mezagent.com/auth/sign-in",
    ProdSignupUrl: "https://app.mezagent.com/auth/sign-up",
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    watchForFileChanges:false,
    pageLoadTimeout:120000,
    setupNodeEvents(on, config) {
      gmailTask(on, config);
      return config,

      require('cypress-mochawesome-reporter/plugin')(on)
      
    },
  },
  
});
