$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into account",
  "description": "Existing user should be able to login using correct credentials",
  "id": "login-into-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14762407334,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login into account with correct credentials",
  "description": "",
  "id": "login-into-account;login-into-account-with-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User navigates to stackoverflow website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on the login button on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters a valid username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters a valid password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should be taken to successful login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_stackoverflow_website()"
});
formatter.result({
  "duration": 889816966,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button_on_homepage()"
});
formatter.result({
  "duration": 699942545,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_a_valid_username()"
});
formatter.result({
  "duration": 3124133345,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_a_valid_password()"
});
formatter.result({
  "duration": 43811463,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 2352127908,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_successful_login_page()"
});
formatter.result({
  "duration": 4031663606,
  "status": "passed"
});
formatter.uri("Login2.feature");
formatter.feature({
  "line": 1,
  "name": "Login into account",
  "description": "Existing user should be able to login using correct credentials",
  "id": "login-into-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6510236713,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login into account with correct credentials2",
  "description": "",
  "id": "login-into-account;login-into-account-with-correct-credentials2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User navigates to stackoverflow website2",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on the login button on homepage2",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters a valid username2",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters a valid password2",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the login button2",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should be taken to successful login page2",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 39
    }
  ],
  "location": "LoginSteps.user_navigates_to_stackoverflow_website(int)"
});
formatter.result({
  "duration": 5026902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 43
    }
  ],
  "location": "LoginSteps.user_clicks_on_the_login_button_on_homepage(int)"
});
formatter.result({
  "duration": 144175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_enters_a_valid_username(int)"
});
formatter.result({
  "duration": 790506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_enters_a_valid_password(int)"
});
formatter.result({
  "duration": 156048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "LoginSteps.user_clicks_on_the_login_button(int)"
});
formatter.result({
  "duration": 218633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "LoginSteps.user_should_be_taken_to_successful_login_page(int)"
});
formatter.result({
  "duration": 937690013,
  "status": "passed"
});
});