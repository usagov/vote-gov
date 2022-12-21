/// <reference types="Cypress" />

// import { forEach } from "../../fixtures/excluded-links-english.json";

// describe('check excluded links', () => {
//   forEach(url => {
//       it('validate page loads - english', () => {
//         cy.visit(url, {failOnStatusCode: false})
//         // eslint-disable-next-line cypress/no-unnecessary-waiting
//         cy.wait(1000)
//         cy.get('body').children().its('length').should('be.gt', 0)
//       })
//   })
// })

const english = [  
  "https://voterservices.elections.maryland.gov/OnlineVoterRegistration/InstructionsStep1?ref=voteusa_en",
  "https://www.sec.state.ma.us/ovr/?ref=voteusa_en",
  "https://olvr.ohiosos.gov/?ref=voteusa_en",
  "https://voterlookup.ohiosos.gov/voterlookup.aspx?ref=voteusa_en",
  "https://olvr.hawaii.gov/?ref=voteusa_en",
  "https://elections.hawaii.gov/voters/registration/?ref=voteusa_en",
  "https://vote.sos.ri.gov/Home/RegistertoVote?ref=voteusa_en",
  "https://vote.sos.ri.gov/Voter/RegisterToVote?ref=voteusa_en",
  "https://vote.sos.ri.gov/Home/UpdateVoterRecord?ActiveFlag=0&?ref=voteusa_en",
  "https://vrems.scvotes.sc.gov/Voter/Login?ref=voteusa_en",
  "https://scvotes.gov/voters/register-to-vote/?ref=voteusa_en",
  "https://info.scvotes.sc.gov/eng/ovr/start.aspx?ref=voteusa_en" 

]

describe('Validate Excluded pages load', () =>{
  english.forEach((url) => {
    it(`check english ${url}`, () => {
      cy.visit(url, {failOnStatusCode: false})
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(3000)
        cy.get('body').children().invoke('text').should('have.length.gt', 0)
        
        // .should('not.be.empty')
        
        // .its('length').should('be.gt', 0)
        
        // .children()
        
        
    })
  })
})

