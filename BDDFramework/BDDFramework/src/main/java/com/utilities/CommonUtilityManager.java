package com.utilities;

import java.util.List;
import java.util.Set;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CommonUtilityManager extends TestBase {

	public static Actions action = new Actions(driver);
	static JavascriptExecutor js;
	Logger log = LogManager.getLogger(CommonUtilityManager.class);

///JavaScriptExecutor
	public static void jsClickonWebElement(By element) {
		js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", driver.findElement(element));

	}

	public static void jsScrollIntoViewOnwebElement(By element) {

		js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView();", driver.findElement(element));

	}

	public static void jsInputintoWebElement(By element, String text) {
		js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].value='enter the value here';", driver.findElement(element));

	}

	public static void jsScrollBywebElement() {
		js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,600)");
	}

	public static WebElement explicitWaitForWebelement(By locator) {
		WebDriverWait wait = new WebDriverWait(driver, 30);
		WebElement webElement = wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
		return webElement;
	}

	/*
	 * public static void FluentWaitForWebElement(By locator) { Wait<WebDriver> wait
	 * = new FluentWait<WebDriver>(driver).withTimeout(30, TimeUnit.SECONDS)
	 * .pollingEvery(5, TimeUnit.SECONDS).ignoring(NoSuchElementException.class); }
	 */

	public static void waitFor(int n) throws Exception {
		Thread.sleep(n);
	}

	/// findWebElement Methods
	public static void clickonWebElement(By element) {
		driver.findElement(element).click();
	}

	public static void senKeysIntoWebElement(By element, String text) {
		driver.findElement(element).sendKeys(text);
	}

	public static WebElement findingWebElement(By element) {
		return driver.findElement(element);
	}

	public static List<WebElement> findingWebelements(By element) {
		List<WebElement> elements = driver.findElements(element);
		/*
		 * for (WebElement ele : elements) { if (ele.getText().trim().equals(text)) {
		 * 
		 * ele.click(); break; } }
		 */
		return elements;
	}

	public static void clickOnListElements(By element, String text) {
		List<WebElement> elements = driver.findElements(element);

		for (WebElement ele : elements) {
			if (ele.getText().trim().equals(text)) {

				ele.click();
				break;
			}
		}

	}

	public static void clickOnFirstListElement(By element) {
		List<WebElement> elements = driver.findElements(element);

		elements.get(0).click();

	}

	////// Alerts
	public static void dismissAlert() {

		driver.switchTo().alert().dismiss();
	}

	public static void acceptAlert() {
		driver.switchTo().alert().accept();
	}

	///// Actions

	public static void mouseOverOntoWebElement(By element) {
		action.moveToElement(driver.findElement(element)).build().perform();
	}

	public static void mouseClickOnWebelement(By element) {
		action.moveToElement(driver.findElement(element)).click().build().perform();
	}

	public static void mouseRightClickOnWebelement(By element) {
		action.moveToElement(driver.findElement(element)).contextClick(driver.findElement(element)).build().perform();
	}

	public static void mouseDoubleClickOnwebelement(By element) {
		action.moveToElement(driver.findElement(element)).doubleClick(driver.findElement(element)).build().perform();
	}

	public static void mouseDragAndDrop(By From, By To) {
		action.dragAndDrop(driver.findElement(From), driver.findElement(To)).build().perform();
	}

	/*
	 * public static void KeyBoardArrowDown(By element) {
	 * action.keyDown(driver.findElement(element),
	 * Keys.ARROW_DOWN).build().perform();
	 * 
	 * 
	 * }
	 * 
	 * public static void KeyBoardArrowUp(By element) {
	 * action.keyUp(driver.findElement(element), Keys.ARROW_UP).build().perform(); }
	 */

	/*
	 * public static void KeyBoardInputValue() {
	 * action.sendKeys(Keys.values()).build().perform(); action.sendKeys(target,
	 * keys) }
	 */

	public static void keyBoardClickEnterButton() {
		action.sendKeys(Keys.ENTER).build().perform();
	}

	public static void getnewWindowHandle() throws Exception {
		String defaultWindow = driver.getWindowHandle();

		System.out.println("Default window name is- " + defaultWindow);

		Thread.sleep(3000);

		Set<String> childWindows = driver.getWindowHandles();

		for (String child : childWindows) {

			if (!child.equalsIgnoreCase(defaultWindow)) {
				driver.switchTo().window(child);
				System.out.println("Child windows- " + child);
			} else {
				System.out.println("There are no child windows");
			}

		}
	}

	public static boolean isWebElementDisplayed(By locator) {

		return (driver.findElement(locator).isDisplayed()) ? true : false;

	}
}
