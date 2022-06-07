/// <reference types="Cypress" />

describe('checking links', () =>{
  before('visit site', () => {
    cy.visit('http://localhost:1313/')
  })
  it('checks site', () =>{
    cy.get('[class="main-heading"]').should('be.visible')
  })
})


