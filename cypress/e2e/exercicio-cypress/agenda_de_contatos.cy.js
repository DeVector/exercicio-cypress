/// <reference types="cypress" />

describe('Testando a agenda de contatos', () => {

    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Testando a funcionalidade de insercao de contato', () => {
        cy.get('input[type="text"]').type('Victor Oliveira')
        cy.get('input[type="email"]').type('victoroliveira@email.com')
        cy.get('input[type="tel"]').type('83123456789')
        cy.get('.adicionar').click()
        cy.contains('h2', '4 contatos na agenda').should('be.visible');
    })

    it('Testando a funcionalidade de alteração de contatos', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear().type('Victor Bezerra')
        cy.get('input[type="email"]').clear().type('victorbezerra@email.com')
        cy.get('.alterar').click()
    })

    it('Testando a funcionalidade de remoção de contato', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
        cy.contains('h2', '3 contatos na agenda').should('be.visible');
    })
})