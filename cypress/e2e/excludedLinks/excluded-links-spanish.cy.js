/// <reference types="Cypress" />

const spanish = require("../../fixtures/excluded-links-spanish.json");


describe('check excluded links', () => {
  spanish.forEach(url => {
      it('validate page loads - spanish', () => {
        cy.visit(url, {failOnStatusCode: false})
        cy.get('body').children().its('length').should('be.gt', 0)
        
      })
  })
})