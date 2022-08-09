/// <reference types="Cypress" />
// const allPages = require("../fixtures/state-page.json");

// describe('HTMLproofer check', () => {
 
//   // const sitePage = ['localhost:1313/register/mn/']

//   it('check all links to sites', () => {
//     cy.get(sitePage).each(page => {
//     cy.visit(page)
//     cy.get("a:not([href*='mailto:'])").each(link => {
//       cy.request(link.prop('href')).then(link => {
//         expect(link.status).to.eq(200)
//       })
//     })
//   })  
// })

//   it('check that images have alt text', () => {
//     cy.get(sitePage).each(page => {
//       cy.visit(page)
      // cy.get('img').each(image => {
      //   cy.wrap(image).should('have.attr', 'alt')
      // })
//     })
//   })
// })



const allPages = require("../fixtures/state-page.json");
describe("HTMLproofer check", () => {
  const baseURL = Cypress.env("base_url")
    ? Cypress.env("base_url")
    : "http://localhost:1313";
 
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
          url: baseURL + page.route,
        });
        cy.get("a:not([href*='mailto:'])").each(link => {
                cy.request(link.prop('href')).then(link => {
                  expect(link.status).to.eq(200)
                })
              })

        cy.get('img').each(image => {
          cy.wrap(image).should('have.attr', 'alt')
        })
        
      }
    );
  });
});