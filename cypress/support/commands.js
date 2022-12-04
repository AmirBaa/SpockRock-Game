// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//

Cypress.Commands.add('checkScore', () => {
    cy.get('#resultText').each(($el, index, $list) => {
        if ($el.text().includes("You lost !")) {
            cy.get('#computerScore').should('have.text', '1')
            cy.get('#playerScore').should('have.text', '0')
        } else if ($el.text().includes("You won !")) {
            cy.get('#computerScore').should('have.text', '0')
            cy.get('#playerScore').should('have.text', '1')
        } else {
            cy.get('#playerScore').should('have.text', '0')
            cy.get('#computerScore').should('have.text', '0')
        }
    })
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })