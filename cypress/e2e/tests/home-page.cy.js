/// <reference types="Cypress" />
describe('Test vote.gov homepage', () => {
  beforeEach('visit page', () => {
    cy.visit('localhost:1313')
  })
  it('Confirm homepage load', () => {
    cy.get('[data-test="footer"]').should('be.visible')
  })
  
  it('Check accordion function on homepage', () => {
    cy.get('[data-test="accordion-button"]').each(accordionButton => {
      cy.get(accordionButton).click()
      cy.get('[data-test="accordion-content"]').should('be.visible')
    })
      cy.get('[data-test="accordion"]').find('a').then(link => {
        cy.get(link[0]).contains('Federal Voter Assistance Program').should('have.attr', 'href').and('include',
        'https://www.fvap.gov/')
        cy.get(link[1]).contains('See what type of voter ID your state requires').should('have.attr', 'href').and('include','https://www.ncsl.org/research/elections-and-campaigns/voter-id.aspx#Laws%20in%20Effect')
        cy.get(link[2]).contains('Federal Post Card Application (FPCA)').should('have.attr', 'href').and('include','https://www.fvap.gov/eo/overview/materials/forms')
        cy.get(link[3]).contains('Federal Voting Assistance Program (FVAP)').should('have.attr', 'href').and('include','https://www.fvap.gov/')
        cy.get(link[4]).contains('primary elections and caucuses').should('have.attr', 'href').and('include','https://www.usa.gov/election#item-37162')
        cy.get(link[5]).contains('form of ID to vote').should('have.attr', 'href').and('include','https://www.usa.gov/voter-id')
        cy.get(link[6]).contains('voter registration').should('have.attr', 'href').and('include','https://www.usa.gov/voter-registration-card')
                })
      })
})
