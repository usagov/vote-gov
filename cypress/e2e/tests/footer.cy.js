/// <reference types="Cypress" />

describe('Check footer on site',() => {
  beforeEach('visit page', () => {
    cy.visit('localhost:1313')
  })

  it("validate that each link is working as expected", () =>{
    cy.get('[data-test="footer"]').should('be.visible')

    // Ensure that links are taking user to correct page.
    cy.get('[href="https://www.gsa.gov/"]').click()
    cy.url().should('be.equal', 'https://www.gsa.gov/')
    cy.go('back')

    cy.get('[href="https://www.gsa.gov/about-us"]').click()
    cy.url().should('be.equal', 'https://www.gsa.gov/about-us')
    cy.go('back')

    cy.get('[href="https://www.gsa.gov/website-information/accessibility-aids"]').click()
    cy.url().should('be.equal', 'https://www.gsa.gov/website-information/accessibility-aids')
    cy.go('back')

    cy.get('[href="https://www.gsa.gov/reference/freedom-of-information-act-foia"]').click()
    cy.url().should('be.equal', 'https://www.gsa.gov/reference/freedom-of-information-act-foia')
    cy.go('back')

    cy.get('[href="https://www.gsa.gov/reference/civil-rights-programs/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002"]').click()
    cy.url().should('be.equal', 'https://www.gsa.gov/reference/civil-rights-programs/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002')
    cy.go('back')

    cy.get('[href="https://www.gsaig.gov/"]').click()
    cy.url().should('be.equal', 'https://www.gsaig.gov/')
    cy.go('back')

    cy.get('[href="https://www.gsa.gov/reference/reports/budget-performance"]').click()
    cy.url().should('be.equal', 'https://www.gsa.gov/reference/reports/budget-performance')
    cy.go('back')

    cy.get('[href="https://www.usa.gov/policies"]').click()
    cy.url().should('be.equal', 'https://www.usa.gov/policies')
    cy.go('back')

    cy.get('[href="https://usa.gov"]').click()
    cy.url().should('be.equal', 'https://www.usa.gov/')
    cy.go('back')
  })
})