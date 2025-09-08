const { defineConfig } = require("cypress");

 module.exports = defineConfig({
  
   e2e: {
    defaultCommandTimeout:6000,
     baseUrl: "https://hotel-example-site.takeyaqa.dev",
    chromeWebSecurity: false,  
     specPattern: "cypress/integration/*.js",
     setupNodeEvents(on, config) {
       // implement node event listeners here
     },

   },
 });

