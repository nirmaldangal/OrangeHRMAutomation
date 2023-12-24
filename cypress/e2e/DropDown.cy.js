describe("Handle Drop and Down method",() =>{
    it("Dropdown with select",() =>{
        cy.visit("https://www.zoho.com/people/free-demo.html")
        cy.type("#zcf_address_country")
        .select("italy")
        .should('be.have','Italy');


    })
    it("Dropdown without select but with enter",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-containier").click()
        // enter garda {enter} type garne and text ko verify garda have.text garera text write garne

        cy.get('.select2-search_field').type('Italy').type('{enter}')
        cy.get("#select2-billing_country-containier")
        .should('have.text','Italy')


        it("Auto Suggest dropdown",()=>{
            cy.visit("https://www.wikipedia.org/")
            cy.get("#select2-billing_country-containier").click()
            
            
            cy.get('#searchInput').type('Delhi')
            // Delhi type garepachi therai option aauch delhi but for the specific text selection ko lagi Delhi university contain vako chahi click garne vanne

            cy.get('.suggestion-title').contains('Delhi University').click();
            
           
            
            it("Dynamic dropdown changeable",()=>{
                cy.visit("https://www.google.com/")
                cy.get("input[name='q']").type('cypress Automation')
                // take time to display suggestion so better to put the wait
                cy.wait(3000)

                // How many option display on the list to check
                cy.get('div.wM6W7d>span').should('have.length',11)

                cy.get('div.wM6W7d>span').each (($el, index,$list)=>{
                    if($el.text()=='cypress automation tool')
                    {
                        cy.wrap($el).click()
                    }

                    cy.get("input[name='q']").should('have.value','cypress automation tool')
                })
                
              })
    
    
        })

    })
})