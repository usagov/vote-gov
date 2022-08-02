/// <reference types="Cypress" />

describe('check homepage', () => {
  beforeEach('visit page', () => {
    cy.visit('localhost:1313')
  })

  it('verify homepage loads', () => {
    cy.get('[data-test="footer"]').should('be.visible')
  })

  it('check language switching on homepage', () => {
    // check spanish 
    cy.get('[data-test="language-switcher"]').select("/es/")
    cy.get('[data-test="main-header"]').should('contain', 'Inscríbase para votar')

    // check tagalog
    cy.get('[data-test="language-switcher"]').select("/tl/")
    cy.get('[data-test="main-header"]').should('contain', 'Magrehistro para bumoto')

    // check vietnamese
    cy.get('[data-test="language-switcher"]').select("/vi/")
    cy.get('[data-test="main-header"]').should('contain', 'Đăng kí bỏ phiếu bầu')

    // check hindi
    cy.get('[data-test="language-switcher"]').select("/hi/")
    cy.get('[data-test="main-header"]').should('contain', 'मतदान करने के लिए पंजीकरण करें')

    // check bengali
    cy.get('[data-test="language-switcher"]').select("/bn/")
    cy.get('[data-test="main-header"]').should('contain', 'ভোট দিতে নিবন্ধন করুন')

    // check khmer
    cy.get('[data-test="language-switcher"]').select("/km/")
    cy.get('[data-test="main-header"]').should('contain','ចុះឈ្មោះដើម្បីបោះឆ្នោត')

     // check kkorean
     cy.get('[data-test="language-switcher"]').select("/ko/")
     cy.get('[data-test="main-header"]').should('contain','유권자 등록하기')

    //  check simplified chinese
    cy.get('[data-test="language-switcher"]').select("/zh-hans/")
    cy.get('[data-test="main-header"]').should('contain','登记投票')

    //  check traditional chinese 
    cy.get('[data-test="language-switcher"]').select("/zh/")
    cy.get('[data-test="main-header"]').should('contain','登記投票')
    
  })

  it('check links on homepage', () => {
    cy.get('[href="https://www.usa.gov/voting"]').click()
    cy.url().should('be.equal', 'https://www.usa.gov/voting')
    cy.go('back')

    cy.get('[href="https://www.usa.gov/election-day"]').click()
    cy.url().should('be.equal', 'https://www.usa.gov/election-day')
    cy.go('back')

    cy.get('[href="https://www.usa.gov/voter-id"]').click()
    cy.url().should('be.equal', 'https://www.usa.gov/voter-id')
    cy.go('back')

    cy.get('[href="https://www.usa.gov/election"]').click()
    cy.url().should('be.equal', 'https://www.usa.gov/election')
    cy.go('back')
  })
})
