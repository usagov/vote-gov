/// <reference types="Cypress" />

describe('checking links', () =>{
  before('visit site', () => {
    cy.visit('https://vote.gov/')
  })
it('checks site', () =>{
  cy.get('[class="registered-resources"]').get('[href="https://www.usa.gov/election-day"]').click()
  // console.log('[class="page-section registered"]')
  //   .invoke('attr', 'href')
  //   .then(href => {
  //   cy.visit(href);
  //    });
})

})


