const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  e2e: {
    baseUrl: 'http://localhost:1313/',
    viewportHeight: 800,
    viewportWidth: 1530,
    chromeWebSecurity: false, 
    "retries": {
      "runMode": 2,
      // "openMode": 0
    },
    chromeWebSecurity: false,
    responsetimeout: 10000,
    "blockHosts": ["www.google-analytics.com", "ssl.google-analytics.com"],


    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
