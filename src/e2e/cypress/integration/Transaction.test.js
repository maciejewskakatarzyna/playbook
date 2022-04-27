describe('Transaction', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Allows to add a new transaction and delete it', () => {
    cy.findByPlaceholderText(/title of transaction/i)
      .click()
      .type('cypress title');
    cy.findByLabelText(/amount \(in pln\)/i)
      .click()
      .type('100');
    cy.findByRole('button', { name: /add/i }).click();
    cy.findByText(/cypress title/i).should('exist');
    cy.findAllByText(/100/i).should('exist');
    cy.findAllByText(/22.82/i).should('exist');
    cy.findByRole('button', { name: /delete/i }).click();
    cy.findByText('cypress title').should('not.exist');
  });
});
