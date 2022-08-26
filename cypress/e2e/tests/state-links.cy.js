/// <reference types="Cypress" />

const urls = ['http://localhost:1313/register/ak/', 'http://localhost:1313/register/ar/', 'http://localhost:1313/register/as/', 'http://localhost:1313/register/nd/', ]

describe('Validate links on state pages', () => {
  urls.forEach((url) => {
    it(`link check on state pages ${url}`, () => {
    cy.visit(url)

    cy.get('[data-test="footer"]').should('be.visible')

    cy.get('[data-test="vote-info"]').find('a').each(link => {
      cy.get(link).invoke('attr','href').then(href =>{
        cy.wrap(href).should('eq', href)
      })
    })
    })
  })
})
