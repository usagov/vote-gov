/// <reference types="Cypress" />

const allPages = require("../../fixtures/site-pages.json");

describe("Internal Link Validator Test", () => {
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
        cy.get("a[href^='/']").each(link => {
          cy.request(link.prop('href')).then(link => {
            expect(link.status).to.eq(200)
          })
        })
      }
    );
  });
});