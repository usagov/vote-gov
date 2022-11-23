/// <reference types="Cypress" />

describe('Validate links on stage pages', () => {
  it('Test Alaska links', () => {
    cy.visit('http://localhost:1313/register/ak/')
    cy.get('[data-test="footer"]').should('be.visible')

    // Test links on page.
    cy.get('[data-test="main-info"]').find('a').then(regLink => {
      cy.get(regLink[0]).should('have.attr', 'href').and('include', 'https://voterregistration.alaska.gov/?ref=voteusa_en')
      cy.get(regLink[1]).should('have.attr', 'href').and('include', 'https://www.elections.alaska.gov/Core/voterregistration.php?ref=voteusa_en')
      cy.get(regLink[2]).should('have.attr', 'href').and('include', 'https://myvoterinformation.alaska.gov/?ref=voteusa_en')
    })
    cy.get('[data-test="back-button"]').click()
    cy.url().should('be.equal', 'http://localhost:1313/')
  })

  it('Test American Samoa links', () => {
    cy.visit('http://localhost:1313/register/as/')
    cy.get('[data-test="footer"]').should('be.visible')

    // Test links on page.
    cy.get('[data-test="main-info"]').find('a').then(regLink => {
      cy.get(regLink[0]).should('have.attr', 'href').and('include', 'https://aselectionoffice.gov/?ref=voteusa_en')
      cy.get(regLink[1]).should('have.attr', 'href').and('include', 'https://aselectionoffice.gov/status.php?ref=voteusa_en')
    })

    cy.get('[data-test="back-button"]').click()
    cy.url().should('be.equal', 'http://localhost:1313/')
  })

  it('Test Arkansas links', () => {
    cy.visit('http://localhost:1313/register/ar/')
    cy.get('[data-test="footer"]').should('be.visible')

    // check links on page
    cy.get('[data-test="main-info"]').find('a').then(regLink => {
      cy.get(regLink[0]).should('have.attr', 'href').and('include', 'https://www.sos.arkansas.gov/elections/voter-information/?ref=voteusa_en')
      cy.get(regLink[1]).should('have.attr', 'href').and('include', 'https://www.voterview.ar-nova.org/voterview?ref=voteusa_en')
    })

    cy.get('[data-test="back-button"]').click()
    cy.url().should('be.equal', 'http://localhost:1313/')
  })

  it('Test North Dakota links', () => {
  // This test is different from the rest, the format of this page is different than the rest and unable to verify the text in the link with Cypress. This has been tested manually and is working as expected.
  cy.visit('http://localhost:1313/register/nd/')
  cy.get('[data-test="footer"]').should('be.visible')

  cy.get('[data-test=main-info]').find('a').then(regLink => {
    cy.get(regLink[0]).should('have.attr', 'href').and('include', 'ttps://vip.sos.nd.gov/PortalList.aspx?ref=voteusa_en')
  })

  cy.get('[data-test="back-button"]').click()
  cy.url().should('be.equal', 'http://localhost:1313/')

  })
})
