describe('Rankings page', () => {

  it('Should go from Home page to Rankings page', () => {
    cy.visit('/');
    cy.get('.nav__menu > [href="/rankings"]').click();
    cy.url().should('include', '/rankings');
    cy.get('h1').should('contains.text', 'Top Creators');
  })

  it('Should go from Rankings page to Creator page', () => {
    cy.visit('/rankings');
    cy.get('.rankings__list-item:first').click();
    cy.url().should('include', '/creator');
  })
})