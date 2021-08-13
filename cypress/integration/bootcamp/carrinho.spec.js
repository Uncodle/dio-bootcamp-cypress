/// <reference types='Cypress' />

import { ANGELS_AND_DEMONS, HARRY_POTTER } from '../../fixtures/books';

function clickButtonBook(cyContent) {
    cy.contains(cyContent).parentsUntil('.book').siblings().find('.container > .btn').click();
}

describe('[Bootcamp] - Bookcamp - Carrinho', () => {
    before(() => {
        cy.visit('http://localhost:4200/');

        cy.contains('Comprar').click();
        clickButtonBook(ANGELS_AND_DEMONS);
        cy.get('.btn-secondary').click();

        cy.contains('Alugar').click();
        clickButtonBook(HARRY_POTTER);
        cy.get('.modal-footer > .btn-primary').click();
    });

    it('Deve ter sucesso ao deletar um item do carrinho', () => {
        cy.contains(ANGELS_AND_DEMONS).parentsUntil('.book-cart').siblings().find('.cart-item-action-options > .fas').click();
        cy.get('.books-cart').should('not.have.text', ANGELS_AND_DEMONS);
    });

    // Exercício prático para o público
    it('Deve ter sucesso na conclusão da compra', () => {
        cy.get('.total > .btn').click();
        cy.get('#email').type('email-qualquer');
        cy.get('.modal-footer > .btn-primary').click();
        cy.get('.success').contains('compra executada', { matchCase: false });
    });
});
