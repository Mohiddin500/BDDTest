//Author : Mohiddin
package pageobjects;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.testng.Assert;

import com.utilities.CommonUtilityManager;
import com.utilities.TestBase;

public class HomePage extends TestBase {

	public SerpPage serppage;


	By login_icon = By.xpath("//div[@class='login-icon pstn-abslt cursor-p tth-users-container']");
	By signin_btn = By.xpath("//*[@id='loginPopup']");
	By email_field = By.xpath("//*[@id='email']");
	By password_field = By.xpath("//*[@id='password']");
	By login_btn = By.xpath("//*[@id='quickstart-sign-in']");
	By email = By.xpath("//div[@id='login-welcome-user-name']");


	By familyholidays_section = By.xpath("//div[@class='content-middle']//div[3]");
	By familyholidays_title = By.xpath("//div[@class='content-middle']//div[3]//span[text()='Family Holidays']");

	By destination_field = By.xpath("//*[@id='searchDestination']");

	By destination_list = By.xpath("//div[@id='destination-search-panel']//ul[@id='dest-search-result']//li");

	By depart_field = By.xpath("//*[@id='searchDepart']");
	By depart_selection = By.xpath("//div[@id='departure_default_list']//span[text()='Any London']");
	By Finddeals_btn = By.xpath("//div[@id='mobile-btn-search']");
	By date_field = By.xpath("//span[@id='show-selected-date']");
	By date_selection = By.xpath("//table[@id='calendar']//tr[3]//td[4]");
	By nights_field = By.xpath("//div[@id='stay-trigger']");
	By nights_selection = By.xpath("//div[@class='nights-wrapper row']//span[text()='6 nights']");
	By guests_field = By.xpath("//div[@id='guests-trigger']");
	By guests_done_btn = By.xpath("//div[@class='row show-on-desktop']//button[text()='Done']");
	By nights_popup = By.xpath("//div[@id='onScrollPopup']//span[@class='close--icon ele-anim-spd4']");
	By signOut_link = By.xpath("//span[text()='Log out']");

	boolean flag;
	Logger log = LogManager.getLogger(HomePage.class);

