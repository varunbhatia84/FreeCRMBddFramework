Feature: Free CRM app test

@First
Scenario Outline: FREE CRM create a new deal

Given user is present on new deal page
When user fills the deal form "<DealName>" and "<Amount>" and "<Probability>" and "<Commission>"
Then deal is created "<DealName>"

Examples:
		| DealName | Amount | Probability | Commission |
		| airdeal | 1234 | 50 | 10 |
		| ankledeal | 1556 | 60 | 20 |
		
		
@Second
Scenario: Free Logout page title
Given user is on HomePage
Then user clicks on logoutButton
Then verify logout page title matches