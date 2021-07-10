package stepdefinitions;

import pageobjects.FodPage;

import com.utilities.PageObjectManager;

import cucumber.api.java.en.Then;

public class FodSteps {

	public FodPage fodpage;
	
	
	@Then("^verify hotel information section display$")
	public void verify_hotel_information_section_display() {
		PageObjectManager objectmanager = new PageObjectManager();
		fodpage= objectmanager.getFodPage();
		System.out.println("FODpage obeject is : " + fodpage);
		fodpage.hotelInfo();
	}
	

	@Then("^verify nearby hotel section display$")
	public void verify_nearby_hotel_section_display() {
		
	//	fodpage = new FodPage();
		System.out.println("FODpage obeject is : " + fodpage);
		fodpage.hotelsNearbySec();
	}

	@Then("^verify Carona text section display$")
	public void verify_Carona_text_section_display() {
		
		System.out.println("FODpage obeject is : " + fodpage);
		fodpage.caronaInfoSec();
	}

}
