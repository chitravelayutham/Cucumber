$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to account at webdriverunivsity.com using login portal",
  "description": "",
  "id": "login-to-account-at-webdriverunivsity.com-using-login-portal",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4245941384,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I access webdriverunivsity.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the login portal button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter a username",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_access_webdriverunivsity_com()"
});
formatter.result({
  "duration": 5360170636,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_portal_button()"
});
formatter.result({
  "duration": 578385940,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_enter_a_username()"
});
formatter.result({
  "duration": 1338530525,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Login account with a valid password",
  "description": "",
  "id": "login-to-account-at-webdriverunivsity.com-using-login-portal;login-account-with-a-valid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I enter a \"webdriver123\" password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be presented with a succesfful validation alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver123",
      "offset": 11
    }
  ],
  "location": "LoginSteps.i_enter_a_password(String)"
});
formatter.result({
  "duration": 213584338,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 129462683,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_presented_with_a_succesfful_validation_alert()"
});
formatter.result({
  "duration": 17137024,
  "status": "passed"
});
formatter.before({
  "duration": 3187640050,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I access webdriverunivsity.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the login portal button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter a username",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_access_webdriverunivsity_com()"
});
formatter.result({
  "duration": 6060360814,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_portal_button()"
});
formatter.result({
  "duration": 256902343,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_enter_a_username()"
});
formatter.result({
  "duration": 1471105476,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login account with a invalid password",
  "description": "",
  "id": "login-to-account-at-webdriverunivsity.com-using-login-portal;login-account-with-a-invalid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I enter a \"invalid\" password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should be presented with a unsuccesfful validation alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 11
    }
  ],
  "location": "LoginSteps.i_enter_a_password(String)"
});
formatter.result({
  "duration": 122760505,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 145761262,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_presented_with_a_unsuccesfful_validation_alert()"
});
formatter.result({
  "duration": 11752890,
  "status": "passed"
});
});