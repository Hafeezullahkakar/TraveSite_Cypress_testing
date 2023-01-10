/// <reference types="cypress" />


describe('Utilizing my own custom commands', () => {

    beforeEach(() => {
        cy.visit('/')
    })
    //test case 28
    it("to go specific link via my custome command", () => {
        cy.gotoLink_Via_MyCommand('About')
    })

    //test case 29
    it("Custom command2 : Go to details of babusar item",()=>{
        cy.DetailsOfBabusar();
    })




})