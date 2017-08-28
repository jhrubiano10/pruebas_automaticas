describe('Los estudiantes login', function() {
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
    
    
    it('Create new story', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.get('.gh-signin').find('input[name="identification"]').click().type("jh.rubiano10@uniandes.edu.co");
        cy.get('.gh-signin').find('input[name="password"]').click().type("12345678");
        cy.get('.gh-signin').contains("Sign in").click();
        cy.wait(1000);
        
        //Para obtner la cantidad de elementos existentes...
        let $el;
        cy.get('.gh-nav-menu-details-user').contains('Jorge Rubiano').then(($option) => {
            $el = Cypress.$('.gh-posts-list-item');
        });

        cy.get('.gh-btn').contains("New story").click();
        cy.get('textarea').eq(0).click().type('Otra Historia Jorge 06');
        cy.get('.ember-text-area').invoke('show').invoke('val', "Y veamos que pasa Contenido de la entrada que se desea en el Blog").type(".");
        cy.wait(1000);
        cy.get('.CodeMirror-code').click();
        cy.wait(1000);
        cy.get('.gh-nav-main>li').eq(1).click().then($opc => {
            cy.get('.gh-posts-list-item').siblings().should('have.length', $el.length + 1);
        });
    });

    /*

    it('Delete History', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.get('.gh-signin').find('input[name="identification"]').click().type("jh.rubiano10@uniandes.edu.co");
        cy.get('.gh-signin').find('input[name="password"]').click().type("12345678");
        cy.get('.gh-signin').contains("Sign in").click();
        cy.wait(1000);
        //Para obtner la cantidad de elementos existentes...
        let $el;
        cy.get('.gh-nav-menu-details-user').contains('Jorge Rubiano').then(($option) => {
            $el = Cypress.$('.gh-posts-list-item');
        });
        
        cy.get(".gh-content-entry-title>a").first().click();
    });
    */


});