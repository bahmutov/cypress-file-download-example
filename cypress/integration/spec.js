/// <reference types="cypress" />

beforeEach(() => {
  cy.task('deleteDownloads')
})

it('downloads a text file', () => {
  cy.visit('/')
  cy.get('a[download]').click()
  cy.readFile('cypress/downloads/file.txt').should(
    'equal',
    'This is a text file\n',
  )
})
