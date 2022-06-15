/// <reference types="Cypress" />
// import 'terminalLog'
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

describe('check that axe plugin works', () => {
  before('visit site and inject axe', () => {
    cy.visit('http://localhost:1313/register/al/')
    cy.injectAxe()
  })

  it('check the plugin', () => {
    cy.checkA11y(null, null, terminalLog)
  })
})