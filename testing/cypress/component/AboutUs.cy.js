import React from 'react'
import AboutUs from './AboutUs'

describe('Mounting Abbout component', () => {
  it('about component renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AboutUs />)
  })
})