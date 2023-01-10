/// <reference types="cypress" />

context('Location', () => {
    beforeEach(() => {
        cy.visit('/service')
    })
    afterEach(() => {
        cy.wait(50)
    })
    // test case 11
    it('Current URL hash', () => {
        cy.hash().should('be.empty')
    })

    // test case 12
    it('Get href in location', () => {
        cy.location().should((location) => {
             expect(location.href).to.eq('http://localhost:3000/service')
      
        })
    })
    // test case 13
    it('Get  host in location', () => {
        cy.location().should((location) => {
            expect(location.host).to.eq('localhost:3000')
        })
    })

    // test case 14
    it('Get Origin in location', () => {
        cy.location().should((location) => {
            expect(location.origin).to.eq('http://localhost:3000')

        })
    })
    
    // test case 15
    it('Get pathname in Location', () => {
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/service')
        })
    })

    //    test case 16
    it('Get Port Number Location', () => {
        cy.location().should((location) => {
            expect(location.port).to.eq('3000')

        })
    })

    //    test case 17
    it('Get Protocol in Location', () => {
        cy.location().should((location) => {
            expect(location.protocol).to.eq('http:')
        })
    })

    //    test case 18
    it('Get search query string in Location', () => {
        cy.location().should((location) => {
            expect(location.search).to.be.empty
        })
    })

    //    test case 19
    it('Get host in Location', () => {
        cy.location().should((location) => {
            expect(location.host).to.eq('localhost:3000')
        })
    })
    //    test case 20
    it('Get Current URL', () => {
        cy.url().should('eq', 'http://localhost:3000/service')
    })
})
