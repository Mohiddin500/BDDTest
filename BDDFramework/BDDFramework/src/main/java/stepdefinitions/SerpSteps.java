package stepdefinitions;


import com.utilities.PageObjectManager;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.FodPage;
import pageobjects.SerpPage;

public class SerpSteps {

	public SerpPage serppage;
	public FodPage fodpage;

	
	@Then("^verify search results are displayed$")
	public void verify_search_results_are_displayed() {
		PageObjectManager objectmanager = new PageObjectManager();
		serppage=objectmanager.getSerpPage();
		serppage.verifySearchPageDisplay();
		// System.out.println("Url Of the Page : " + homepage.getSerpUrl());
		// System.out.println("SerpPage object is " + serppage);
	}
	
	@When("^user verify title$")
	public void user_verify_title() {
		serppage.title();
	}

	@When("^user verify Url$")
	public void user_verify_Url() {
		serppage.url();
	}

	@Then("^verify search results section display$")
	public void verify_search_results_section_display() {

		serppage.serpResults();
	}

	@When("^user verify sortbyprice tab display$")
	public void user_verify_sortbyprice_tab_display() {
		serppage.sortTabDispalyed();
	}

	@Then("^user click on sortbyprice tab$")
	public void user_click_on_sortbyprice_tab() {
		serppage.clickSortPrice();
	}

	@Then("^user verify filters section display$")
	public void user_verify_filters_section_display() {
		serppage.verifyFlitersSec();
	}
	@When("^user select the hotel$")
	public void user_select_the_hotel() throws Exception {
	 fodpage= serppage.selectHotel();
	}
	
	
	
	

}
