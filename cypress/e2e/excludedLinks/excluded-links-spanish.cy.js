/// <reference types="Cypress" />

// this test will run out of the pipeline and will be a manaul test each sprint 

const spanish = require("../../fixtures/excluded-links-spanish.json");


describe('check excluded links', () => {
  spanish.forEach(url => {
      it('validate page loads - spanish', () => {
        cy.visit(url, {failOnStatusCode: false})
        cy.get('body').children().its('length').should('be.gt', 0)
        
      })
  })
})