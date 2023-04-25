/// <reference types="Cypress" />

const testPages = [
  "localhost:1313/",
  "localhost:1313/register/ak/",
  "localhost:1313/register/as/",
  "localhost:1313/register/ar/",
  "localhost:1313/register/nd/"
]

describe('Test Language Switcher Function', () => {

  testPages.forEach((page) => {
    it(`test spanish ${page}`, () => {
      cy.visit(page)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[1]).click()
           // eslint-disable-next-line cypress/no-unnecessary-waiting
           cy.wait(3000)
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov en Español')
        })
        )
    })

    it(`test bengali ${page}`, () => {
      cy.visit(page)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[2]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'বাংলায় Vote.gov')
        })
        )
    })

    it(`test simplified chinese ${page}`, () => {
      cy.visit(page)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[3]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov 中文')
        })
        )
    })

    it(`test traditional chinese ${page}`, () => {
      cy.visit(page)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[4]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov 中文')
        })
        )
    })

    it(`test hindi ${page}`, () => {
      cy.visit(page)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[5]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov हिन्दी में')
        })
        )
    })

    it(`test khmer ${page}`, () => {
      cy.visit(page)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[6]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov ជាភាសាខ្មែរ')
        })
        )
    })

    it(`test korean ${page}`, () => {
      cy.visit(page)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[7]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov 한국어 ')
        })
        )
    })

    it(`test portuguese ${page}`, () => {
      cy.visit(page)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[9]).click()
          // eslint-disable-next-line cypress/no-unnecessary-waiting
          cy.wait(3000)
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov em Português')
        })
        )
    })

    // it(`test navajo ${page}`, () => {
    //   cy.visit(page)
    //   cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
    //     cy.get(options[0]).find('li').then(li => {
    //       cy.get(li[8]).click()
    //       cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov Diné')
    //     })
    //     )
    // })

    it(`test tagalog ${page}`, () => {
      cy.visit(page)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[10]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov sa Tagalog')
        })
        )
    })

    it(`test vietnamese ${page}`, () => {
      cy.visit(page)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[11]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov bằng Tiếng Việt')
        })
        )
    })

  it(`test yup'ik ${page}`, () => {
    cy.visit(page)
    cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
      cy.get(options[0]).find('li').then(li => {
        cy.get(li[12]).click()
        cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov Akuzipigestun')
      })
      )
  })
  })
})
