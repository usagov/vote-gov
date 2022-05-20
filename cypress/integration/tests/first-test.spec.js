/// <reference types="Cypress" />

describe('check external links', () => {
  it('should open in new tab', () => {
    cy.getUrlsArray().then($urls => {
      $urls.forEach(url => {
        cy.request(url).then(() => {
          cy.get('[class="reg-link"]')
            .should('have.attr', 'target')
            .and('match', /.?[_blank]/)
        })
      })
    })
  })
})

