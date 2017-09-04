//Para gererar mensajes aleatorios...
var randomQuotes = function() {
    var quoteSource = [{
        quote:"Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
        name: "Francis of Assisi"
    },{
        quote: "Believe you can and you're halfway there.",
        name: "Theodore Roosevelt"
    },{
        quote: "It does not matter how slowly you go as long as you do not stop.",
        name: "Confucius"
    },{
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        name: "Thomas A. Edison"
    },{
        quote: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
        name: "Confucius"
    },{
        quote: "Don't watch the clock; do what it does. Keep going.",
        name: "Sam Levenson"
    }];        
    return quoteSource[Math.floor(Math.random() * quoteSource.length)];
};


describe('Ghost', function() {

    beforeEach(function(){
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.get('.gh-signin').find('input[name="identification"]').click().type("jh.rubiano10@uniandes.edu.co");
        cy.get('.gh-signin').find('input[name="password"]').click().type("12345678");
        cy.get('.gh-signin').contains("Sign in").click();
        cy.wait(2000);
    });
    
    it('Create new story', function() {
        let $el;
        cy.get('.gh-nav-menu-details-user').contains('Jorge Rubiano').then(($option) => {
            $el = Cypress.$('.gh-posts-list-item');
        });
        var quote = randomQuotes();
        cy.get('.gh-btn').contains("New story").click();
        cy.get('textarea').eq(0).click().type("Post: " + quote.name);
        cy.get('.ember-text-area').invoke('show').invoke('val', quote.quote).type(".");
        cy.wait(1000);
        cy.get('.CodeMirror-code').click();
        cy.wait(1000);
        cy.get('.gh-nav-main>li').eq(1).click().then($opc => {
            cy.get('.gh-posts-list-item').siblings().should('have.length', $el.length + 1);
        });
    });

    
    it('Published History', function() {
        //Para Publicar una historia...
        cy.get(".gh-content-entry-title>a").first().click();
        cy.get(".gh-publishmenu-trigger").click();
        cy.get(".gh-publishmenu-footer").get(".gh-publishmenu-button").contains("Publish").click();
        cy.wait(1000);
        cy.get(".post-settings").click();
        cy.get(".post-view-link").contains("View post");
    });
    
    

    it('Unpublished History', function() {
        //Para despublicar una historia...
        cy.get(".gh-content-entry-title>a").first().click();
        cy.get(".gh-publishmenu-trigger").contains("Update").click();
        cy.get(".gh-publishmenu-content").get(".gh-publishmenu-radio>div").eq(0).click();
        cy.wait(1000);
        cy.get(".gh-publishmenu-footer").get(".gh-publishmenu-button").contains("Unpublish").click();
        cy.get(".post-settings").click();
        cy.wait(1000);
        cy.get(".post-view-link").contains("Preview"); 
    });

    it('Delete History', function() {
        //Para obtner la cantidad de elementos existentes...
        let $el;
        cy.get('.gh-nav-menu-details-user').contains('Jorge Rubiano').then(($option) => {
            $el = Cypress.$('.gh-posts-list-item');
        });
        cy.get(".gh-content-entry-title>a").first().click();
        cy.get(".post-settings").click();
        cy.get(".settings-menu-delete-button").should('be.visible').click();
        cy.get(".modal-footer").get(".gh-btn-red").contains("Delete").click();
        cy.wait(1000);
        cy.get('.gh-nav-main>li').eq(1).click().then($opc => {
            cy.get('.gh-posts-list-item').siblings().should('have.length', $el.length - 1);
        });
    });

});