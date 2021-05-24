$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/hridhaan/eclipse-workspace/FreeCRMBddFramework/src/main/java/Features/dealsmap.feature");
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
  "name": "user lands on login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "login page title is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters usernames and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "groupautomation",
        "Test@12345"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicked login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user lands on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user mouse overs on deal link",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks new deal creation link",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters new deal details and saves it",
  "rows": [
    {
      "cells": [
        "DealName",
        "Amount",
        "Probability",
        "Commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "airdeal",
        "1234",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "ankledeal",
        "1556",
        "60",
        "20"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user quits browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepWithMapDefination.user_is_on_login_Page()"
});
formatter.result({
  "duration": 9758715292,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefination.title_of_login_page_Free_CRM()"
});
formatter.result({
  "duration": 108477792,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefination.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 327369542,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefination.user_clicks_login_button()"
});
formatter.result({
  "duration": 6893358875,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefination.user_on_Home_page()"
});
formatter.result({
  "duration": 21922167,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefination.user_mouse_over_on_deal_link()"
});
formatter.result({
  "duration": 268723500,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefination.user_clicks_on_new_deal_link()"
});
formatter.result({
  "duration": 1594377750,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefination.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 6548748708,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefination.tearDown()"
});
formatter.result({
  "duration": 87842625,
  "status": "passed"
});
});