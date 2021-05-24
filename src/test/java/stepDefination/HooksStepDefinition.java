package stepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class HooksStepDefinition {
	WebDriver driver;
	@Before// These are global hooks
	//if we have multiple before and after conditions, they can be ordered by using syntax
	//@Before(order=0)
	//@Before(order=1)
	//@After(order=0)
	//@After(order=1) and so on..
	public void setUp()
	{
		System.out.println("Before");
		System.setProperty("webdriver.chrome.driver", "BrowserUtils/chromedriver2");
		 driver=new ChromeDriver();
		 driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.get("https://classic.crmpro.com/index.html");
			WebElement username=driver.findElement(By.name("username"));
			WebElement password=driver.findElement(By.name("password"));
			username.sendKeys("groupautomation");
			password.sendKeys("Test@12345");
			WebElement loginBtn=driver.findElement(By.xpath("//input[@type='submit']"));
		    loginBtn.click();
	}
	
	@Before("@Second")
	//This is a local tag only applicable for the scenario tagged
	public void verifyHomeTitle()
	{
		System.out.println("Verification before second scenario");
		String homeTitle=driver.getTitle();
		Assert.assertEquals("CRMPRO", homeTitle);
	}
	
	
	@After // These are global hooks
	public void tearDown()
	{
		System.out.println("After Close browser");
		driver.quit();
	}
	
	@Given("^user is present on new deal page$")
	public void user_is_present_on_new_deal_page() throws Throwable {
	    
		System.out.println("New Deal Page");
		driver.switchTo().frame("mainpanel");
		WebDriverWait wait =new WebDriverWait(driver,10); 
		WebElement dealBtn=driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
		wait.until(ExpectedConditions.visibilityOf(dealBtn)); 
		Actions a=new Actions(driver); 
		a.moveToElement(dealBtn).build().perform();
		WebElement newDealLink=driver.findElement(By.xpath("//a[contains(text(),'New Deal')]"));
		newDealLink.click();
		
	}

	
	@When("^user fills the deal form \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_fills_the_deal_form_and_and_and(String DealName, String Amount, String Probability, String Commission) throws Throwable {
		System.out.println("fill deal form");
		WebElement title=driver.findElement(By.xpath("//input[@id='title']"));
		WebElement amount=driver.findElement(By.xpath("//input[@id='amount']")); 
		WebElement probability=driver.findElement(By.xpath("//input[@id='probability']"));
		WebElement commission=driver.findElement(By.xpath("//input[@id='commission']"));
		
		title.sendKeys(DealName);
		amount.sendKeys(Amount);
		probability.sendKeys(Probability);
		commission.sendKeys(Commission);
		
		WebElement saveBtn=driver.findElement(By.xpath("//input[@value='Save and Create Another']//parent::td/input[@value='Save']"));
	    saveBtn.click();
		
	}
	

	@Then("^deal is created \"([^\"]*)\"$")
	public void deal_is_created(String DealName) throws Throwable {
		System.out.println("Verify deal is created");
		String beforeXpath="//td[contains(text(),'";
		String afterXpath="')][contains(text(),'Deal')]";
		
	    WebElement dealVerify=driver.findElement(By.xpath(beforeXpath+DealName+afterXpath));
		boolean b=dealVerify.isDisplayed();
		Assert.assertTrue(b);
		
	    
	}
	
	
	//Scenario 2
	
	@Given("^user is on HomePage$")
	public void user_is_on_HomePage() throws Throwable {
		
		driver.switchTo().frame("mainpanel");
		WebDriverWait wait =new WebDriverWait(driver,10); 
		WebElement dealBtn=driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
		wait.until(ExpectedConditions.visibilityOf(dealBtn)); 
	    
	}

	@Then("^user clicks on logoutButton$")
	public void user_clicks_on_logoutButton() throws Throwable {
	    WebElement logoutBtn=driver.findElement(By.xpath("//a[@class='topnavlink']/i[@class='fa fa-sign-out icon-2x']"));
	    logoutBtn.click();
	}

	@Then("^verify logout page title matches$")
	public void verify_logout_page_title_matches() throws Throwable {
		
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Free CRM - CRM software for customer relationship management, sales, and support.", title);
	    
	}
	
	


}
