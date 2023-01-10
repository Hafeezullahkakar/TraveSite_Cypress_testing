/// <reference types="cypress" />


context('Navigation', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('.NavbarItems').contains('Service').click()
    })

    // test case 8

    it('Go back (location)', () => {
        // cy.location('pathname').should('include', '/')
        cy.go('back')

    })
    // test case 9
    it('Go forward (location)', () => {
        // cy.location('pathname').should('include', '/')
        cy.go('forward')

    })
    // test case 10
    it('Reload', () => {
        cy.reload()// reload with cashe
        cy.reload(true) //without cashe
    })

})
