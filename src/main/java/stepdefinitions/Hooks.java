package stepdefinitions;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.utilities.TestBase;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	Logger log = LogManager.getLogger(Hooks.class);
	
	
	@Before
	public void beforeScenario(Scenario scenario) {
		
		log.info("*************************"+scenario.getName()+" execution is started************************");
		log.info("********************************************************************************************");
		
	}
 
	
	@After
	public void afterTest(Scenario scenario) {
		try {
		if(scenario.isFailed()) {
		final byte[] screenshot=((TakesScreenshot)TestBase.driver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshot,"image/png");
		//log.info("*************************"+scenario.getName()+"  is FAILED**********************************");
		log.error("*************************"+scenario.getName()+" is  "+scenario.getStatus()+"  ************************");
		log.info("********************************************************************************************");
		}
		
		else {
			log.info("*************************"+scenario.getName()+" is  "+scenario.getStatus()+"  ************************");
			scenario.embed(((TakesScreenshot)TestBase.driver).getScreenshotAs(OutputType.BYTES),"image/png");
		}
		
		TestBase.driver.quit();
		
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		
	}

}
