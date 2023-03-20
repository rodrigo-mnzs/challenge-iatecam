/// <reference types="cypress" />

describe('Comparar dois Smartphones', () => {
    it('Utilizando a lista de modelos', ()=>{
        cy.visit('https://www.tudocelular.com/compare/');
        cy.get('[href="/compare/8550.html"]').click(); //Smartphone 1
        cy.get('[href="/compare/7427.html"]').click(); //Smartphone 2
        cy.get('#comparabtn').click();
        cy.url().should('include', '/8550-7427'); //URL vem acompanhada dos códigos dos aparelhos
    });

    it('Utilizando o campo pesquisar', ()=>{
        cy.visit('https://www.tudocelular.com/compare/');
        cy.get('#sb1_text').type('UMIDIGI F3 Pro');
        cy.get('#phone8550').click(); //Smartphone 1
        cy.get('#sb1_text').type('Samsung Galaxy A53');
        cy.get('#phone7427').click(); //Smartphone 2
        cy.get('#comparabtn').click();
        cy.url().should('include', '/8550-7427'); //URL vem acompanhada dos códigos dos aparelhos
    })
});