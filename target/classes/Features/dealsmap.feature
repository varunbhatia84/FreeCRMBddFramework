Feature: Deal data creation

Scenario: Create a new deal
Given user lands on login Page
When  login page title is Free CRM
Then user enters usernames and password
		| username | password |
		| groupautomation | Test@12345 |

Then user clicked login button
Then user lands on Home page
Then user mouse overs on deal link
Then user clicks new deal creation link
Then user enters new deal details and saves it
		| DealName | Amount | Probability | Commission |
		| airdeal | 1234 | 50 | 10 |
		| ankledeal | 1556 | 60 | 20 |
Then user quits browser