	public void selectDestination() {
		try {
			driver.findElement(destination_field).clear();
			log.info("***** Destination field cleared *****");
			driver.findElement(destination_field).click();
			log.info("***** Destination field clicked *****");
			driver.findElement(destination_field).sendKeys("dubai");
			Thread.sleep(1000);
			driver.findElements(destination_list).get(0).click();
			log.info("***** Destination Selected *****");
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public void selectDeparture() {
		try {
			driver.findElement(depart_field).clear();
			log.info("***** Departure filed cleared *****");
			driver.findElement(depart_field).click();
			log.info("***** Destination filed clicked *****");
			Thread.sleep(1000);
			driver.findElement(depart_selection).click();
			log.info("***** Departure selected *****");
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	/*
	 * public void selectDate() { try { driver.findElement(date_field).click();
	 * Thread.sleep(3000); js = (JavascriptExecutor) driver;
	 * js.executeScript("arguments[0].scrollIntoView(true);",
	 * driver.findElement(date_selection));
	 * js.executeScript("arguments[0].click();",
	 * driver.findElement(date_selection)); Thread.sleep(4000); } catch (Exception
	 * e) { System.out.println(e.getMessage()); } }
	 */
	public void selectDate() {
		try {
			driver.findElement(date_field).click();
			log.info("***** Selected Calendar *****");
			CommonUtilityManager.waitFor(3000);
			CommonUtilityManager.jsScrollIntoViewOnwebElement(date_selection);
			CommonUtilityManager.jsClickonWebElement(date_selection);
			log.info("***** Selected Date *****");
			CommonUtilityManager.waitFor(3000);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	/*
	 * public void selectNights() { try {
	 * 
	 * js = (JavascriptExecutor) driver; js.executeScript("arguments[0].click();",
	 * driver.findElement(nights_field));
	 * js.executeScript("arguments[0].scrollIntoView(true);",
	 * driver.findElement(nights_selection)); if
	 * (driver.findElement(By.xpath("//div[@id='onScrollPopup']")).isDisplayed()) {
	 * 
	 * Thread.sleep(2000); js.executeScript("arguments[0].click();", driver
	 * .findElement(By.
	 * xpath("//div[@id='onScrollPopup']//span[@class='close--icon ele-anim-spd4']")
	 * )); }
	 * 
	 * Thread.sleep(2000); js.executeScript("arguments[0].click();",
	 * driver.findElement(nights_selection)); Thread.sleep(1000); } catch (Exception
	 * e) { System.out.println(e); } }
	 */
	public void selectNights() {
		try {
			CommonUtilityManager.jsScrollIntoViewOnwebElement(nights_field);
			CommonUtilityManager.jsClickonWebElement(nights_selection);
			if (driver.findElement(By.xpath("//div[@id='onScrollPopup']")).isDisplayed()) {
				CommonUtilityManager.waitFor(3000);
				CommonUtilityManager.jsClickonWebElement(nights_popup);
			}
			CommonUtilityManager.waitFor(2000);
			CommonUtilityManager.jsClickonWebElement(nights_selection);
			CommonUtilityManager.waitFor(1000);
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	/*
	 * public void selectGuests() { try {
	 * 
	 * js = (JavascriptExecutor) driver;
	 * js.executeScript("arguments[0].scrollIntoView(true);",
	 * driver.findElement(guests_field)); js.executeScript("arguments[0].click();",
	 * driver.findElement(guests_field)); js.executeScript("arguments[0].click();",
	 * driver.findElement(guests_done_btn)); Thread.sleep(3000); } catch (Exception
	 * e) { System.out.println(e); } }
	 */
	public void selectGuests() {
		try {
			CommonUtilityManager.jsScrollIntoViewOnwebElement(guests_field);
			CommonUtilityManager.jsClickonWebElement(guests_field);
			log.info("***** Selected Number of Guests *****");
			CommonUtilityManager.jsClickonWebElement(guests_done_btn);
			CommonUtilityManager.waitFor(3000);
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	/*
	 * public SerpPage clickFindDealsButton() {
	 * 
	 * try {
	 * 
	 * WebElement finddeals = driver.findElement(Finddeals_btn); js =
	 * (JavascriptExecutor) driver;
	 * js.executeScript("arguments[0].scrollIntoView(true);", finddeals);
	 * js.executeScript("arguments[0].click();", finddeals); Thread.sleep(3000); }
	 * catch (Exception e) { System.out.println(e); } return new SerpPage();
	 * 
	 * }
	 */
	public SerpPage clickFindDealsButton() {

		try {

			CommonUtilityManager.jsScrollIntoViewOnwebElement(Finddeals_btn);
			CommonUtilityManager.jsClickonWebElement(Finddeals_btn);
			log.info("***** Clicked on Find Deals Button *****");
			CommonUtilityManager.waitFor(3000);
			log.info("***** Waited for 3 sec after selected find deals button *****");
		} catch (Exception e) {
			System.out.println(e);
		}
		return new SerpPage();

	}

	/*
	 * public boolean familySectionDisplay() {
	 * 
	 * WebElement familysection = driver.findElement(familyholidays_section); js =
	 * (JavascriptExecutor) driver;
	 * js.executeScript("arguments[0].scrollIntoView(true);", familysection); if
	 * (familysection.isDisplayed()) {
	 * System.out.println("The title of section is : " +
	 * driver.findElement(familyholidays_title).getText()); return true; }
	 * 
	 * return false; }
	 */
	public void familySectionDisplay() {
		CommonUtilityManager.jsScrollIntoViewOnwebElement(familyholidays_section);
		flag= CommonUtilityManager.isWebElementDisplayed(familyholidays_section);
		log.info("***** Family section is displayed *****");
		Assert.assertTrue(flag, "Family Holidays Section is not displayed");
	}

	public String getTitle() {
		log.info("***** Captured Title *****");
		return driver.getTitle();
		
	}

	public void clickSignin() {
		driver.findElement(login_icon).click();
		log.info("***** User clicked on Login icon *****");
		driver.findElement(signin_btn).click();
		log.info("***** User selected signin button *****");
	}

	public void enterEmail() {
		driver.findElement(email_field).sendKeys("mogdum@gmail.com");
		log.info("***** User entered Mail *****");
	}

	public void enterPassword() {
		try {
			driver.findElement(password_field).sendKeys("Ruhee@123");
			log.info("***** User entered password *****");
			Thread.sleep(1000);
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	public void verifyLoginEmail() {
		try {
			driver.findElement(login_icon).click();
			log.info("***** User click on login icon *****");
			Thread.sleep(3000);
			System.out.println("Login user email ID  is  : " + driver.findElement(email).getText());
			log.info("***** user captured the email *****");
		} catch (Exception e) {
			System.out.println(e);
		}

	}

	/*
	 * public void clickLoginButton() { try {
	 * 
	 * WebElement loginbutton = driver.findElement(login_btn); js =
	 * (JavascriptExecutor) driver;
	 * js.executeScript("arguments[0].scrollIntoView(true);", loginbutton);
	 * js.executeScript("arguments[0].click();", loginbutton); Thread.sleep(5000); }
	 * catch (Exception e) { System.out.println(e); } }
	 */
	public void clickLoginButton() {
		try {

			CommonUtilityManager.jsScrollIntoViewOnwebElement(login_btn);
			CommonUtilityManager.jsClickonWebElement(login_btn);
			log.info("***** User clicked on Login button *****");
			CommonUtilityManager.waitFor(3000);
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	/*
	 * public void signOut() { try { WebElement logoutlink =
	 * driver.findElement(signOut_link); Thread.sleep(5000); js =
	 * (JavascriptExecutor) driver; js.executeScript("arguments[0].click();",
	 * logoutlink); Thread.sleep(5000); } catch (Exception e) {
	 * System.out.println(e); } }
	 */
	public void signOut() {
		try {

			CommonUtilityManager.waitFor(3000);
			CommonUtilityManager.jsClickonWebElement(signOut_link);
			log.info("***** User clicked on Sign out  *****");
			CommonUtilityManager.waitFor(3000);
		} catch (Exception e) {
			System.out.println(e);
		}
	}

}
