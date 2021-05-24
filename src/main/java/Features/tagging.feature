@FuntionalTest
Feature: FreeCRM application testing

@SmokeTest @RegressionTest
Scenario: Login in with correct username and correct password
Given This is a valid login test

@RegressionTest
Scenario: Login in with incorrect username and correct password
Given This is a invalid login test

@SmokeTest
Scenario: Create a new contact
Given This is a contact test case

@SmokeTest @RegressionTest
Scenario: Create a new deal
Given This is a deal test case

@RegressionTest
Scenario: Create a new task
Given This is a task test case

@SmokeTest
Scenario: Create a new case
Given This is a case test case

@SmokeTest @RegressionTest
Scenario: Verify left panel links
Given Clicking on left panel links

@SmokeTest
Scenario: Search a deal
Given Search deal test

@SmokeTest
Scenario: Search a contact
Given Search contact test

@SmokeTest @RegressionTest
Scenario: Search a case
Given Search case test

@SmokeTest @RegressionTest
Scenario: Search a task
Given Search task test

@SmokeTest @End2End
Scenario: Search a call
Given Search call test

@SmokeTest @End2End
Scenario: Search an email
Given Search email test

@SmokeTest @End2End
Scenario: Search a docs
Given Search docs test

@SmokeTest @End2End
Scenario: Search a forms
Given Search forms test

@End2End
Scenario: Generate a report
Given Validate a report

@End2End
Scenario: Application logout
Given This is a logout test

Scenario: Application closed
Given Close browser Test
