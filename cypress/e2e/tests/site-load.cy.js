/// <reference types="Cypress" />

describe('checking links', () =>{
  before('visit site', () => {
    cy.visit('/')
  })
  it('checks site', () =>{
    cy.get('[class="main-heading"]').should('be.visible')
  })
})


