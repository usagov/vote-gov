/// <reference types="Cypress" />

const languageTestPages = require("../../fixtures/language-switcher-pages.json");
const languagesTranslations = require("../../fixtures/language-translations.json");

describe("Test Language Switcher Function", () => {
  languageTestPages.forEach((languageTestPage) => {
    it(`Validate language switcher functionality for ${languageTestPage.name}`, () => {
      cy.visit({ url: languageTestPage.route });

      languagesTranslations.forEach((languageTranslation) => {

        cy.get('[data-test="language-button"]').click();

        cy.contains(languageTranslation.language).click({ force: true });

        cy.get('[data-test="vote-logo"]').should('contain.text', languageTranslation.logoText);

        cy.url().should('include', Cypress.config().baseUrl + languageTranslation.hrefTitle)

      });
    });
  });
});
