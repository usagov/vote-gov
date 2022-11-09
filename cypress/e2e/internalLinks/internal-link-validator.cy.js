/// <reference types="Cypress" />

describe("Internal Link Validator Test", () => {
it('Validate internal links', () => {
  cy.getUrlsEnglish().then($urls => {
    $urls.forEach(url => {
      cy.visit(url).then(() => {
        cy.get("a[href^='/']").each(link => {
          cy.request(link.prop('href')).then(link => {
            expect(link.status).to.eq(200)
          })
        })
    })
  })
})
})
});

