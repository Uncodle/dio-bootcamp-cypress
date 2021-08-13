/// <reference types='Cypress' />

import { HARRY_POTTER } from '../../fixtures/books';

describe('[Bootcamp] - Bookcamp - Alugar', () => {
    const numberOfDays = 3;

    before(() => cy.visit('http://localhost:4200/'));

    it('Deve ter êxito ao adicionar um livro para locação', () => {
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('.book-title').contains(HARRY_POTTER).parents().find('#rentDays').as('harryPotterInputDays');
        cy.get('@harryPotterInputDays').clear().type(numberOfDays);
        cy.get('.container > .btn').click();
        cy.get('.modal-footer > .btn-primary').click();

        cy.contains(HARRY_POTTER).should('exist');
    });

    // Exercício prático para o público
    it('Deve validar o valor total de um item adicionado ao carrinho', () => {
        let priceBookHarryPotter = 0;
        cy.contains(HARRY_POTTER)
            .parent()
            .find('.book-value > :nth-child(1)')
            .then(($price) => {
                cy.currencyToNumber($price.text()).then((priceBook) => (priceBookHarryPotter = priceBook));
            });
        cy.get('.total-item > span').then(($el) => {
            cy.currencyToNumber($el.text()).then((total) => {
                cy.wrap(numberOfDays * priceBookHarryPotter).should('equal', total);
            });
        });
    });
});
