package stepDefination;

import java.util.List;
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

public class DealsStepDefinition {
	
WebDriver driver;


@Given("^user is on login Page$")
public void user_is_on_login_Page() throws Throwable {
	System.setProperty("webdriver.chrome.driver", "BrowserUtils/chromedriver2");
	 driver=new ChromeDriver();
	 driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://classic.crmpro.com/index.html");
	
}
	
	
	
	@When("^title of login page Free CRM$")
	public void title_of_login_page_Free_CRM() {
	    
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
	}
	
	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) throws Throwable {
		WebElement username=driver.findElement(By.name("username"));
		WebElement password=driver.findElement(By.name("password"));
		List<List<String>> data=credentials.raw();
		username.sendKeys(data.get(0).get(0));
		password.sendKeys(data.get(0).get(1));
		
	}
	@Then("^user clicks login button$")
	public void user_clicks_login_button() {
	    WebElement loginBtn=driver.findElement(By.xpath("//input[@type='submit']"));
	    loginBtn.click();
	}
	
	@Then("^user on Home page$")
	public void user_on_Home_page() {
		
		String homeTitle=driver.getTitle();
		Assert.assertEquals("CRMPRO", homeTitle);
		
		
		
	}
	@Then("^user mouse over on deal link$")
	public void user_mouse_over_on_deal_link() throws Throwable {
		driver.switchTo().frame("mainpanel");
		WebDriverWait wait =new WebDriverWait(driver,10); 
		WebElement dealBtn=driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
		wait.until(ExpectedConditions.visibilityOf(dealBtn)); 
		Actions a=new Actions(driver); 
		a.moveToElement(dealBtn).build().perform();
		
	    
	}
	@Then("^user clicks on new deal link$")
	public void user_clicks_on_new_deal_link() throws Throwable {
		WebElement newDealLink=driver.findElement(By.xpath("//a[contains(text(),'New Deal')]"));
		newDealLink.click();
	}
	@Then("^user enters deal details$")
	public void user_enters_deal_details(DataTable dealData) throws Throwable {
	   
		List<List<String>> dealValues=dealData.raw();
		WebElement title=driver.findElement(By.xpath("//input[@id='title']"));
		WebElement amount=driver.findElement(By.xpath("//input[@id='amount']")); 
		WebElement probability=driver.findElement(By.xpath("//input[@id='probability']"));
		WebElement commission=driver.findElement(By.xpath("//input[@id='commission']"));
		
		title.sendKeys(dealValues.get(0).get(0));
		amount.sendKeys(dealValues.get(0).get(1));
		probability.sendKeys(dealValues.get(0).get(2));
		commission.sendKeys(dealValues.get(0).get(3));
		
	}
	@Then("^user clicks on save deal button$")
	public void user_clicks_on_save_deal_button() throws Throwable {
	    WebElement saveBtn=driver.findElement(By.xpath("//input[@value='Save and Create Another']//parent::td/input[@value='Save']"));
	    saveBtn.click();
	}	
	
	@Then("^verify new deal created$")
	public void verify_new_deal_created(DataTable fname) throws Throwable {
		List<List<String>> verify=fname.raw();
		String beforeXpath="//td[contains(text(),'";
		String dealName=verify.get(0).get(0);
		String afterXpath="')][contains(text(),'Deal')]";
		
	    WebElement dealVerify=driver.findElement(By.xpath(beforeXpath+dealName+afterXpath));
		boolean b=dealVerify.isDisplayed();
		Assert.assertTrue(b);
		
	}
	@Then("^user closed browser$")
	public void tearDown()
	{
		driver.quit();
	}	
 
}
