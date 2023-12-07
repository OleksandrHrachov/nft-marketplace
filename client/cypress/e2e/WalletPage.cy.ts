describe('Wallet page', () => {

  it('Should go from Home page to Wallet page', () => {
    cy.visit('/');
    cy.get('.nav__menu > [href="/wallet"]').click();
    cy.url().should('include', '/wallet');
  })

  it('Should have info title', () => {
    cy.visit('/wallet');
    cy.get('.wallet-page__title').should('contain.text', 'Sorry, this feature is not available at the moment.');
  })

  it('Should return to Home page', () => {
    cy.visit('/wallet');
    cy.get('.wallet-page > a.link').click();
    cy.url().should('include', '/');
  })
})