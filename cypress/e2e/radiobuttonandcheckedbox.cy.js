describe("Checked UI Element",()=>{
    it("Check Radio Buttons",()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
       // check gareko, radio button visible cha ki chaina vanera
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        // selecting radio button male ko
        cy.get("input#male").check().should('be.checked')
        //negation coding
        cy.get("input#female").should('not.be.checked')

        // female radio button check gareko
        cy.get("input#female").check().should('be.checked')
        //negation coding
        cy.get("input#male").should('not.be.checked')

        // for unselectiong checkbox
        it("checking check boxes",()=>{
            cy.visit("https://itera-qa.azurewebsites.net/home/automation")

            // for selecting single check box- Monday
            cy.get("input#monday").check().should('be.checked')

            // unselecting checkbox
            cy.get("input#monday").uncheck().should('not.be.checked')

            // how to select the all checkbox at a time ( yekai palta ma)
            // css selector use garera common path find garne ani check garne tyaspachi should use garera check vako cha ki chaina check garne

            cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
            cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')


            // select first checkbox ( yo yeuta method ho first ko check box check garne tarika)
            cy.get("input.form-check-input[type='checkbox']").first().check()
            cy.get("input.form-check-input[type='checkbox']").last().check()
            




            // conclusion: for the checkbox and the radio button its the
        // same for check and unchecking or select or unselecting









        })










    })





})