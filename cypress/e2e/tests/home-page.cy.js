/// <reference types="Cypress" />
describe('Test vote.gov homepage', () => {
  beforeEach('visit page', () => {
    cy.visit('localhost:1313')
  })
  it('Confirm homepage load', () => {
    cy.get('[data-test="footer"]').should('be.visible')
  })
  it('Validate language switching on homepage', () => {
    // Test Spanish.
    cy.get('[data-test="language-switcher"]').select("/es/")
    cy.get('[data-test="main-header"]').should('contain', 'Inscríbase para votar')
    // Test Bengali.
    cy.get('[data-test="language-switcher"]').select("/bn/")
    cy.get('[data-test="main-header"]').should('contain', 'ভোট দিতে নিবন্ধন করুন')
    // Test simplified Chinese.
    cy.get('[data-test="language-switcher"]').select("/zh-hans/")
    cy.get('[data-test="main-header"]').should('contain','登记投票')
    // Test traditional Chinese.
    cy.get('[data-test="language-switcher"]').select("/zh/")
    cy.get('[data-test="main-header"]').should('contain','登記投票')
    // Test Hindi.
    cy.get('[data-test="language-switcher"]').select("/hi/")
    cy.get('[data-test="main-header"]').should('contain', 'मतदान करने के लिए पंजीकरण करें')
    // Test Khmer.
    cy.get('[data-test="language-switcher"]').select("/km/")
    cy.get('[data-test="main-header"]').should('contain','ចុះឈ្មោះដើម្បីបោះឆ្នោត')
    // Test Korean.
    cy.get('[data-test="language-switcher"]').select("/ko/")
    cy.get('[data-test="main-header"]').should('contain','유권자 등록하기')
    // Test Tagalog.
    cy.get('[data-test="language-switcher"]').select("/tl/")
    cy.get('[data-test="main-header"]').should('contain', 'Magrehistro para bumoto')
    // Test Vietnamese.
    cy.get('[data-test="language-switcher"]').select("/vi/")
    cy.get('[data-test="main-header"]').should('contain', 'Đăng ký bỏ phiếu bầu')
    // Test Yup'ik.
    cy.get('[data-test="language-switcher"]').select("/ypk/")
    cy.get('[data-test="main-header"]').should('contain','Ilaten Nakmikiyaghqaa')
  })
  it('Check accordion function on homepage', () => {
    cy.get('[data-test="accordion-button"]').each(accordionButton => {
      cy.get(accordionButton).click()
      cy.get('[data-test="accordion-content"]').should('be.visible')
    })
      cy.get('[data-test="accordion"]').find('a').then(link => {
        cy.get(link[0]).contains('Federal Voter Assistance Program').should('have.attr', 'href').and('include',
        'https://www.fvap.gov/')
        cy.get(link[1]).contains('See what type of voter ID your state requires').should('have.attr', 'href').and('include','https://www.ncsl.org/research/elections-and-campaigns/voter-id.aspx#Laws%20in%20Effect')
        cy.get(link[2]).contains('Federal Post Card Application (FPCA)').should('have.attr', 'href').and('include','https://www.fvap.gov/eo/overview/materials/forms')
        cy.get(link[3]).contains('Federal Voting Assistance Program (FVAP)').should('have.attr', 'href').and('include','https://www.fvap.gov/')
        cy.get(link[4]).contains('primary elections and caucuses').should('have.attr', 'href').and('include','https://www.usa.gov/election#item-37162')
        cy.get(link[5]).contains('form of ID to vote').should('have.attr', 'href').and('include','https://www.usa.gov/voter-id')
        cy.get(link[6]).contains('voter registration').should('have.attr', 'href').and('include','https://www.usa.gov/voter-registration-card')
                })
      })
})
