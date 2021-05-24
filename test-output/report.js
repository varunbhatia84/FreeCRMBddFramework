$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/hridhaan/eclipse-workspace/FreeCRMBddFramework/src/main/java/Features/tagging.feature");
formatter.feature({
  "line": 2,
  "name": "FreeCRM application testing",
  "description": "",
  "id": "freecrm-application-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FuntionalTest"
    }
  ]
});
formatter.scenario({
  "line": 72,
  "name": "Application closed",
  "description": "",
  "id": "freecrm-application-testing;application-closed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 73,
  "name": "Close browser Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.Close_browser_Test()"
});
formatter.result({
  "duration": 71044916,
  "status": "passed"
});
});