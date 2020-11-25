package stepdefinitions;

import com.utilities.PageObjectManager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.HomePage;
import pageobjects.SerpPage;


public class HomeSteps {

	public HomePage homepage;
	public SerpPage serppage;
	public PageObjectManager objectmanager;
	
	@Given("^user is on TT Homepage$")
	public void user_is_on_TT_Homepage() {
		objectmanager = new PageObjectManager();
		homepage = objectmanager.getHomePage();
		homepage.launchHomePage();

	}

	@When("^user click on user icon and signin button$")
	public void user_click_on_user_icon_and_signin_button() {
		homepage.clickSignin();

	}

	@When("^user enter username and password$")
	public void user_enter_username_and_password() {
		homepage.enterEmail();
		homepage.enterPassword();

	}

	@When("^user click on login button$")
	public void user_click_on_login_button() {

		homepage.clickLoginButton();

	}

	@Then("^verify login popup$")
	public void verify_login_popup() {

		homepage.verifyLoginEmail();
		homepage.signOut();

	}

	@When("^verify title$")
	public void verify_title() {

		System.out.println(homepage.getTitle());
	}

	@Then("^verify family section display$")
	public void verify_family_section_display() {

		homepage.familySectionDisplay();
	}

	@When("^enter destination and departfrom$")
	public void enter_destination_and_departfrom() {

		homepage.selectDestination();
		homepage.selectDeparture();
	}

	@When("^select date$")
	public void select_date() {

		homepage.selectDate();
	}

	@When("^select nights and guests$")
	public void select_nights_and_guests() {

		homepage.selectNights();
		homepage.selectGuests();
	}
	@When("^click on search button$")
	public void click_on_search_button() {
		//homepage = new HomePage();
		serppage=homepage.clickFindDealsButton();
		//System.out.println("Status of the page" + serppage);

	}
	

	/*
	 * @Then("^close browser$") public void close_browser() {
	 * 
	 * homepage.closeBrowser();
	 * 
	 * }
	 */

}
