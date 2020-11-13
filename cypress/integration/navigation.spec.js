describe('Navigation', () => {
  it('Shows all navigation links', () => {
    cy.visit('/')

    cy.get('[data-testid="nav/links/store"]').should('be.visible')
    cy.get('[data-testid="nav/links/library"]').should('be.visible')
    cy.get('[data-testid="nav/links/friends"]').should('be.visible')
    cy.get('[data-testid="nav/links/account"]').should('be.visible')
  })

  it('Refers to the Store page', () => {
    cy.visit('/')

    cy.get('[data-testid="nav/links/store"]')
      .should('have.attr', 'href')
      .and('eq', '/')
  })

  it('Refers to the Library page', () => {
    cy.visit('/')

    cy.get('[data-testid="nav/links/library"]')
      .should('have.attr', 'href')
      .and('eq', '/library')
  })

  it('Refers to the Friends page', () => {
    cy.visit('/')

    cy.get('[data-testid="nav/links/friends"]')
      .should('have.attr', 'href')
      .and('eq', '/friends')
  })

  it('Refers to the Account page', () => {
    cy.visit('/')

    cy.get('[data-testid="nav/links/account"]')
      .should('have.attr', 'href')
      .and('eq', '/account')
  })
})
