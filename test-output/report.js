$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/hridhaan/eclipse-workspace/FreeCRMBddFramework/src/main/java/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Create a new deal",
  "description": "",
  "id": "deal-data-creation;create-a-new-deal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "groupautomation",
        "Test@12345"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user mouse over on deal link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on new deal link",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "apple deal",
        "1234",
        "50",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on save deal button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "verify new deal created",
  "rows": [
    {
      "cells": [
        "apple deal"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user closed browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDefinition.user_is_on_login_Page()"
});
formatter.result({
  "duration": 8685126375,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.title_of_login_page_Free_CRM()"
});
formatter.result({
  "duration": 26779708,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 347125375,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_login_button()"
});
formatter.result({
  "duration": 6933063833,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_on_Home_page()"
});
formatter.result({
  "duration": 22247291,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_mouse_over_on_deal_link()"
});
formatter.result({
  "duration": 265840500,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_on_new_deal_link()"
});
formatter.result({
  "duration": 1589024000,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 302934166,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_on_save_deal_button()"
});
formatter.result({
  "duration": 1794975958,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.verify_new_deal_created(DataTable)"
});
formatter.result({
  "duration": 40630334,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.tearDown()"
});
formatter.result({
  "duration": 84753792,
  "status": "passed"
});
});