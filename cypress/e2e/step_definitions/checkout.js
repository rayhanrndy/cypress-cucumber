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
Given('I add the item {string} to the cart', (itemName) => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
})
Given('I click the cart icon', () => {
    cy.get('[data-test="shopping-cart-link"]').click();
})
Given('I redirected to the cart page', () => {
    cy.url().should('include', '/cart.html');
})
Given('I should see the item {string} in the cart', (itemName) => {
    cy.get('.cart_item').should('contain', itemName);
})
When('I click the checkout button', () => {
    cy.get('[data-test="checkout"]').click();
})
And('I enter firstName {string} , lastName {string} and postalCode {string}', (firstName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
})
And('I click the continue button', () => {
    cy.get('[data-test="continue"]').click();
})
Then('I should be redirected to the overview page', () => {
    cy.url().should('include', '/checkout-step-two.html');
})
And('I click the finish button', () => {
    cy.get('[data-test="finish"]').click();
})
Then('I should be redirected to the checkout complete page', () => {
    cy.url().should('include', '/checkout-complete.html');
})
When('I click the checkout button', () => {
    cy.get('[data-test="checkout"]').click();
})
And('I click the continue button', () => {
    cy.get('[data-test="continue"]').click();
})
Then('I should see the error message {string}', (errorMessage) => {
    cy.get('[data-test="error"]').should('contain', errorMessage);
})