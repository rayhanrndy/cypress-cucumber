const { Given, When, Then, And } = require('cypress-cucumber-preprocessor/steps');

const baseUrl = 'https://www.saucedemo.com'; // Replace with your actual base URL

Given('I open the login page', () => {
    cy.visit(baseUrl);
})
Given('I enter username {string} and password {string}', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
})
Given('I click the login button', () => {
    cy.get('[data-test="login-button"]').click();
})
Given('I should be redirected to the inventory page', () => {
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
})
When('I add the item {string} to the cart', (itemName) => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
})
When('I click the cart icon', () => {
    cy.get('[data-test="shopping-cart-link"]').click();
})
Then('I redirected to the cart page', () => {
    cy.url().should('include', '/cart.html');
})
And('I should see the item {string} in the cart', (itemName) => {
    cy.get('.cart_item').should('contain', itemName);
})
When("I click the remove button for {string}", () => {
    cy.get('[data-test^="remove-"]').first().click();
});

Then("I should see the cart is empty", () => {
    cy.get(".cart_item").should("not.exist");
})