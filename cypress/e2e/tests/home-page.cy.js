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

    // Test Tagalog.
    cy.get('[data-test="language-switcher"]').select("/tl/")
    cy.get('[data-test="main-header"]').should('contain', 'Magrehistro para bumoto')

    // Test Vietnamese.
    cy.get('[data-test="language-switcher"]').select("/vi/")
    cy.get('[data-test="main-header"]').should('contain', 'Đăng kí bỏ phiếu bầu')

    // Test Hindi.
    cy.get('[data-test="language-switcher"]').select("/hi/")
    cy.get('[data-test="main-header"]').should('contain', 'मतदान करने के लिए पंजीकरण करें')

    // Test Bengali.
    cy.get('[data-test="language-switcher"]').select("/bn/")
    cy.get('[data-test="main-header"]').should('contain', 'ভোট দিতে নিবন্ধন করুন')

    // Test Khmer.
    cy.get('[data-test="language-switcher"]').select("/km/")
    cy.get('[data-test="main-header"]').should('contain','ចុះឈ្មោះដើម្បីបោះឆ្នោត')

     // Test Korean.
     cy.get('[data-test="language-switcher"]').select("/ko/")
     cy.get('[data-test="main-header"]').should('contain','유권자 등록하기')

    // Test simplified Chinese.
    cy.get('[data-test="language-switcher"]').select("/zh-hans/")
    cy.get('[data-test="main-header"]').should('contain','登记投票')

    // Test traditional Chinese.
    cy.get('[data-test="language-switcher"]').select("/zh/")
    cy.get('[data-test="main-header"]').should('contain','登記投票')

  })

  it('Validate links on homepage', () => {
    cy.get("a:not([href*='mailto:'])").each(link => {
      cy.request(link.prop('href')).then(link => {
        expect(link.status).to.eq(200)
      })
    })
  })

  it('Check accordion function on homepage', () => {
    cy.get('[data-test="homepage-accordion"]').find('[class="usa-accordion__heading"]').each(accordionButton => {
      cy.get(accordionButton).click()
      cy.get('[data-test="accordion-content"]').should('not.be.empty')
    })
    cy.get('[data-test="homepage-accordion"]').find('a').each(link => {
      console.log(link)
      cy.request(link.prop('href')).then(link => {
                    expect(link.status).to.eq(200)
                })      
              })
    })
})

