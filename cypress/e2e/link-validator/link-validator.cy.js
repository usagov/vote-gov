/// <reference types="Cypress" />

const allPages = require("../../fixtures/state-page.json");
// the following urls have been validated manually but will not be able to run through this cypress test due to permission issues
const ctUrl = ('[href="https://voterregistration.ct.gov/OLVR/welcome.do?ref=voteusa_en"]')
const ohUrl0 = ('[href="https://olvr.ohiosos.gov/?ref=voteusa_en"]')
const ohUrl1 = ('[href="https://voterlookup.ohiosos.gov/voterlookup.aspx?ref=voteusa_en"]')
const riUrl0 = ('[href="https://vote.sos.ri.gov/Home/RegistertoVote?ref=voteusa_en"]')
const riUrl1 = ('[href="https://vote.sos.ri.gov/Voter/RegisterToVote?ref=voteusa_en"]')
const riUrl2 = ('[href="https://vote.sos.ri.gov/Home/UpdateVoterRecord?ActiveFlag=0&?ref=voteusa_en"]')

describe("Link Validator Test", () => {
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
        cy.get("a:not([href*='mailto:']")
        // the following urls have been validated manually but will not be able to run through this cypress test due to permission issues
        .not(ctUrl)
        .not(ohUrl0).not(ohUrl1)
        .not(riUrl0).not(riUrl1).not(riUrl2)
        .each(link => {
                cy.request(link.prop('href')).then(link => {
                  expect(link.status).to.eq(200)
                })
              })
      }
    );
  });
});