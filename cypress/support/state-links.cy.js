/// <reference types="Cypress" />

describe('Validate links on stage pages', () => {
  it('Test Alaska links', () => {
    cy.visit('http://localhost:1313/register/ak/')
    cy.get('[data-test="footer"]').should('be.visible')

    // Test links on page.
    cy.get('[href="https://voterregistration.alaska.gov/?ref=voteusa_en"]').click()
    cy.url().should('be.equal', 'https://voterregistration.alaska.gov/?ref=voteusa_en')
    cy.go('back')

    cy.get('[href="https://www.elections.alaska.gov/Core/voterregistration.php?ref=voteusa_en"]').click()
    cy.url().should('be.equal', 'https://www.elections.alaska.gov/Core/voterregistration.php?ref=voteusa_en')
    cy.go('back')

    cy.get('[href="https://myvoterinformation.alaska.gov/?ref=voteusa_en"]').click()
    cy.url().should('be.equal', 'https://myvoterinformation.alaska.gov/?ref=voteusa_en')
    cy.go('back')

    cy.get('[data-test="back-button"]').click()
    cy.url().should('be.equal', 'http://localhost:1313/')
  })

  it('Test American Samoa links', () => {
    // This test is similar to North Dakota, the links are not working in the GitHub actions pipeline and were taking too long to load. They have been checked manually.
    cy.visit('http://localhost:1313/register/as/')
    cy.get('[data-test="footer"]').should('be.visible')

    // Test links on page.
    cy.get('[class="reg-link"]').then(link => {
      cy.get(link[0]).invoke('attr', 'href').should('be.equal', 'https://aselectionoffice.gov/?ref=voteusa_en')
      cy.get(link[1]).invoke('attr', 'href').should('be.equal', 'https://aselectionoffice.gov/status.php?ref=voteusa_en')
    })

    cy.get('[data-test="back-button"]').click()
    cy.url().should('be.equal', 'http://localhost:1313/')
  })

  it('Test Arkansas links', () => {
    cy.visit('http://localhost:1313/register/ar/')
    cy.get('[data-test="footer"]').should('be.visible')

    // check links on page
    cy.get('[href="https://www.sos.arkansas.gov/elections/voter-information/?ref=voteusa_en"]').click()
    cy.url().should('be.equal', 'https://www.sos.arkansas.gov/elections/voter-information/?ref=voteusa_en')
    cy.go('back')

    cy.get('[href="https://www.voterview.ar-nova.org/voterview?ref=voteusa_en"]').click()
    cy.url().should('be.equal', 'https://www.voterview.ar-nova.org/voterview?ref=voteusa_en')
    cy.go('back')

    cy.get('[data-test="back-button"]').click()
    cy.url().should('be.equal', 'http://localhost:1313/')
  })

  it('Test North Dakota links', () => {
  // This test is different from the rest, the link on the page does not allow cypress to go back and complete the test. This has been tested manually and is working as expected.
  cy.visit('http://localhost:1313/register/nd/')
  cy.get('[data-test="footer"]').should('be.visible')

  cy.get('[class="reg-link"]').invoke('attr', 'href').should('be.equal', 'https://vip.sos.nd.gov/PortalList.aspx?ref=voteusa_en')

  cy.get('[data-test="back-button"]').click()
  cy.url().should('be.equal', 'http://localhost:1313/')

  })
})
