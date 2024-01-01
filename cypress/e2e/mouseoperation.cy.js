describe("Mouse Operation",()=>{
    it('MouseHover',()=>{

    cy.visit("https://demo.opencart.com/");
    cy.get(".form-control form-control-lg")
    .should('not.be.visible');

    cy.get('.nav> nth:child(1)>.dropdown-toggle').trigger('mouserover').click();

    cy.get('.nav> nth:child(1)>.dropdown-toggle').trigger('mouserover')
    .should('be.visible');


    })
    it('Right CLick ',()=>{
        // Approach 1
        cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html");
        cy.get('.context-menu-one.btn-neutral').trigger('contextmenu');
        cy.get('.context-menu-icon-cpoy>span').should('be.visible');

        //Approach 2
        cy.get('.context-menu-one.btn-neutral').rightclick();

        cy.get('.context-menu-icon-cpoy>span').should('be.visible');




    })
    it('Double click',()=>{
        // Approach 1 first trigger method
        cy.visit('https://www.w3school.com');~
        cy.frameloaded('iframeResult');// load the frame
        cy.iframe('#iframeResult').find("button[ondlclick='myFunction()']").trigger('dblclick');
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello WOrld !');
        // Approach 2 second vaneko dblclick() garne

        cy.iframe('#iframeResult').find("button[ondlclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello WOrld !');




    })
    it('Drag and drop using plugin',()=>{
         // module install garne npm install --save-dev @4tw/cypress-drag-drop
         cy.visit("http://www.dhtmlgoodies.com")
         cy.get('#box6').should('be.visible')
         cy.get('#box106').should('be.visible')
         cy.wait(3000);
         // Forcefully drag garnu parne vayekole 
         cy.get('#box6').drag('#box106',{force:true});






    })

    // scrolling garda scrollIntoView() garne ra time wait chaiye duration garne
    it('Scrolling page',()=>{
        cy.get('http://www.countries-ofthe-world.com/flag')
        cy.get(':nth-child(1)> tbody........').scrollIntoView({duration:2000})




    })



})