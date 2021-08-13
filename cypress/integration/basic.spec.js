/// <reference types='Cypress' />

const sum = (n1, n2) => n1 + n2 + 1;

describe.skip('Descrição do Grupo', () => {
    it('Teste com êxito', () => expect('Santander Bootcamp').to.contain('Santander'));
    it('Teste com falha', () => expect(sum(2, 3)).to.equal(5));
    it.skip('Teste desconsiderado', () => {});
    it.only('Teste específico a ser executado', () => {});
});
