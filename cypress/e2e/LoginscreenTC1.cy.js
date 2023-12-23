describe('Login', () => {
  it('should log in and navigate to the Dashboard', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Replace with your actual application URL

    // Type username and password
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');

    // Click on the login button
    cy.get('button[type="submit"]').click();
    cy.wait(5000); // Wait for 5 seconds


    // Assertion: Check if the login is successful by verifying the presence of the Dashboard element
    cy.get('.oxd-userdropdown-name', { timeout: 1 }) // Increase the timeout if needed
      .should('contain', 'Paul Collings');
  });
});

