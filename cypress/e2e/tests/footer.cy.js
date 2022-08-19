/// <reference types="Cypress" />

describe('Check footer on site',() => {
  before('visit page', () => {
    cy.visit('localhost:1313')
  })

  it("validate that contact footer is present", () =>{
    cy.get('[data-test="footer-contact"]').should('be.visible')
  })

  it("validate that each link is working as expected", () =>{
    cy.get('[data-test="footer"]').should('be.visible').find('a').then(link => {
      cy.get(link[0]).contains('General Services Administration').should('have.attr', 'href').and('include', 'https://www.gsa.gov/')
      cy.get(link[1]).contains('About Vote.gov').should('have.attr', 'href').and('include', 'https://www.gsa.gov/about-us')
      cy.get(link[2]).contains('Accessibility').should('have.attr', 'href').and('include', 'https://www.gsa.gov/website-information/accessibility-aids')
      cy.get(link[3]).contains('FOIA Requests').should('have.attr', 'href').and('include', 'https://www.gsa.gov/reference/freedom-of-information-act-foia')
      cy.get(link[4]).contains('No Fear Act data').should('have.attr', 'href').and('include', 'https://www.gsa.gov/reference/civil-rights-programs/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002')
      cy.get(link[5]).contains('Office of the Inspector General').should('have.attr', 'href').and('include', 'https://www.gsaig.gov/')
      cy.get(link[6]).contains('Performance Reports').should('have.attr', 'href').and('include', 'https://www.gsa.gov/reference/reports/budget-performance')
      cy.get(link[7]).contains('Privacy Policy').should('have.attr', 'href').and('include', 'https://www.usa.gov/policies')
      cy.get(link[8]).contains('Visit USA.gov').should('have.attr', 'href').and('include', 'https://usa.gov')
    })
  })
})