import './commands'
import 'cypress-axe'

Cypress.Commands.add('getUrlsArray', () => {
  cy.request({
    url: 'http://localhost:1313/sitemap.xml',
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



function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  )
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  )

  cy.task('table', violationData)
}