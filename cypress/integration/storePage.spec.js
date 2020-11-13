// eslint-disable-next-line @typescript-eslint/no-var-requires
const { terminalLog } = require('../utils')

describe('Store Page', () => {
  it('Passes accessibility tests', () => {
    cy.visit('/')
    cy.injectAxe()
    cy.wait(100)
    cy.checkA11y(null, null, terminalLog)
  })
})
