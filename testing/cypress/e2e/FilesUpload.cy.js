/// <reference types="cypress" />

import 'cypress-file-upload'
describe('File upload test case', () => {

    beforeEach(() => {
        cy.visit('/upload');
    })

    // //test 30
    it('upload file', () => {
        cy.get('#file').attachFile('myfile1.png');
        cy.get('#upload').focus();
        cy.wait(200);
        cy.get('#upload').click();
    })

    // //test 31
    it('take screenshot while uploading file', () => {
        cy.get('#file').attachFile('myfile2.png');
        cy.screenshot();
        cy.get('#upload').focus();
        cy.wait(200);
        cy.get('#upload').click();

    })

    //test case 32

    it('filters ', () => {
        cy.visit('/', { delay: 200 });
        cy.get('ul').find('>li').filter('.active')
    })

    //test case 33

    it('trigger ', () => {
        cy.visit('/', { delay: 200 });
        cy.get('ul').find('.active').trigger('mousedown')
    })

    //test case 34
    it('Hover ', () => {
        cy.visit('/', { delay: 200 });
        cy.get('.nav-menu').contains('Home').trigger('mouseover')
    })

    //test case 35
    it('ScrollTo ', () => {
        cy.visit('/', { delay: 200 });
        cy.scrollTo(0, 1000)
    })
})