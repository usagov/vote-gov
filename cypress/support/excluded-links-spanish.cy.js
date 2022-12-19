/// <reference types="Cypress" />

const spanish = [
  "https://voterservices.elections.maryland.gov/OnlineVoterRegistration/InstructionsStep1?ref=voteusa_es",
  "https://www.sec.state.ma.us/ovr/?ref=voteusa_es",
  "https://olvr.ohiosos.gov/?ref=voteusa_es",
  "https://voterlookup.ohiosos.gov/voterlookup.aspx?ref=voteusa_es",
  "https://olvr.hawaii.gov/?ref=voteusa_es",
  "https://elections.hawaii.gov/voters/registration/?ref=voteusa_es",
  "https://vote.sos.ri.gov/Home/RegistertoVote?ref=voteusa_es",
  "https://vote.sos.ri.gov/VoterSpanish/RegisterToVote?ref=voteusa_es",
  "https://vote.sos.ri.gov/HomeSpanish/UpdateVoterRecord?ActiveFlag=0&?ref=voteusa_es",
  "https://vrems.scvotes.sc.gov/Voter/Login",
  "https://scvotes.gov/voters/register-to-vote/?ref=voteusa_es",
  "https://info.scvotes.sc.gov/eng/ovr/start.aspx?ref=voteusa_es"
]

describe('Validate Excluded pages load', () =>{
  spanish.forEach((url) => {
    it(`check spanish ${url}`, () => {
      cy.visit(url, {failOnStatusCode: false})
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000)
        cy.get('body').children().its('length').should('be.gt', 0)
    })
  })
})