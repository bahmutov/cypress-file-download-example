/// <reference types="cypress" />

it('loads the page', () => {
  cy.visit('/')
  cy.get('a[download]')
})
