$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/hridhaan/eclipse-workspace/FreeCRMBddFramework/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM Create Contacts",
  "description": "",
  "id": "freecrm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM create a new contact",
  "description": "",
  "id": "freecrm-create-contacts;free-crm-create-a-new-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user mouse over on contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on new contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003ctitle\u003e\" and \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\" and \"\u003ccompany\u003e\" and \"\u003cemail\u003e\" and \"\u003cphone\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify new contact created \"\u003cfirstName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "freecrm-create-contacts;free-crm-create-a-new-contact;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "title",
        "firstName",
        "lastName",
        "company",
        "email",
        "phone"
      ],
      "line": 17,
      "id": "freecrm-create-contacts;free-crm-create-a-new-contact;;1"
    },
    {
      "cells": [
        "groupautomation",
        "Test@12345",
        "Mr.",
        "Abe",
        "Sabian",
        "ArchTech",
        "abe.sab@gmail.com",
        "7678767876"
      ],
      "line": 18,
      "id": "freecrm-create-contacts;free-crm-create-a-new-contact;;2"
    },
    {
      "cells": [
        "groupautomation",
        "Test@12345",
        "Mrs.",
        "Beena",
        "Banner",
        "ABCTech",
        "been.sab@gmail.com",
        "7678767876"
      ],
      "line": 19,
      "id": "freecrm-create-contacts;free-crm-create-a-new-contact;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM create a new contact",
  "description": "",
  "id": "freecrm-create-contacts;free-crm-create-a-new-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"groupautomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user mouse over on contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on new contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Mr.\" and \"Abe\" and \"Sabian\" and \"ArchTech\" and \"abe.sab@gmail.com\" and \"7678767876\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify new contact created \"Abe\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 11033195625,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 110074250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "groupautomation",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 35
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 339141875,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 6382133292,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Home_page()"
});
formatter.result({
  "duration": 20284750,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_mouse_over_on_contact_link()"
});
formatter.result({
  "duration": 272045000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_new_contact_link()"
});
formatter.result({
  "duration": 1868231375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 29
    },
    {
      "val": "Abe",
      "offset": 39
    },
    {
      "val": "Sabian",
      "offset": 49
    },
    {
      "val": "ArchTech",
      "offset": 62
    },
    {
      "val": "abe.sab@gmail.com",
      "offset": 77
    },
    {
      "val": "7678767876",
      "offset": 101
    }
  ],
  "location": "LoginStepDefination.user_enters_contact_details(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 467700500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 1683028834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abe",
      "offset": 28
    }
  ],
  "location": "LoginStepDefination.verify_new_contact_created(String)"
});
formatter.result({
  "duration": 35773000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.tearDown()"
});
formatter.result({
  "duration": 87850958,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM create a new contact",
  "description": "",
  "id": "freecrm-create-contacts;free-crm-create-a-new-contact;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"groupautomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user mouse over on contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on new contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Mrs.\" and \"Beena\" and \"Banner\" and \"ABCTech\" and \"been.sab@gmail.com\" and \"7678767876\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify new contact created \"Beena\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 7925110834,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 114951792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "groupautomation",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 35
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 336703666,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 7237432417,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Home_page()"
});
formatter.result({
  "duration": 19521375,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_mouse_over_on_contact_link()"
});
formatter.result({
  "duration": 253100875,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_new_contact_link()"
});
formatter.result({
  "duration": 1830969208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs.",
      "offset": 29
    },
    {
      "val": "Beena",
      "offset": 40
    },
    {
      "val": "Banner",
      "offset": 52
    },
    {
      "val": "ABCTech",
      "offset": 65
    },
    {
      "val": "been.sab@gmail.com",
      "offset": 79
    },
    {
      "val": "7678767876",
      "offset": 104
    }
  ],
  "location": "LoginStepDefination.user_enters_contact_details(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 481153458,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 1990515958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beena",
      "offset": 28
    }
  ],
  "location": "LoginStepDefination.verify_new_contact_created(String)"
});
formatter.result({
  "duration": 33484500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.tearDown()"
});
formatter.result({
  "duration": 85329083,
  "status": "passed"
});
});