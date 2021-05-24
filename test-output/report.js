$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/hridhaan/eclipse-workspace/FreeCRMBddFramework/src/main/java/Features/hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM app test",
  "description": "",
  "id": "free-crm-app-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15065294625,
  "status": "passed"
});
formatter.before({
  "duration": 26189667,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#@First"
    },
    {
      "line": 4,
      "value": "#Scenario Outline: FREE CRM create a new deal"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#Given user is present on new deal page"
    },
    {
      "line": 7,
      "value": "#When user fills the deal form \"\u003cDealName\u003e\" and \"\u003cAmount\u003e\" and \"\u003cProbability\u003e\" and \"\u003cCommission\u003e\""
    },
    {
      "line": 8,
      "value": "#Then deal is created \"\u003cDealName\u003e\""
    },
    {
      "line": 9,
      "value": "#"
    },
    {
      "line": 10,
      "value": "#Examples:"
    },
    {
      "line": 11,
      "value": "#\t\t| DealName | Amount | Probability | Commission |"
    },
    {
      "line": 12,
      "value": "#\t\t| airdeal | 1234 | 50 | 10 |"
    },
    {
      "line": 13,
      "value": "#\t\t| ankledeal | 1556 | 60 | 20 |"
    },
    {
      "line": 14,
      "value": "#"
    }
  ],
  "line": 17,
  "name": "Free Logout page title",
  "description": "",
  "id": "free-crm-app-test;free-logout-page-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user clicks on logoutButton",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "verify logout page title matches",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.user_is_on_HomePage()"
});
formatter.result({
  "duration": 179476958,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.user_clicks_on_logoutButton()"
});
formatter.result({
  "duration": 1053269916,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.verify_logout_page_title_matches()"
});
formatter.result({
  "duration": 7353041,
  "status": "passed"
});
formatter.after({
  "duration": 85071584,
  "status": "passed"
});
});