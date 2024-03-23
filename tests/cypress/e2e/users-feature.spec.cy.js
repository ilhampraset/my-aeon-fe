
describe('User List Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/users');
  });

  it('displays user data correctly', () => {

    cy.get('.table').should('exist');
    cy.get('.table tbody tr').should('have.length', 5);


    cy.get('.table tbody tr:first-child td:nth-child(1)').should('contain.text', 'Myrna Kshlerin');
    cy.get('.table tbody tr:first-child td:nth-child(2)').should('contain.text', 'vberge@example.com');
  });

  it('navigates to previous and next pages', () => {

    cy.get('.pagination .bi-chevron-right').click();

    cy.get('.table tbody tr').should('have.length', 5);

    cy.get('.pagination .bi-chevron-left').click();

    cy.get('.table tbody tr').should('have.length', 5);
  });

  it('navigates to user detail page when View Detail button is clicked', () => {


    cy.wait(1000)
    cy.get('.table tbody tr:first-of-type button').click();

    cy.url().should('include', '/users/1');
  });

});



describe('User Profile Page', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      path: 'https://990cc3de-cdf0-4878-9d27-466c909a659a.mock.pstmn.io/api/users/1',
    }).as('getUserData')
    cy.visit('http://localhost:8080/users/1');
  });

  it('displays user data on page load', () => {
    cy.wait(2000)
    cy.get('.card-title').contains('Myrna Kshlerin');
    cy.get('.card-text').contains('vberge@example.com');
  });

  it('navigates back to users page when back button is clicked', () => {
    cy.get('.btn-back').click();
    cy.url().should('include', '/users');
  });

});