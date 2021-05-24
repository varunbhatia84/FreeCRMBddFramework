Feature: FreeCRM Login Feature

# Data driven without examples keyword

#Scenario: Free CRM login Test scenario
#Given user is already on login Page
#When title of login page is Free CRM
#Then user enters "groupautomation" and "Test@12345"
#Then user clicks on login button
#Then user is on Home page
#Then user closes browser

#Data driver with examples keyword
Scenario Outline: Free CRM login Test scenario
Given user is already on login Page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on Home page
Then user closes browser

# We need to use "scenario outline" ,instead of "scenario" when using examples keyword

Examples: 
    | username | password |
    | groupautomation | Test@12345 |
	| tom | test456 |



