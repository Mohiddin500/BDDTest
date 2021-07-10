//Author: Karthik
package pageobjects;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.testng.Assert;

import com.utilities.CommonUtilityManager;
import com.utilities.TestBase;

public class SerpPage extends TestBase {

	By hotels = By.xpath("//div[@id='hotels_list']//div[@class='hotel-info pstn-reltv']//h3");
	By SearchResults = By.xpath("//div[@id='hotels_list']");
	By Sortingtab = By.xpath("//div[@class='sort-by inblock show-on-desktop bgnd-white edge vrtcl-align-middle']");
	By SortPrice = By.xpath(
			"//div[@class='sort-by inblock show-on-desktop bgnd-white edge vrtcl-align-middle']//ul//li[@class='sort-option rating-btn inblock cursor-p set-sorting']");
	By filters = By.xpath("//div[@class='filters bgnd-white']");

	boolean flag;
	Logger log = LogManager.getLogger(SerpPage.class);

	public void title() {
		System.out.println("Title of the page : " + driver.getTitle());
	}

	public void url() {
		System.out.println("URL of the page : " + driver.getCurrentUrl());
	}

	public void serpResults() {

		flag = CommonUtilityManager.isWebElementDisplayed(SearchResults);
		log.info("***** User verified Search results are displayed *****");
		Assert.assertTrue(flag, "Search Results are not displayed");
	}

	public void sortTabDispalyed() {
		flag=CommonUtilityManager.isWebElementDisplayed(Sortingtab);
		log.info("***** User verified Sorting Tab is displayed *****");
		Assert.assertTrue(flag, "SortingTab is not displayed");
	}

	/*
	 * public void clickSortPrice() { WebElement PriceSort =
	 * driver.findElement(SortPrice); PriceSort.click(); }
	 */
	public void clickSortPrice() {
		CommonUtilityManager.clickonWebElement(SortPrice);
		log.info("***** User Selected the sort price *****");
	}

	public void verifyFlitersSec() {
		flag=CommonUtilityManager.isWebElementDisplayed(filters);
		log.info("***** User verified Filters section is displayed *****");
		Assert.assertTrue(flag, "Filters Section is not displayed");

	}

	/*
	 * public FodPage selectHotel() throws Exception { List<WebElement> Hotellist =
	 * driver.findElements(hotels); System.out.println("Hotel count in serp is :  "
	 * + Hotellist.size()); js = (JavascriptExecutor) driver;
	 * 
	 * js.executeScript("arguments[0].scrollIntoView(true);", Hotellist.get(0));
	 * js.executeScript("arguments[0].click();", Hotellist.get(0));
	 * Thread.sleep(5000); System.out.println(driver.getCurrentUrl());
	 * 
	 * return new FodPage(); }
	 */
	public FodPage selectHotel() throws Exception {
		CommonUtilityManager.clickOnFirstListElement(hotels);
		log.info("***** User Selects the Hotel *****");
		CommonUtilityManager.waitFor(5000);
		System.out.println(driver.getCurrentUrl());
		return new FodPage();
	}

	public void verifySearchPageDisplay() {

		System.out.println(driver.getCurrentUrl());


		// return driver;

	}

}
