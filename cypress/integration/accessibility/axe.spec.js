/// <reference types="Cypress" />

// the function below allows for axe to put the error message into a table that is locted in the terminal after the test is ran
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


const urls = ['http://localhost:1313', 'http://localhost:1313/register/ak/', 'http://localhost:1313/register/as/', 'http://localhost:1313/register/nd/', ]

describe('check accessibility on vote.gov pages', () =>{
  urls.forEach((url) => {
    it(`run axe core ${url}`, () => {
      cy.visit(url)
      cy.injectAxe()
      cy.checkA11y(null, null, terminalLog)
    })
  })
})