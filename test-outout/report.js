$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM Login Feature",
  "description": "",
  "id": "freecrm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM login Test scenario",
  "description": "",
  "id": "freecrm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "user enters username and password",
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
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 8881294750,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 104065958,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enters_username_and_password()"
});
formatter.result({
  "duration": 320707042,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 6930473584,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Home_page()"
});
formatter.result({
  "duration": 21264167,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.tearDown()"
});
formatter.result({
  "duration": 84463417,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "user is able to create a new contact",
  "description": "",
  "id": "freecrm-login-feature;user-is-able-to-create-a-new-contact",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user mouse over on contact link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks on new contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user enters First name and last name",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "verify new contact created",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user closed browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContactStepDefination.user_is_already_on_home_page()"
});
formatter.result({
  "duration": 7866816875,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactStepDefination.user_mouse_over_on_contact_link()"
});
formatter.result({
  "duration": 7337312416,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactStepDefination.user_clicks_on_new_contact_link()"
});
formatter.result({
  "duration": 1894971625,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactStepDefination.user_enters_First_name_and_last_name()"
});
formatter.result({
  "duration": 471592334,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactStepDefination.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 1853433041,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactStepDefination.verify_new_contact_created()"
});
formatter.result({
  "duration": 39508916,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactStepDefination.tearsDown()"
});
formatter.result({
  "duration": 120601875,
  "status": "passed"
});
});