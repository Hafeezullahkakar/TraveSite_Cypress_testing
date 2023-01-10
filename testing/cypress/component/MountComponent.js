
import About from './AboutUs'

describe('Component Testing ', () => {

// test 38
  it('About Mounted?', () => {
    cy.mount(<About />).then().contains("Our History")
    
        // cy.contains('Our History');
        // cy.contains('Our Vision');
  })
// test 39
  it('About contain xyz text?', () => {
    cy.mount(<About />);

  })
// test 40
  it('About Mounted?', () => {
    cy.mount(<About />)
  })
})