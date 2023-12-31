describe("Alerts",()=>{
// 1) Javascript Alert: it will have some text and an 'Ok' button
// can use the skip if we want to skip the test case, and also can use the only if we want to run one test case 

    it.skip('js alert',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[button[onclick='jsAlert()']").click()
       // to handle the event alert, capture the event in the t variable
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a js Alert');

        })
        // alert window automatically closed by cypress
        cy.get("#result").should('have.text','you successfully clicked an alert')
        

    })
// 2) In the cypress, it is hanlded the ok altert but cancel we have to handle manually  via code
//2) Javascript confirm Alert: it will have some text with ok and cancel button

    it('js alert',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[button[onclick='jsAlert()']").click()
       // to handle the event alert, capture the event in the t variable
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a js Alert');

        })
        // alert window automatically closed by cypress
        cy.get("#result").should('have.text','you successfully clicked an alert')
        cy.get("#result").should('have.text','You clicked: Ok')


    })

    // 3) Javascript prompt Alert: It will have some text with a text box for user input along with 'OK'
    it('js Prompt alert',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })

        cy.get("button[onclick='jsPrompt()']").click();
        
        cy.on('window:prompt',()=> false);
        
        // cypress will automatically close prompted alert- it will use ok button- by default
        cy.get("#result").should('have.text','You entered: welcome');


    })

    // 4) Authenticated Altert
    it('Authenticated Alert',()=>{

        //First Approach
        cy.visit("http://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin",password:'admin'}});
        cy.get("div[class='example']p").should('have.contain',"Congratuglations");

        //Second Approach
        cy.visit("http:/admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example']p").should('have.contain',"Congratuglations");
        


    })

})