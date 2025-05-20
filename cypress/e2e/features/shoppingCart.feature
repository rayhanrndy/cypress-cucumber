Feature: Shopping Cart

  Scenario: Add item to cart
    Given I open the login page
    And I enter username "standard_user" and password "secret_sauce"
    And I click the login button
    And I should be redirected to the inventory page
    When I add the item "Sauce Labs Backpack" to the cart
    And I click the cart icon
    Then I redirected to the cart page
    And I should see the item "Sauce Labs Backpack" in the cart

  Scenario: Remove item from cart
    Given I open the login page
    And I enter username "standard_user" and password "secret_sauce"
    And I click the login button
    And I should be redirected to the inventory page
    When I add the item "Sauce Labs Backpack" to the cart
    And I click the cart icon
    And I click the remove button for "Sauce Labs Backpack"
    Then I should see the cart is empty