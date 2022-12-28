/// <reference types="Cypress" />

const urls = [
  "localhost:1313/", 
  "localhost:1313/register/ak/", 
  "localhost:1313/register/as/", 
  "localhost:1313/register/ar/", 
  "localhost:1313/register/nd/"
]

describe('Test Language Switcher Function', () => {

  urls.forEach((url) => {
    it(`check spanish ${url}`, () => {
      cy.visit(url)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[1]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov en Español')
        })
        )
    })

    it(`check bengali ${url}`, () => {
      cy.visit(url)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[2]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'বাংলায় Vote.gov')
        })
        )
    })

    it(`check simplified chinese ${url}`, () => {
      cy.visit(url)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[3]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov 中文')
        })
        )
    })

    it(`check traditional chinese ${url}`, () => {
      cy.visit(url)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[4]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov 中文')
        })
        )
    })

    it(`check hindi ${url}`, () => {
      cy.visit(url)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[5]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov हिन्दी में')
        })
        )
    })

    it(`check khmer ${url}`, () => {
      cy.visit(url)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[6]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov ជាភាសាខ្មែរ')
        })
        )
    })

    it(`check korean ${url}`, () => {
      cy.visit(url)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[7]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov 한국어 ')
        })
        )
    })

    it(`check navajo ${url}`, () => {
      cy.visit(url)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[8]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov Diné')
        })
        )
    })

    it(`check tagalog ${url}`, () => {
      cy.visit(url)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[9]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov sa Tagalog')
        })
        )
    })

    it(`check vietnamese ${url}`, () => {
      cy.visit(url)
      cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
        cy.get(options[0]).find('li').then(li => {
          cy.get(li[10]).click()
          cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov bằng Tiếng Việt')
        })
        )
    })

  it(`check yup'ik ${url}`, () => {
    cy.visit(url)
    cy.get('[data-test="language-button"]').click().get('[data-test="language-switcher"]').then(options =>
      cy.get(options[0]).find('li').then(li => {
        cy.get(li[11]).click()
        cy.get('[data-test="vote-logo"]').should('contain', 'Vote.gov Akuzipigestun')
      })
      )
  })
  })
})
