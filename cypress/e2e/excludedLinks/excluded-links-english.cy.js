/// <reference types="Cypress" />

const english = require("../../fixtures/excluded-links-english.json");


describe('check excluded links', () => {
  english.forEach(url => {
      it('validate page loads - english', () => {
        cy.visit(url, {failOnStatusCode: false})
        cy.get('body').children().its('length').should('be.gt', 0)
        
      })
  })
})