/// <reference types="cypress" />

describe('Contact List tests', () => {
    beforeEach(() => {
        cy.visit('https://contact-list-five-beta.vercel.app/')
    })
    it('Open modal test', () => {
        cy.get('.sc-buuUZy').should('have.css', 'display', 'none')
        cy.get('.sc-bWSpKI').click()
        cy.get('.sc-buuUZy').should('have.css', 'display', 'flex')
    })
    it('Add new contact', () => {
        cy.get('.sc-bWSpKI').click()
        cy.get('input[type="text"].sc-hIFLYB').type('julia Sais')
        cy.get('input[type="tel"]').type('(00) 00000-0000')
        cy.get('input[type="email"]').type('julia@example.com')
        cy.get('button[type="submit"]').click()
    })
    it('Test diaplsy new contact', () => {
        cy.get('.sc-bWSpKI').click()
        cy.get('input[type="text"].sc-hIFLYB').type('julia Sais')
        cy.get('input[type="tel"]').type('(00) 00000-0000')
        cy.get('input[type="email"]').type('julia@example.com')
        cy.get('button[type="submit"]').click()
        cy.get('.sc-gPvXVi.dGarsW').should('have.length', 50)
    })
})