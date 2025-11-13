/// <reference types="cypress" />
// Simulació de registro
//
describe('API - Crear un nuevo usuario - Signup', () => {

  const baseUrl = 'https://api.demoblaze.com';
  const username = `user_${Date.now()}`; // concatena para crear un usuario nuevo y evitar que se reppita
  const password = 'Passw0rd?1';

  it('Registro de usuario', () => {
    cy.request({ // datos de entrada
      method: 'POST',
      url: `${baseUrl}/signup`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        username: username, // valores definidos en el describe
        password: password
      }
    }).then((response) => {
      cy.log('Estado:', response.status);
      cy.log('Respuesta:', JSON.stringify(response.body));

     // Código definido de respuesta exitosa
      expect(response.status).to.eq(200);

      // Por si se devuelvan vacios
      if (response.body === '' || response.body === null) {
        cy.log('Registro exitoso');
        //Si el usaurio ya esta registrado
      } else if (response.body.includes('Usuario ya existe :(')) {
        cy.log('El usuario ya existe.');
      } else {
        // respuesta quee spera la aplicaci'on
        expect(response.body).to.include('Registro exitoso :) !!!!!°');
      }
    });
  });

});