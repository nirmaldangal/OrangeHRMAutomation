import 'cypress-iframe'


describe("Handling Frame",()=>{
    it('approach 1',()=>{
        cy.visit("http://the-internet.herokuapp.com/iframe");
       const iframe= cy.get("#mce_0_ifr")
       // frame vitra kasari lekhne vanne ho
       .its('0.contentDocument.body')
       .should('be.visible')
       .then(cy.wrap);
       // select kasari garne and bold kasari garne
       iframe.clear().type('Welcome{cmd+a}');
       cy.get("[aria-label='Bold']").click();

    })
// 2) Terminal ma gayera plugin install garne- npm install -D cypress-iframe

// and we have to import one module in the page
    it('approach 2-by using the plugin method',()=>{
        cy.visit("http://the-internet.herokuapp.com/iframe");
        cy.frameloaded('#mce_0_ifr'); // load the frame
        cy.iframe('#mce_0_ifr').clear().type("Welcome {cmd+a}");
        cy.get("[aria-label='Bold']").click();
      
    })


})