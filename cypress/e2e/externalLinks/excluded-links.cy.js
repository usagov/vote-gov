/// <reference types="Cypress" />

const urls = require("../../fixtures/excluded-links.json");


describe('check excluded links', () => {
    urls.forEach(url => {
        it('validate page loads', () => {
          cy.visit(url, {failOnStatusCode: false})
          cy.get('body').children().its('length').should('be.gt', 0)
        })
    })
})