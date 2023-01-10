
/// <reference types="cypress" />

context('Local Storage / Session Storage', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    afterEach(() => {
        cy.wait(500)
    })

    // test case 21
    it('Fill contact form to store data in local storage...', () => {
        cy.contains("Contact").click();
        cy.wait(100);
    })

    // test case 22
    it("fill out message form", () => {
        cy.contains("Contact").click();
        cy.get("#name").type("hfaeez kakar");
        cy.wait(100);
        cy.get('#email').type('hafeezemail.com')
        cy.wait(100);
        cy.get('#subject').type('Data Structure')
        cy.wait(100);
        cy.get('#msg').type('Very important and impressive subject...')
        cy.wait(100);
        cy.get('#sendBtn').click();
    });

    // test case 23
    it('Get data from localStorage', () => {
        localStorage.setItem('contactItem', 'HafeezMessage')
        expect(localStorage.getItem('contactItem')).to.equal('HafeezMessage')
    })
    // test case 24
    it('Clear local storage', () => {

        localStorage.clear()


    })



})