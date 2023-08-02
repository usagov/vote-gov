/// <reference types="Cypress" />

const allPages = require("../../fixtures/site-pages.json");

const excludedlinks = [
  'https://voterregistration.ct.gov/OLVR/welcome.do?ref=voteusa_es',
  'https://voterregistration.ct.gov/OLVR/welcome.do',
    // the above link will throw error code "read ECONNRESET" this will not pass through cypress test and has been checked manually
];

describe("External Link Validator Test", () => {
  const singlePage =
    Cypress.env("name") && Cypress.env("route")
      ? [
          {
            name: Cypress.env("name"),
            route: Cypress.env("route"),
          },
        ]
      : null;
  const pages = singlePage !== null ? singlePage : allPages;
  pages.forEach((page) => {
    it( 
      `${page.name === "" ? "home" : page.name}`,
      () =>
        Cypress.env("retries") === true
          ? {
              retries: {
                runMode: 2,
              },
            }
          : {},
      () => {
        cy.visit({
          url: page.route,
        });
        cy.get("main a[href^='https://']").each(link => {
          if (excludedlinks.indexOf(link.prop('href')) == -1) {
          cy.request({
            url: link.prop('href'),
            failOnStatusCode: false,
          }).then((response) => {
            if (response.status === 200) {
              expect(response.status).to.eq(200)
            } else if (response.status === 403){
              cy.get('body').children().its('length').should('be.gt', 0)
            } else if (response.status === 503){
              throw new Error("site down - gave a 503")
            } else if (response.status === 404){
              throw new Error("page not found - gave a 404")
            } else {
              cy.get('body').children().its('length').should('be.gt', 0)
            }
          })
        }
      })
      }
    );
  });    
});