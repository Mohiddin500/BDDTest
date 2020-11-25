package pageobjects;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.testng.Assert;

import com.utilities.CommonUtilityManager;
import com.utilities.TestBase;

public class FodPage extends TestBase {


	
	By HotelContent=By.xpath("//div[@id='about-tab']");
	By HotelsNearBy=By.xpath("//div[@id='fod-similarDestinations']");
	By CaronaInfo=By.xpath("//div[@class='covid-facilities cf-desktop show-on-desktop']");
	By Hotelname=By.xpath("//*[@id='fod-title']");
	
	Logger log = LogManager.getLogger(FodPage.class);
	
	boolean flag;
	
	/*
	 * public Boolean hotelInfo() { js = (JavascriptExecutor) driver;
	 * js.executeScript("arguments[0].scrollIntoView(true);",
	 * driver.findElement(Hotelname));
	 * if(driver.findElement(Hotelname).isDisplayed()) {
	 * System.out.println("Hotel name in FOD page is  : "
	 * +driver.findElement(Hotelname).getText()); return true; } return false; }
	 */
	public void hotelInfo() {
		CommonUtilityManager.jsScrollIntoViewOnwebElement(Hotelname);
		flag=CommonUtilityManager.isWebElementDisplayed(Hotelname);
		log.info("***** User verified user information is displayed *****");
		Assert.assertTrue(flag, "HotelName is not displayed");
	}
	
	public void hotelsNearbySec() {
		CommonUtilityManager.jsScrollIntoViewOnwebElement(HotelsNearBy);
		flag=CommonUtilityManager.isWebElementDisplayed(HotelsNearBy);
		log.info("***** User verified hotel information  displayed *****");
		Assert.assertTrue(flag, "Hotels NearBy Section is not displayed");
	}
	
	public void caronaInfoSec() {
		CommonUtilityManager.jsScrollIntoViewOnwebElement(CaronaInfo);
		flag=CommonUtilityManager.isWebElementDisplayed(CaronaInfo);
		log.info("***** User verified carona information is displayed *****");
		Assert.assertTrue(flag, "CaronaInformation Section is not displayed");
	}

}
