describe('Navigation', () => {
  it('Shows all navigation links', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="navTabs/links/store"]').should('be.visible')
    cy.get('[data-testid="navTabs/links/library"]').should('be.visible')
    cy.get('[data-testid="navTabs/links/friends"]').should('be.visible')
    cy.get('[data-testid="navTabs/links/account"]').should('be.visible')
  })

  it('Goes to the Store page', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="navTabs/links/store"]').click()

    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Goes to the Library page', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="navTabs/links/library"]').click()

    cy.url().should('eq', 'http://localhost:3000/library')
  })

  it('Goes to the Friends page', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="navTabs/links/friends"]').click()

    cy.url().should('eq', 'http://localhost:3000/friends')
  })

  it('Goes to the Account page', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="navTabs/links/account"]').click()

    cy.url().should('eq', 'http://localhost:3000/account')
  })
})
