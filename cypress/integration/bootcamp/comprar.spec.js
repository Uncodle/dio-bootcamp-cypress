/// <reference types='Cypress' />

describe('[Bootcamp] - Bookcamp - Comprar', () => {
    before(() => {
        cy.visit('http://localhost:4200/');
        cy.contains('Comprar').click();
    });

    it('Deve filtrar os livros pelo gênero suspense', () => {
        cy.get('.filter-label').click();
        cy.get('.filter-form .col-4 div label').click({ multiple: true });
        cy.get('#Suspense').check();
        cy.get('.col-12 > .btn').click();
        cy.get('.book-info > .genre').as('livrosPorGenero');
        cy.get('@livrosPorGenero').each((livro) => {
            cy.wrap(livro).should('contain.text', 'Suspense');
        });
    });

    it.only('Deve ordenar os livros por ordem crescente', async () => {
        cy.get('.order > button').click();
        cy.get('.order-panel > :nth-child(2)').click();
        cy.get('.book-value').as('orderedBooks');
        let previousValue = 0;
        cy.get('@orderedBooks').each(($price) => {
            cy.currencyToNumber($price.text()).then((currentPrice) => {
                cy.wrap(previousValue).should('be.lte', currentPrice);
                previousValue = currentPrice;
            });
        });
    });
});
