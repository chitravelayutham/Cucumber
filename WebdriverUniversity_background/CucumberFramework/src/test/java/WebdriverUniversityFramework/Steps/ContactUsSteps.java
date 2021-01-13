package WebdriverUniversityFramework.Steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ContactUsSteps {
	@Given("^I access webdriveruniversity$")
	public void i_access_webdriveruniversity() throws Throwable {
		System.out.println("I access webdriveruniversity");
	}

	@When("^I click on the contact us button$")
	public void i_click_on_the_contact_us_button() throws Throwable {
		System.out.println("I click on the contact us button");
	}

	@When("^I enter a valid first name$")
	public void i_enter_a_valid_first_name() throws Throwable {
		System.out.println("I enter a valid first name");
	}

	@When("^I enter a valid last name$")
	public void i_enter_a_valid_last_name() throws Throwable {
		System.out.println("I enter a valid last name");
	}

	@When("^I enter a valid email address$")
	public void i_enter_a_valid_email_address() throws Throwable {
		System.out.println("I enter a valid email address");
	}

	@When("^I enter comments$")
	public void i_enter_comments() throws Throwable {
		System.out.println("I enter a valid email address");
	}

	@When("^I click on the submit button$")
	public void i_click_on_the_submit_button() throws Throwable {
		System.out.println("I click on the submit button");
	}

	@Then("^the information should successfully be submitted via the contact us form$")
	public void the_information_should_successfully_be_submitted_via_the_contact_us_form() throws Throwable {
		System.out.println("the information should successfully be submitted via the contact us form");
	}

	@When("^I enter a non valid first name$")
	public void i_enter_a_non_valid_first_name() throws Throwable {
		System.out.println("I enter a non valid first name");
	}

	@When("^I enter a non valid last name$")
	public void i_enter_a_non_valid_last_name() throws Throwable {
		System.out.println("I enter a non valid last name");
	}

	@When("^I enter a non valid email address$")
	public void i_enter_a_non_valid_email_address() throws Throwable {
		System.out.println("I enter a non valid email address");
	}

	@When("^I enter no comments$")
	public void i_enter_no_comments() throws Throwable {
		System.out.println("I enter no comments");
	}

	@Then("^the information should not be successfully be submitted via the contact us form$")
	public void the_information_should_not_be_successfully_be_submitted_via_the_contact_us_form() throws Throwable {
		System.out.println("the information should not be successfully be submitted via the contact us form");
	}

	@Then("^the user should also be notified of the problem$")
	public void the_user_should_also_be_notified_of_the_problem() throws Throwable {
		System.out.println("the user should also be notified of the problem");
	}
}
