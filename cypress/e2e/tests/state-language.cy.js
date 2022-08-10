/// <reference types="Cypress" />

describe('Validate state language options', () => {

it('Test Alaska', () => {
cy.visit("localhost:1313/register/ak/")
  // Test Spanish.
  cy.get('[data-test="language-switcher"]').select("Español (Spanish)")
  cy.get('[data-test="main-header"]').should('contain', 'Regístrese para votar en Alaska')

  // Test Tagalog.
  cy.get('[data-test="language-switcher"]').select("Tagalog")
  cy.get('[data-test="main-header"]').should('contain', 'Magparehistro para bumoto sa Alaska')

  // Test Vietnamese.
  cy.get('[data-test="language-switcher"]').select("Tiếng Việt (Vietnamese)")
  cy.get('[data-test="main-header"]').should('contain', 'Đăng ký bỏ phiếu bầu ở Alaska')

  // Test Hindi.
  cy.get('[data-test="language-switcher"]').select("हिन्दी  (Hindi)")
  cy.get('[data-test="main-header"]').should('contain', 'Alaska में मतदान करने के लिए पंजीकरण करें')

  // Test Bengali.
  cy.get('[data-test="language-switcher"]').select("বাংলা (Bengali)")
  cy.get('[data-test="main-header"]').should('contain', 'Alaska এ ভোট দিতে নিবন্ধন করুন')

  // Test Khmer.
  cy.get('[data-test="language-switcher"]').select("ភាសាខ្មែរ (Khmer)")
  cy.get('[data-test="main-header"]').should('contain',' ចុះឈ្មោះដើម្បីបោះឆ្នោតនៅរដ្ឋ Alaska')

  // Test Korean.
  cy.get('[data-test="language-switcher"]').select("한국어 (Korean)")
  cy.get('[data-test="main-header"]').should('contain','Alaska 주 유권자 등록 안내 ')

  // Test simplified Chinese.
  cy.get('[data-test="language-switcher"]').select("中文 (Chinese - Simplified)")
  cy.get('[data-test="main-header"]').should('contain','在 Alaska 注册投票')

  // Test traditional Chinese.
  cy.get('[data-test="language-switcher"]').select("繁體中文 (Chinese - Traditional)")
  cy.get('[data-test="main-header"]').should('contain','在 Alaska 登記投票')
})

it('Test American Samoa', () => {
cy.visit("localhost:1313/register/as/")
  // Test spanish.
  cy.get('[data-test="language-switcher"]').select("Español (Spanish)")
  cy.get('[data-test="main-header"]').should('contain', 'Regístrese para votar en American Samoa')

  // Test Tagalog.
  cy.get('[data-test="language-switcher"]').select("Tagalog")
  cy.get('[data-test="main-header"]').should('contain', 'Magparehistro para bumoto sa American Samoa')

  // Test Vietnamese.
  cy.get('[data-test="language-switcher"]').select("Tiếng Việt (Vietnamese)")
  cy.get('[data-test="main-header"]').should('contain', 'Đăng ký bỏ phiếu bầu ở American Samoa')

  // Test Hindi.
  cy.get('[data-test="language-switcher"]').select("हिन्दी  (Hindi)")
  cy.get('[data-test="main-header"]').should('contain', 'American Samoa में मतदान करने के लिए पंजीकरण करें')

  // Test Bengali.
  cy.get('[data-test="language-switcher"]').select("বাংলা (Bengali)")
  cy.get('[data-test="main-header"]').should('contain', 'American Samoa এ ভোট দিতে নিবন্ধন করুন')

  // Test Khmer.
  cy.get('[data-test="language-switcher"]').select("ភាសាខ្មែរ (Khmer)")
  cy.get('[data-test="main-header"]').should('contain',' ចុះឈ្មោះដើម្បីបោះឆ្នោតនៅរដ្ឋ American Samoa')

  // Test Korean.
  cy.get('[data-test="language-switcher"]').select("한국어 (Korean)")
  cy.get('[data-test="main-header"]').should('contain','American Samoa 주 유권자 등록 안내 ')

  // Test simplified Chinese.
  cy.get('[data-test="language-switcher"]').select("中文 (Chinese - Simplified)")
  cy.get('[data-test="main-header"]').should('contain','在 American Samoa 注册投票')

  // Test traditional Chinese.
  cy.get('[data-test="language-switcher"]').select("繁體中文 (Chinese - Traditional)")
  cy.get('[data-test="main-header"]').should('contain','在 American Samoa 登記投票')

})

it('Test Arkansas', () => {
  cy.visit("localhost:1313/register/ar/")
    // Test Spanish.
    cy.get('[data-test="language-switcher"]').select("Español (Spanish)")
    cy.get('[data-test="main-header"]').should('contain', 'Regístrese para votar en Arkansas')

    // Test Tagalog.
    cy.get('[data-test="language-switcher"]').select("Tagalog")
    cy.get('[data-test="main-header"]').should('contain', 'Magparehistro para bumoto sa Arkansas')

    // Test Vietnamese.
    cy.get('[data-test="language-switcher"]').select("Tiếng Việt (Vietnamese)")
    cy.get('[data-test="main-header"]').should('contain', 'Đăng ký bỏ phiếu bầu ở Arkansas')

    // Test Hindi.
    cy.get('[data-test="language-switcher"]').select("हिन्दी  (Hindi)")
    cy.get('[data-test="main-header"]').should('contain', 'Arkansas में मतदान करने के लिए पंजीकरण करें')

    // Test Bengali.
    cy.get('[data-test="language-switcher"]').select("বাংলা (Bengali)")
    cy.get('[data-test="main-header"]').should('contain', 'Arkansas এ ভোট দিতে নিবন্ধন করুন')

    // Test Khmer.
    cy.get('[data-test="language-switcher"]').select("ភាសាខ្មែរ (Khmer)")
    cy.get('[data-test="main-header"]').should('contain',' ចុះឈ្មោះដើម្បីបោះឆ្នោតនៅរដ្ឋ Arkansas')

    // Test Korean.
    cy.get('[data-test="language-switcher"]').select("한국어 (Korean)")
    cy.get('[data-test="main-header"]').should('contain','Arkansas 주 유권자 등록 안내 ')

    // Test simplified Chinese.
    cy.get('[data-test="language-switcher"]').select("中文 (Chinese - Simplified)")
    cy.get('[data-test="main-header"]').should('contain','在 Arkansas 注册投票')

    // Test traditional Chinese.
    cy.get('[data-test="language-switcher"]').select("繁體中文 (Chinese - Traditional)")
    cy.get('[data-test="main-header"]').should('contain','在 Arkansas 登記投票')

  })

  it('Test North Dakota', () => {
    cy.visit("localhost:1313/register/nd/")
      // Test Spanish.
      cy.get('[data-test="language-switcher"]').select("Español (Spanish)")
      cy.get('[data-test="main-header"]').should('contain', 'Regístrese para votar en North Dakota')

      // Test Tagalog.
      cy.get('[data-test="language-switcher"]').select("Tagalog")
      cy.get('[data-test="main-header"]').should('contain', 'Magparehistro para bumoto sa North Dakota')

      // Test Vietnamese.
      cy.get('[data-test="language-switcher"]').select("Tiếng Việt (Vietnamese)")
      cy.get('[data-test="main-header"]').should('contain', 'Đăng ký bỏ phiếu bầu ở North Dakota')

      // Test Hindi.
      cy.get('[data-test="language-switcher"]').select("हिन्दी  (Hindi)")
      cy.get('[data-test="main-header"]').should('contain', 'North Dakota में मतदान करने के लिए पंजीकरण करें')

      // Test Bengali.
      cy.get('[data-test="language-switcher"]').select("বাংলা (Bengali)")
      cy.get('[data-test="main-header"]').should('contain', 'North Dakota এ ভোট দিতে নিবন্ধন করুন')

      // Test Khmer.
      cy.get('[data-test="language-switcher"]').select("ភាសាខ្មែរ (Khmer)")
      cy.get('[data-test="main-header"]').should('contain',' ចុះឈ្មោះដើម្បីបោះឆ្នោតនៅរដ្ឋ North Dakota')

      // Test Korean.
      cy.get('[data-test="language-switcher"]').select("한국어 (Korean)")
      cy.get('[data-test="main-header"]').should('contain','North Dakota 주 유권자 등록 안내 ')

      // Test simplified Chinese.
      cy.get('[data-test="language-switcher"]').select("中文 (Chinese - Simplified)")
      cy.get('[data-test="main-header"]').should('contain','在 North Dakota 注册投票')

      // Test traditional Chinese.
      cy.get('[data-test="language-switcher"]').select("繁體中文 (Chinese - Traditional)")
      cy.get('[data-test="main-header"]').should('contain','在 North Dakota 登記投票')

    })
})
