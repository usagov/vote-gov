/// <reference types="Cypress" />

describe('check state selection optios', () => {
  beforeEach('visit page', () => {
    cy.visit('localhost:1313')
  })

  it('check alaska', () => {
    cy.get('[data-test="state-selection"]').select('Alaska')
    cy.get('[data-test="register-button"]').click()
    cy.url().should('include', '/register/ak/')
  })

  it('check american samoa', () => {
    cy.get('[data-test="state-selection"]').select('American Samoa')
    cy.get('[data-test="register-button"]').click()
    cy.url().should('include', '/register/as/')
  })

  it('check arkansas', () => {
    cy.get('[data-test="state-selection"]').select('Arkansas')
    cy.get('[data-test="register-button"]').click()
    cy.url().should('include', '/register/ar/')
  })

  it('check north dakota', () => {
    cy.get('[data-test="state-selection"]').select('North Dakota')
    cy.get('[data-test="register-button"]').click()
    cy.url().should('include', '/register/nd/')
  })

})