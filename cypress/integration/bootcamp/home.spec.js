describe('[Bootcamp] Bookcamp - Home Page', () => {
    before(() => cy.visit('localhost:4200/'));

    it('Deve validar o titulo da página Bookcamp', () => {
        cy.title().should('equal', 'Bookcamp');
    });

    it('Deve validar a opção comprar como primeiro item do menu', () => {
        cy.get(':nth-child(1) > .nav-link').should('have.text', 'Comprar');
    });
});
