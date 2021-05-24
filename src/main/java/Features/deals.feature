Feature: Deal data creation

Scenario: Create a new deal
Given user is on login Page
When title of login page Free CRM
Then user enters username and password
| groupautomation | Test@12345 |

Then user clicks login button
Then user on Home page
Then user mouse over on deal link
Then user clicks on new deal link
Then user enters deal details
| apple deal | 1234 | 50 | 10 |
Then user clicks on save deal button
Then verify new deal created
| apple deal|
Then user closed browser