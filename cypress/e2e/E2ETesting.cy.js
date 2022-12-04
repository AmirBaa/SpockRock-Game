/// <reference types="cypress" />
import Elements from './pageObjects/pageObjects'

describe('End to end testing of Rock Paper Scissors Lizard Spock game', () => {
    let pageElements
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/')
        pageElements = new Elements()

    })

    it('adds scores accordingly if rock selected', () => {
        pageElements.rock()
        cy.checkScore()
    })

    it('adds scores accordingly if paper selected', () => {
        pageElements.paper()
        cy.checkScore()
    })
    it('adds scores accordingly if scissors selected', () => {
        pageElements.scissors()
        cy.checkScore()
    })
    it('adds scores accordingly if lizard selected', () => {
        pageElements.lizard()
        cy.checkScore()
    })
    it('adds scores accordingly if spock selected', () => {
        pageElements.spock()
        cy.checkScore()
    })
    it('adds scores accordingly and reset them on reset button', () => {

        pageElements.spock()
        cy.checkScore()
        cy.get('.fas').click()
        cy.get('#playerScore').should('have.text', '0')
        cy.get('#computerScore').should('have.text', '0')


    })

})