/// <reference types="Cypress" />

describe('check touchpoints survey button', () => {

  it('check form is working',() =>{
    cy.visit('http://localhost:1313')
    cy.get('[data-test="improve-button"]').should('be.visible').click()
    cy.get('[class="usa-radio__label"]').click({ multiple: true })
    cy.get('[class="usa-textarea"]').type('test')
    cy.get('[class="usa-textarea"]').should('have.value', 'test')
    cy.get('[class="usa-input"]').type('test')
    cy.get('[class="usa-input"]').should('have.value', 'test')
    cy.get('[class="submit-button"]').should('be.visible')
  })
})