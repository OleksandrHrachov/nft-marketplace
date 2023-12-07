describe('Nft page', () => {

  beforeEach(() => {
    cy.visit('/rankings');
    cy.url().should('include', '/rankings');
    cy.get('.rankings__list-item:first').click();
  })

  it('Should go from Creator page to Nft page', () => {
    cy.get('.creator__list-nft-inner').then((inner) => {
      if (inner.find('.creator-descovery-card:first').length > 0) {
        cy.get('.creator-descovery-card:first').click();
      } else {
        cy.get('.creator__list-empty-list').should('exist');
      }
    });
  })

})