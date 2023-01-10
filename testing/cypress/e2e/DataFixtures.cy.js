/// <reference types="cypress" />


describe('Filling in forms via fixtures', () => {

    //some hooks
    let contactFormData;
    let loginData;
    let signupData;
    beforeEach(() => {
        cy.visit('/')
        cy.wait(100)
        cy.fixture('ContactFormFixture').then(function (contactData) {
            contactFormData = contactData
        })
        cy.fixture('loginFixture').then(function (data) {
            loginData = data;
        })
        cy.fixture('signupFixture').then(function (data) {
            signupData = data
        })
    })
    afterEach(() => {
        cy.wait(500)
    })
    //test case 25
    it("fill out message form from fixture data", () => {
        cy.contains("Contact").click();
        cy.get("#name").type(contactFormData.name);
        cy.wait(100);
        cy.get('#email').type(contactFormData.email)
        cy.wait(100);
        cy.get('#subject').type(contactFormData.subject)
        cy.wait(100);
        cy.get('#msg').type(contactFormData.message)
        cy.wait(300);
        cy.get('#sendBtn').click();
    });

    //test case 26

    it('Login while getting data from login fixture ', () => {
        cy.visit('/login');
        cy.wait(500);
        cy.contains('LOGIN').focus().blur();
        cy.get(".email").focus().type(loginData.email, { delay: 100 });
        cy.wait(500);
        cy.get('.pass').focus().type(loginData.password, { delay: 100 })
        cy.wait(500);
        cy.contains('LOGIN').focus().click();
    });

    //test case: 27: Sign up

    it('Sign up via fixture data', () => {
        cy.visit('http://localhost:3000/signup');
        cy.get('.form')
            .find('[type="text"]').type(signupData.name, { delay: 100 })
        cy.wait(100);
        cy.get('.emailTxt').type(signupData.email)
        cy.wait(100);
        cy.get('.passwordTxt').type(signupData.password)
        cy.wait(100);
        cy.get('.form').find('[type="submit"]').click();
    });


})