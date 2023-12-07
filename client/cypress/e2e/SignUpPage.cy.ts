describe('Sign Up page', () => {

  it('Should go from Home page to Sign Up page', () => {
    cy.visit('/');
    cy.get('.nav__menu > div > a[href="/signup"]').click();
    cy.url().should('include', '/signup');
  })

  it('Should have info title', () => {
    cy.visit('/signup');
    cy.get('.sign-up__title').should('contain.text', 'At the moment there is no registration and everyone can view all available content.');
  })

  it('Should return to Home page', () => {
    cy.visit('/signup');
    cy.get('.sign-up > a.link').click();
    cy.url().should('include', '/');
  })
})