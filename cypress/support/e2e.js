import './commands'
import 'cypress-axe'

Cypress.Commands.add('getUrlsEnglish', () => {
  cy.request({
    url: 'http://localhost:1313/en/sitemap.xml',
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

Cypress.Commands.add('getUrlsSpanish', () => {
  cy.request({
    url: 'http://localhost:1313/es/sitemap.xml',
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