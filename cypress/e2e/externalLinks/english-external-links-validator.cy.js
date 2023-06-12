/// <reference types="Cypress" />


const allPages = require("../../fixtures/site-pages.json");

const excludedlinks = [
  'https://voterregistration.ct.gov/OLVR/welcome.do?ref=voteusa_en',
  // the above link will throw error code "read ECONNRESET" this will not pass through cypress test and has been checked manually but has not been added to `excluded-links.cy.js` test 
  'https://voterservices.elections.maryland.gov/OnlineVoterRegistration/InstructionsStep1?ref=voteusa_en',
  'https://www.sec.state.ma.us/ovr/?ref=voteusa_en',
  'https://olvr.ohiosos.gov/?ref=voteusa_en',
  'https://voterlookup.ohiosos.gov/voterlookup.aspx?ref=voteusa_en',
  'https://olvr.hawaii.gov/?ref=voteusa_en',
  'https://elections.hawaii.gov/voters/registration/?ref=voteusa_en',
  'https://vote.sos.ri.gov/Home/RegistertoVote?ref=voteusa_en',
  'https://vote.sos.ri.gov/Voter/RegisterToVote?ref=voteusa_en',
  'https://vote.sos.ri.gov/Home/UpdateVoterRecord?ActiveFlag=0&?ref=voteusa_en',
  'https://my.arizona.vote/WhereToVote.aspx?s=individual&?ref=voteusa_en',
  'https://sosmt.gov/elections/vote/?ref=voteusa_en',
  'https://www.vivote.gov/voters/register-to-vote/?ref=voteusa_en',
  'https://www.vivote.gov/voters/voter-lookup/?ref=voteusa_en',
  'https://www.elections.ny.gov/votingregister.html?ref=voteusa_en',
  // sc links
  'https://vrems.scvotes.sc.gov/Voter/Login?ref=voteusa_en',
  'https://scvotes.gov/voters/register-to-vote/?ref=voteusa_en',
  'https://info.scvotes.sc.gov/eng/ovr/start.aspx?ref=voteusa_en'

];

describe("External Link Validator Test", () => {
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
        cy.get("main a[href^='https://']").each(link => {
          if (excludedlinks.indexOf(link.prop('href')) == -1) {
            cy.request({
              url: link.prop('href'),
              failOnStatusCode: false
            }).then((response) => {
              expect(response.status).to.eq(200)
            })
          }
        })
      }
    );
  });    
});
