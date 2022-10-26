/// <reference types="Cypress" />
describe('check external links', () => {

  it('Check English Pages', () => {
    cy.getUrlsEnglish().then($urls => {
      $urls.forEach(url => {
        cy.visit(url).then(() => {
          cy.get("a[href^='https://']").each(link => {
            cy.request(link.prop('href')).then(link => {
              expect(link.status).to.eq(200)
            })
          })
      })
    })
  })
})
it('Check Spanish Pages', () => {
  cy.getUrlsSpanish().then($urls => {
    $urls.forEach(url => {
      cy.visit(url).then(() => {
        cy.get("a[href^='https://']").each(link => {
          cy.request(link.prop('href')).then(link => {
            expect(link.status).to.eq(200)
          })
        })
    })
  })
})
})

it('Check English Pages 2.0', () => {
  cy.getUrlsEnglish().then($urls => {
    $urls.forEach(url => {
      cy.visit(url).then(() => {
        cy.get("a[href^='https://']").each(link => {
        cy.request({
          url: link.prop('href'),
          failOnStatusCode: false
      }) 
      cy.log( link.prop('href'))
      })
    })
  })
})
})
})



