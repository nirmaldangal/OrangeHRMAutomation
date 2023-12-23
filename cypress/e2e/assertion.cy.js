describe('Assertion demo', () => {
  it('Implicit assertion', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // for url verification
    // for the implicit assertion we have two assert; should and and

    cy.url().should('include','orangehrmlive.com');
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('contain','orangehrm');
    

// we can also remove the extra cy.url() and follow this process

    cy.url().should('include','orangehrmlive.com')
    .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .should('contain','orangehrm');

    // and method for adding multiple steps
    cy.url().should('include','orangehrmlive.com')
    .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain','orangehrm')
    .and('not.contain','ddfdf');
    cy.wait(5000) // to wait the DOM data
    cy.title().should('include','Orange')
    .and('eq','OrangeHRM')
    .and('contain','HRM');
    // to check the logo assertion
    // sidai cypress ko running area ma gayera pani locator lina sakincha
    cy.get('.orangehrm-login-branding > img')
    .should('be.visible')
    .should('exist');



// yo kam gareko chaina tara yehi ho tarika chahi
   // cy.xpath("//a").should('have.length','5'); // no of links
 
// username thik cha ki chaina vanera yo garne
   cy.get("input[placeholder='Username']").type('Admin')
    cy.get(
"input[placeholder='Username']").should('have.value','Admin');

    //Supportted parameter are
// eq, contain.include, have.lenght, exist, have.value, etc
  }) })

// b) Explicit assertion
// expect- BDD-behaviour driven development
// assert- TDD - Triven driven Development
describe('Assertion Explicit', () => {
  it('Explicit assertion', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // for url verification
    // for the implicit assertion we have two assert; should and and

    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()

    let expName="Paul Collings";
    cy.get(".oxd-userdropdown-name").then( (x)=> {
      let actName=x.text()
      //BDD style
      expect(actName).to.equal(expName)
      expect(actName).to.not.equal(expName)

      //TDD Assertion

      assert.equal(actName,expName)
      assert.notEqual(active,expName)


    })
    cy.get(".")

  
  
  })
})