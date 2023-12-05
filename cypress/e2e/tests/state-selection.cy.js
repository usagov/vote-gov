/// <reference types="Cypress" />

describe('Validate state selection options', () => {
  beforeEach('visit page', () => {
    cy.visit('localhost:1313')
  })

  it('Verify that menu drop down is working', () => {
    cy.get('[data-test="dropdown-btn"]').click()
    cy.get('[data-test="state-list"]').should('be.visible')
  })

  it('Verify that type search is working', () => {
    // * Check that 'South' renders expected states
    cy.get('[data-test="state-selection"]').type('South')
    cy.get('[data-test="state-list"]').should('contain', 'South Carolina', 'South Dakota')
    cy.reload()
    // * Check that 'Virgin' renders expected states
    cy.get('[data-test="state-selection"]').type('Virgin')
    cy.get('[data-test="state-list"]').should('contain', 'U.S. Virgin Island', 'Virginia', 'West Virginia')
    cy.reload()
    // * Check that 'Carolina' renders expected states
    cy.get('[data-test="state-selection"]').type('Carolina')
    cy.get('[data-test="state-list"]').should('contain', 'South Carolina', 'North Carolina')
    cy.reload()
    // * Check that 'mar' renders expected states
    cy.get('[data-test="state-selection"]').type('mar')
    cy.get('[data-test="state-list"]').should('contain', 'Maryland', 'Northern Mariana Islands')
  })

  it('Verify that user can navigate to state page from dropdown', () => {
    // * Check Alaska
    cy.get('[data-test="dropdown-btn"]').click()
    cy.get('[data-test=state-list]').find('li').then(option => {
      cy.get(option[1]).realClick()
    })
    cy.url().should('include', '/register/ak/')
    cy.get('[data-test="vote-logo"]').click()
    // * Check American Samoa
    cy.get('[data-test="dropdown-btn"]').click()
    cy.get('[data-test=state-list]').find('li').then(option => {
      cy.get(option[2]).realClick()
    })
    cy.url().should('include', '/register/as/')
    cy.get('[data-test="vote-logo"]').click()
    // * Check Arkansas
    cy.get('[data-test="dropdown-btn"]').click()
    cy.get('[data-test=state-list]').find('li').then(option => {
      cy.get(option[4]).realClick()
    })
    cy.url().should('include', '/register/ar/')
    cy.get('[data-test="vote-logo"]').click()
    // * Check North Dakota
    cy.get('[data-test="dropdown-btn"]').click()
    cy.get('[data-test=state-list]').find('li').then(option => {
      cy.get(option[36]).realClick()
    })  
    cy.url().should('include', '/register/nd/')
  })
})


