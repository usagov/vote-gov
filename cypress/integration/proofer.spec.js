/// <reference types="Cypress" />


describe('HTMLproofer check', () => {

  const sitePage = ['localhost:1313/register/mn/']

  it('check all links to sites', () => {
    cy.get(sitePage).each(page => {
    cy.visit(page)
    cy.get("a:not([href*='mailto:'])").each(link => {
      cy.request(link.prop('href')).then(link => {
        expect(link.status).to.eq(200)
      })
    })
  })  
})

  it('check that images have alt text', () => {
    cy.get(sitePage).each(page => {
      cy.visit(page)
      cy.get('img').each(image => {
        cy.wrap(image).should('have.attr', 'alt')
      })
    })
  })
})