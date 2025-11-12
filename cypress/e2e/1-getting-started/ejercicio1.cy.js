/// <reference types="cypress" />
// Welcome to Cypress!
// https://on.cypress.io/introduction-to-cypress
//
describe('Flujo de compra', () => {
    beforeEach(() => {

        cy.visit('https://www.demoblaze.com')
    })
    // va
    it('Agregar dos productos al carrito', () => {
        // Esperar que carguen los productos
        cy.get('.card-title a').should('be.visible')

        // Seleccionar y agregar el primer producto
        cy.get('.card-title a').eq(0).click()
        cy.contains('Add to cart').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added')
        })
        cy.get('.navbar-brand').click() // volver al home

        // Seleccionar y agregar el segundo producto
        cy.get('.card-title a').eq(1).click()
        cy.contains('Add to cart').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added')
        })
    })

    it('Visualizar carrito y llenar formulario de compra', () => {
        // Ir al carrito
        cy.get('#cartur').click()
        cy.contains('Place Order').click()
        // Completar formulario de compra
        cy.get('#name').type('Snra ')
        cy.get('#country').type('Ecuador')
        cy.get('#city').type('ECU')
        cy.get('#card').type('09225R5354546')
        cy.get('#month').type('11')
        cy.get('#year').type('2025')
    })

})
