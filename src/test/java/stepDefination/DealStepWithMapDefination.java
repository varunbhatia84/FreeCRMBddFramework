package stepDefination;

import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealStepWithMapDefination {
	
WebDriver driver;


@Given("^user lands on login Page$")
public void user_is_on_login_Page() throws Throwable {
	System.setProperty("webdriver.chrome.driver", "BrowserUtils/chromedriver2");
	 driver=new ChromeDriver();
	 driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://classic.crmpro.com/index.html");
	
}
	
	
	
	@When("^login page title is Free CRM$")
	public void title_of_login_page_Free_CRM() {
	    
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
	}
	
	@Then("^user enters usernames and password$")
	public void user_enters_username_and_password(DataTable credentials) throws Throwable {
		WebElement username=driver.findElement(By.name("username"));
		WebElement password=driver.findElement(By.name("password"));
		for(Map<String,String> data : credentials.asMaps(String.class, String.class))
		{	
		username.sendKeys(data.get("username"));
		password.sendKeys(data.get("password"));
		}
		
	}
	@Then("^user clicked login button$")
	public void user_clicks_login_button() {
	    WebElement loginBtn=driver.findElement(By.xpath("//input[@type='submit']"));
	    loginBtn.click();
	}
	
	@Then("^user lands on Home page$")
	public void user_on_Home_page() {
		
		String homeTitle=driver.getTitle();
		Assert.assertEquals("CRMPRO", homeTitle);
		
		
		
	}
	@Then("^user mouse overs on deal link$")
	public void user_mouse_over_on_deal_link() throws Throwable {
		driver.switchTo().frame("mainpanel");
		WebDriverWait wait =new WebDriverWait(driver,10); 
		WebElement dealBtn=driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
		wait.until(ExpectedConditions.visibilityOf(dealBtn)); 
		Actions a=new Actions(driver); 
		a.moveToElement(dealBtn).build().perform();
		
	    
	}
	@Then("^user clicks new deal creation link$")
	public void user_clicks_on_new_deal_link() throws Throwable {
		WebElement newDealLink=driver.findElement(By.xpath("//a[contains(text(),'New Deal')]"));
		newDealLink.click();
	}
	@Then("^user enters new deal details and saves it$")
	public void user_enters_deal_details(DataTable dealData) throws Throwable {
	   
		
		
		for(Map<String,String> data : dealData.asMaps(String.class, String.class))
		{	
			WebElement title=driver.findElement(By.xpath("//input[@id='title']"));
			WebElement amount=driver.findElement(By.xpath("//input[@id='amount']")); 
			WebElement probability=driver.findElement(By.xpath("//input[@id='probability']"));
			WebElement commission=driver.findElement(By.xpath("//input[@id='commission']"));
			
			title.sendKeys(data.get("DealName"));
			amount.sendKeys(data.get("Amount"));
			probability.sendKeys(data.get("Probability"));
			commission.sendKeys(data.get("Commission"));
			
			WebElement saveBtn=driver.findElement(By.xpath("//input[@value='Save and Create Another']//parent::td/input[@value='Save']"));
		    saveBtn.click();
		    
		    //verify New deal
		    String beforeXpath="//td[contains(text(),'";
			String afterXpath="')][contains(text(),'Deal')]";
			String dealName=data.get("DealName");
		    WebElement dealVerify=driver.findElement(By.xpath(beforeXpath+dealName+afterXpath));
			boolean b=dealVerify.isDisplayed();
			Assert.assertTrue(b);
			
			//Hover mouse to display new deal
			WebDriverWait wait =new WebDriverWait(driver,10); 
			WebElement dealBtn=driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
			wait.until(ExpectedConditions.visibilityOf(dealBtn)); 
			Actions a=new Actions(driver); 
			a.moveToElement(dealBtn).build().perform();
			//Click on new deals again
			WebElement newDealLink=driver.findElement(By.xpath("//a[contains(text(),'New Deal')]"));
			newDealLink.click();
			
		    
		}
		
		
		
	}
		
		
	@Then("^user quits browser$")
	public void tearDown()
	{
		driver.quit();
	}	
 
}
