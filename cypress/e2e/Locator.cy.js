
require('cypress-xpath')
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // to get the xpath we have to install with 'npm install -D cypress -xpath' command
    cy.xpath("//div//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']").click();

    // Css selection locator, tag.class
    cy.get('input.oxd-text oxd-text--p orangehrm-login-forgot-header').type('Admin');
    //css selector locator, tag.attribute
    cy.get('button[type=submit]').click();
    cy.get('.oxd-text oxd-text--h6 orangehrm-forgot-password-title').should('contain','Reset Password link sent successfully')
// and for the id, we have to give the # before the locator
    
  })
})