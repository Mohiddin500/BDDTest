package com.utilities;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class TestBase {

	public static WebDriver driver;
	
	 Logger log = LogManager.getLogger(TestBase.class);
	String browsername;

	public void launchHomePage() {
		
		try {
			System.out.println("Launching browser from Test base class");
			Properties prop = new Properties();
			FileInputStream fis = new FileInputStream(System.getProperty("user.dir")+"\\Configs\\Config.properties");
			prop.load(fis);
			 browsername=prop.getProperty("browser");
			if(browsername.equalsIgnoreCase("chrome")) {
				System.setProperty("webdriver.chrome.driver",
						System.getProperty("user.dir")+"\\Drivers\\chromedriver.exe");
				driver = new ChromeDriver();
				log.info("***************************chrome browser is started*************************");
			}
			else if(browsername.equalsIgnoreCase("firefox")) {
				System.setProperty("webdriver.gecko.driver",
						System.getProperty("user.dir")+"\\Drivers\\geckodriver.exe");
						driver = new FirefoxDriver();
						log.info("**************************Firefox browser is started***********************************");
			}
		driver.get(prop.getProperty("url"));
		log.info("Navigated to Teletext website" );
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}catch (Exception e) {
		System.out.println(e);
	}
	
	}

	public void closeBrowser() {
		try {
			if (driver != null)
				driver.quit();
			System.out.println("Browser  closed successfully...");
		} catch (Exception e) {
			System.out.println(e);
		}
		
		log.info("........................."+browsername+" browser is closed ..............");

	}
	

}
