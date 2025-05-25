describe('Autocomplete da Amazon', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.com.br/');
  });

  it('Deve exibir sugestões de autocomplete ao digitar', () => {
    cy.get('#twotabsearchtextbox').type('livro');

    cy.get('.s-suggestion')
      .should('be.visible')
      .then(($suggestions) => {
        const text = [...$suggestions].map(texto => texto.innerText)
        expect($suggestions.length).to.be.greaterThan(0);
        cy.log('usando map Itens:\n' + text.join('\n'));

        Cypress._.each($suggestions, (text, index) => {
          cy.log(`usando Cypress._.each: ${text.innerText}`)
        })

        $suggestions.each((index, text) => {
          cy.log(`usando each: ${text.innerText}`)
        });
      });
  });
});
