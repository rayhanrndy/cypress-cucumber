Feature: Login Functionality

    Scenario: Successful login with valid credentials
        Given I open the login page
        When I enter username "standard_user" and password "secret_sauce"
        And I click the login button
        Then I should be redirected to the inventory page

    Scenario: Unsuccessful login with invalid credentials
        Given I open the login page
        When I enter username "invalid_user" and password "invalid_password"
        And I click the login button
        Then I should see an error message "Epic sadface: Username and password do not match any user in this service"