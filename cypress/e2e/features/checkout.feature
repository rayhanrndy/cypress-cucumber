Feature: Checkout Process

  Scenario: Successful checkout
    Given I open the login page
    And I enter username "standard_user" and password "secret_sauce"
    And I click the login button
    And I should be redirected to the inventory page
    And I add the item "Sauce Labs Backpack" to the cart
    And I click the cart icon
    And I redirected to the cart page
    And I should see the item "Sauce Labs Backpack" in the cart
    When I click the checkout button
    And I enter firstName "John" , lastName "Doe" and postalCode "12345"
    And I click the continue button
    Then I should be redirected to the overview page
    And I click the finish button
    Then I should be redirected to the checkout complete page
    
Scenario: Invalid checkout
    Given I open the login page
    And I enter username "standard_user" and password "secret_sauce"
    And I click the login button
    And I should be redirected to the inventory page
    And I add the item "Sauce Labs Backpack" to the cart
    And I click the cart icon
    And I redirected to the cart page
    And I should see the item "Sauce Labs Backpack" in the cart
    When I click the checkout button
    And I click the continue button
    Then I should see an error message "Error: First Name is required"