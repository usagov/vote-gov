// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add('getUrlsArray', () => {
  cy.request({
    url: 'http://vote.gov/sitemap.xml',
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
    },
  })
    .as('sitemap')
    .then(response =>
      Cypress.$(response.body)
        .find('loc')
        .toArray()
        .map(el => el.innerText)
    )
})

