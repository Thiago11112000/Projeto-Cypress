describe('Alura  Pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home')
    });
    it('verifica mensagens validacao', () => {
      cy.contains('a',  'Register now').click();
     cy.contains('button',  'Register').click();
     cy.contains('button',  'Register').click();
      cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
      cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
      cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
      cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    });
    it('verifica mensagem de email', () => {
        cy.contains('a',  'Register now').click();
        cy.contains('button',  'Register').click();
        cy.get('input[formcontrolname="email"]').type('Jaqueline')
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    });

    it('verifica mensagem de password', () => {
          cy.contains('a',  'Register now').click();
        cy.contains('button',  'Register').click();
        cy.get('input[formcontrolname="password"]').type('123')
        cy.contains('button',  'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    });
});