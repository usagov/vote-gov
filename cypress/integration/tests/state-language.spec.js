/// <reference types="Cypress" />

describe('check state selection optios', () => {

it('check alaska', () => {
cy.visit("localhost:1313/register/ak/")
  // check spanish 
  cy.get('[data-test="language-switcher"]').select("Español (Spanish)")
  cy.get('[data-test="main-header"]').should('contain', 'Regístrese para votar en Alaska')

  // check tagalog
  cy.get('[data-test="language-switcher"]').select("Tagalog")
  cy.get('[data-test="main-header"]').should('contain', 'Magparehistro para bumoto sa Alaska')

  // check vietnamese
  cy.get('[data-test="language-switcher"]').select("Tiếng Việt (Vietnamese)")
  cy.get('[data-test="main-header"]').should('contain', 'Đăng ký bỏ phiếu bầu ở Alaska')

  // check hindi
  cy.get('[data-test="language-switcher"]').select("हिन्दी  (Hindi)")
  cy.get('[data-test="main-header"]').should('contain', 'Alaska में मतदान करने के लिए पंजीकरण करें')

  // check bengali
  cy.get('[data-test="language-switcher"]').select("বাংলা (Bengali)")
  cy.get('[data-test="main-header"]').should('contain', 'Alaska এ ভোট দিতে নিবন্ধন করুন')

  // check khmer
  cy.get('[data-test="language-switcher"]').select("ភាសាខ្មែរ (Khmer)")
  cy.get('[data-test="main-header"]').should('contain',' ចុះឈ្មោះដើម្បីបោះឆ្នោតនៅរដ្ឋ Alaska')

  // check kkorean
  cy.get('[data-test="language-switcher"]').select("한국어 (Korean)")
  cy.get('[data-test="main-header"]').should('contain','Alaska 주 유권자 등록 안내 ')

  //  check simplified chinese
  cy.get('[data-test="language-switcher"]').select("中文 (Chinese - Simplified)")
  cy.get('[data-test="main-header"]').should('contain','在 Alaska 注册投票')

  //  check traditional chinese
  cy.get('[data-test="language-switcher"]').select("繁體中文 (Chinese - Traditional)")
  cy.get('[data-test="main-header"]').should('contain','在 Alaska 登記投票')
})

it('check american samoa', () => {
cy.visit("localhost:1313/register/as/")
  // check spanish 
  cy.get('[data-test="language-switcher"]').select("Español (Spanish)")
  cy.get('[data-test="main-header"]').should('contain', 'Regístrese para votar en American Samoa')

  // check tagalog
  cy.get('[data-test="language-switcher"]').select("Tagalog")
  cy.get('[data-test="main-header"]').should('contain', 'Magparehistro para bumoto sa American Samoa')

  // check vietnamese
  cy.get('[data-test="language-switcher"]').select("Tiếng Việt (Vietnamese)")
  cy.get('[data-test="main-header"]').should('contain', 'Đăng ký bỏ phiếu bầu ở American Samoa')

  // check hindi
  cy.get('[data-test="language-switcher"]').select("हिन्दी  (Hindi)")
  cy.get('[data-test="main-header"]').should('contain', 'American Samoa में मतदान करने के लिए पंजीकरण करें')

  // check bengali
  cy.get('[data-test="language-switcher"]').select("বাংলা (Bengali)")
  cy.get('[data-test="main-header"]').should('contain', 'American Samoa এ ভোট দিতে নিবন্ধন করুন')

  // check khmer
  cy.get('[data-test="language-switcher"]').select("ភាសាខ្មែរ (Khmer)")
  cy.get('[data-test="main-header"]').should('contain',' ចុះឈ្មោះដើម្បីបោះឆ្នោតនៅរដ្ឋ American Samoa')

  // check kkorean
  cy.get('[data-test="language-switcher"]').select("한국어 (Korean)")
  cy.get('[data-test="main-header"]').should('contain','American Samoa 주 유권자 등록 안내 ')

  //  check simplified chinese
  cy.get('[data-test="language-switcher"]').select("中文 (Chinese - Simplified)")
  cy.get('[data-test="main-header"]').should('contain','在 American Samoa 注册投票')

  //  check traditional chinese
  cy.get('[data-test="language-switcher"]').select("繁體中文 (Chinese - Traditional)")
  cy.get('[data-test="main-header"]').should('contain','在 American Samoa 登記投票')
  
})

it('check arkansas', () => {
  cy.visit("localhost:1313/register/ar/")
    // check spanish 
    cy.get('[data-test="language-switcher"]').select("Español (Spanish)")
    cy.get('[data-test="main-header"]').should('contain', 'Regístrese para votar en Arkansas')

    // check tagalog
    cy.get('[data-test="language-switcher"]').select("Tagalog")
    cy.get('[data-test="main-header"]').should('contain', 'Magparehistro para bumoto sa Arkansas')

    // check vietnamese
    cy.get('[data-test="language-switcher"]').select("Tiếng Việt (Vietnamese)")
    cy.get('[data-test="main-header"]').should('contain', 'Đăng ký bỏ phiếu bầu ở Arkansas')

    // check hindi
    cy.get('[data-test="language-switcher"]').select("हिन्दी  (Hindi)")
    cy.get('[data-test="main-header"]').should('contain', 'Arkansas में मतदान करने के लिए पंजीकरण करें')

    // check bengali
    cy.get('[data-test="language-switcher"]').select("বাংলা (Bengali)")
    cy.get('[data-test="main-header"]').should('contain', 'Arkansas এ ভোট দিতে নিবন্ধন করুন')

    // check khmer
    cy.get('[data-test="language-switcher"]').select("ភាសាខ្មែរ (Khmer)")
    cy.get('[data-test="main-header"]').should('contain',' ចុះឈ្មោះដើម្បីបោះឆ្នោតនៅរដ្ឋ Arkansas')

    // check kkorean
    cy.get('[data-test="language-switcher"]').select("한국어 (Korean)")
    cy.get('[data-test="main-header"]').should('contain','Arkansas 주 유권자 등록 안내 ')

    //  check simplified chinese
    cy.get('[data-test="language-switcher"]').select("中文 (Chinese - Simplified)")
    cy.get('[data-test="main-header"]').should('contain','在 Arkansas 注册投票')

    //  check traditional chinese
    cy.get('[data-test="language-switcher"]').select("繁體中文 (Chinese - Traditional)")
    cy.get('[data-test="main-header"]').should('contain','在 Arkansas 登記投票')

  })

  it('check north dakota', () => {
    cy.visit("localhost:1313/register/nd/")
      // check spanish 
      cy.get('[data-test="language-switcher"]').select("Español (Spanish)")
      cy.get('[data-test="main-header"]').should('contain', 'Regístrese para votar en North Dakota')
  
      // check tagalog
      cy.get('[data-test="language-switcher"]').select("Tagalog")
      cy.get('[data-test="main-header"]').should('contain', 'Magparehistro para bumoto sa North Dakota')
  
      // check vietnamese
      cy.get('[data-test="language-switcher"]').select("Tiếng Việt (Vietnamese)")
      cy.get('[data-test="main-header"]').should('contain', 'Đăng ký bỏ phiếu bầu ở North Dakota')
  
      // check hindi
      cy.get('[data-test="language-switcher"]').select("हिन्दी  (Hindi)")
      cy.get('[data-test="main-header"]').should('contain', 'North Dakota में मतदान करने के लिए पंजीकरण करें')
  
      // check bengali
      cy.get('[data-test="language-switcher"]').select("বাংলা (Bengali)")
      cy.get('[data-test="main-header"]').should('contain', 'North Dakota এ ভোট দিতে নিবন্ধন করুন')
  
      // check khmer
      cy.get('[data-test="language-switcher"]').select("ភាសាខ្មែរ (Khmer)")
      cy.get('[data-test="main-header"]').should('contain',' ចុះឈ្មោះដើម្បីបោះឆ្នោតនៅរដ្ឋ North Dakota')
  
      // check kkorean
      cy.get('[data-test="language-switcher"]').select("한국어 (Korean)")
      cy.get('[data-test="main-header"]').should('contain','North Dakota 주 유권자 등록 안내 ')

      //  check simplified chinese
      cy.get('[data-test="language-switcher"]').select("中文 (Chinese - Simplified)")
      cy.get('[data-test="main-header"]').should('contain','在 North Dakota 注册投票')

      //  check traditional chinese
      cy.get('[data-test="language-switcher"]').select("繁體中文 (Chinese - Traditional)")
      cy.get('[data-test="main-header"]').should('contain','在 North Dakota 登記投票')
      
    })
})