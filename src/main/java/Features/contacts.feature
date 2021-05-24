Feature: FreeCRM Create Contacts

Scenario Outline: Free CRM create a new contact
Given user is already on login Page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on Home page
Then user mouse over on contact link
Then user clicks on new contact link
Then user enters contact details "<title>" and "<firstName>" and "<lastName>" and "<company>" and "<email>" and "<phone>"
Then user clicks on save button
Then verify new contact created "<firstName>"
Then user closes browser

Examples:
    | username | password | title | firstName | lastName | company | email | phone |
    | groupautomation | Test@12345 | Mr. | Abe | Sabian | ArchTech | abe.sab@gmail.com | 7678767876 |
    | groupautomation | Test@12345 | Mrs. | Beena | Banner | ABCTech | been.sab@gmail.com | 7678767876 |


