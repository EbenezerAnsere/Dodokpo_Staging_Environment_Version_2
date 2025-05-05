Feature: Upload true or false question

    Scenario: Should be able to delete true or false question
        Given User opens the login form
        When  User enters credentials include an email and a password
        Then  User should be logged in to the application
        When  Test Management Tab should be provided
        And   User should open the bulk question upload
        When  User edits a question from the list shown in the table