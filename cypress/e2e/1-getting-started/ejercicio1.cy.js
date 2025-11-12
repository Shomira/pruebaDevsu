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

    it('Visualizar carrito', () => {
        // Ir al carrito
        cy.get('#cartur').click()
    })

    it('Completar formulario', () => {
        // Completar formulario de compra

        cy.get('#login2').click() // abre el modal de login es necesario para que encuentre el id
        cy.get('#loginusername').should('be.visible')
        cy.get('#loginusername').type('ttt Rosale')
        // Supongamos que ya agregaste un producto al carrito
        // cy.get('#cart').click()                 // Ir al carrito
        cy.get('#logInModal .btn-close').click() // o usa el selector correcto según el HTML

        // Espera a que el modal ya no esté visible
        cy.get('#logInModal').should('not.be.visible')
        cy.get('#cartur').click()
        cy.contains('Place Order').click()        // Abre el modal de compra necesario para que se liste el formulario
        cy.get('#country').type('Ecuador')
        cy.get('#city').type('ECU')
        cy.get('#card').type('099623455')
        cy.get('#month').type('11')
        cy.get('#year').type('2025')


    })


})





/*context('with a checked task', () => {
  beforeEach(() => {
    // We'll take the command we used above to check off an element
    // Since we want to perform multiple tests that start with checking
    // one element, we put it in the beforeEach hook
    // so that it runs at the start of every test.
    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()
  })

  it('can filter for uncompleted tasks', () => {
    // We'll click on the "active" button in order to
    // display only incomplete items
    cy.contains('Active').click()

    // After filtering, we can assert that there is only the one
    // incomplete item in the list.
    cy.get('.todo-list li')
      .should('have.length', 1)
      .first()
      .should('have.text', 'Walk the dog')

    // For good measure, let's also assert that the task we checked off
    // does not exist on the page.
    cy.contains('Pay electric bill').should('not.exist')
  })

  it('can filter for completed tasks', () => {
    // We can perform similar steps as the test above to ensure
    // that only completed tasks are shown
    cy.contains('Completed').click()

    cy.get('.todo-list li')
      .should('have.length', 1)
      .first()
      .should('have.text', 'Pay electric bill')

    cy.contains('Walk the dog').should('not.exist')
  })

  it('can delete all completed tasks', () => {
    // First, let's click the "Clear completed" button
    // `contains` is actually serving two purposes here.
    // First, it's ensuring that the button exists within the dom.
    // This button only appears when at least one task is checked
    // so this command is implicitly verifying that it does exist.
    // Second, it selects the button so we can click it.
    cy.contains('Clear completed').click()

    // Then we can make sure that there is only one element
    // in the list and our element does not exist
    cy.get('.todo-list li')
      .should('have.length', 1)
      .should('not.have.text', 'Pay electric bill')

    // Finally, make sure that the clear button no longer exists.
    cy.contains('Clear completed').should('not.exist')
  })
})*/

