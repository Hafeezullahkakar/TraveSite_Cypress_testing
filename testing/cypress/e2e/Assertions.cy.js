/// <reference types="cypress" />

context('Assertions', () => {
    beforeEach(() => {
        cy.visit('/')
    })


    describe('Assertions', () => {
        //test case 6
        it('Should + And Assertion', () => {
            cy.get('.nav-links')
                .contains('Service')
                .should('have.text', 'Service')
                .click();
        })

         //test case 7
        it('Expect Assertion', () => {
            expect(true).to.be.true
        })

    })





})