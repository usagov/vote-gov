/// <reference types="Cypress" />

describe('check links on stage pages', () => {
  it('alaska links check', () => {
    cy.visit('http://localhost:1313/register/ak/')
    cy.get('[data-test="footer-2"]').should('be.visible')

    // check links on page
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

  it('american samoa links check', () => {
    cy.visit('http://localhost:1313/register/as/')
    cy.get('[data-test="footer-2"]').should('be.visible')

    // check links on page
    // cy.get('[href="https://aselectionoffice.gov/?ref=voteusa_en"]').click()
    // cy.url().should('be.equal', 'https://aselectionoffice.gov/?ref=voteusa_en')
    // cy.go('back')

    cy.get('[class="reg-link"]').invoke('attr', 'href').should('be.equal', 'https://aselectionoffice.gov/?ref=voteusa_en')
    
    // cy.get('[href="https://aselectionoffice.gov/status.php?ref=voteusa_en"]').click()
    // cy.url().should('be.equal', 'https://aselectionoffice.gov/status.php?ref=voteusa_en')
    // cy.go('back')

    cy.get('[class="reg-link"]').invoke('attr', 'href').should('be.equal', 'https://aselectionoffice.gov/status.php?ref=voteusa_en')

    cy.get('[data-test="back-button"]').click()
    cy.url().should('be.equal', 'http://localhost:1313/')
  })

  it('arkansas links check', () => {
    cy.visit('http://localhost:1313/register/ar/')
    cy.get('[data-test="footer-2"]').should('be.visible')

    // check links on page
    cy.get('[href="https://www.sos.arkansas.gov/elections/voter-information/?ref=voteusa_en"]').click()
    cy.url().should('be.equal', 'https://www.sos.arkansas.gov/elections/voter-information/?ref=voteusa_en')
    cy.go('back')

    // cy.get('[class="reg-link"]').invoke('attr', 'href').should('be.equal', 'https://www.sos.arkansas.gov/elections/voter-information/?ref=voteusa_en')

    cy.get('[href="https://www.voterview.ar-nova.org/voterview?ref=voteusa_en"]').click()
    cy.url().should('be.equal', 'https://www.voterview.ar-nova.org/voterview?ref=voteusa_en')
    cy.go('back')

    cy.get('[data-test="back-button"]').click()
    cy.url().should('be.equal', 'http://localhost:1313/')
  })

  it('north dakota links check', () => {
  // this test will be different than the rest, the link on the page will not allow cypress to go back and will not let it complete the test. This has been tested manually and is working as expected
  cy.visit('http://localhost:1313/register/nd/')
  cy.get('[data-test="footer-2"]').should('be.visible')

  cy.get('[class="reg-link"]').invoke('attr', 'href').should('be.equal', 'https://vip.sos.nd.gov/PortalList.aspx?ref=voteusa_en')

  cy.get('[data-test="back-button"]').click()
  cy.url().should('be.equal', 'http://localhost:1313/')

  })
})
