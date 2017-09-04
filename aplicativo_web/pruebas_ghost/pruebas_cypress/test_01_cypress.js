describe('Ghost', function() {
    beforeEach(function(){
        cy.visit('http://localhost:2368/');
    });

    it('Visit a Blog', function() {
        cy.get('.post-feed').find('.post-card').first().click();
        cy.wait(1000);
        cy.contains('Prueba de Historia');
    });

    it('Suscribe a Blog', function() {
        cy.visit('http://localhost:2368/prueba-de-historia/');
        cy.get('.subscribe-form').find('input[name="email"]').click().type("jh.rubiano10@uniandes.edu.co");
        cy.get('.subscribe-form').get("button").contains('Subscribe').click();
        cy.wait(1000);
        cy.get("p>em").eq(1).contains("jh.rubiano10@uniandes.edu.co");
    });

    it('Show entrances user', function() {
        cy.visit('http://localhost:2368/author/ghost/');
        cy.get('.post-card-author').children().should('have.length', 7);
    });

    it('Fail login email', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.get('.gh-signin').find('input[name="identification"]').click().type("correo@example.com");
        cy.get('.gh-signin').find('input[name="password"]').click().type("12345");
        cy.get('.gh-signin').contains("Sign in").click();
        cy.get('.main-error').contains('There is no user with that email address.');
    });

    it('Fail login password', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.get('.gh-signin').find('input[name="identification"]').click().type("jh.rubiano10@uniandes.edu.co");
        cy.get('.gh-signin').find('input[name="password"]').click().type("12345");
        cy.get('.gh-signin').contains("Sign in").click();
        cy.get('.main-error').contains('Your password is incorrect.');
    });



    it('Authenticate user', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.get('.gh-signin').find('input[name="identification"]').click().type("jh.rubiano10@uniandes.edu.co");
        cy.get('.gh-signin').find('input[name="password"]').click().type("12345678");
        cy.get('.gh-signin').contains("Sign in").click();
        cy.wait(1000);
        cy.get('.gh-nav-menu-details-user').contains('Jorge Rubiano');
    });
    
});