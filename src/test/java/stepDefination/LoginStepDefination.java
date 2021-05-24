package stepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefination {
	WebDriver driver;
	
	@Given("^user is already on login Page$")
	public void user_already_on_login_page()
	{
		System.setProperty("webdriver.chrome.driver", "BrowserUtils/chromedriver2");
		 driver=new ChromeDriver();
		 driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.get("https://classic.crmpro.com/index.html");
		
	}
	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() {
	    
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
	}
	
	//Regular expressions that can be used without examples
	// 1. \"(.*)\"
	// 2. \"([^\"]*)\" 
	
	
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String usernm,String pass)
	{
		WebElement username=driver.findElement(By.name("username"));
		WebElement password=driver.findElement(By.name("password"));
		username.sendKeys(usernm);
		password.sendKeys(pass);
		
		
	}
	
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
	    WebElement loginBtn=driver.findElement(By.xpath("//input[@type='submit']"));
	    loginBtn.click();
	}
	
	@Then("^user is on Home page$")
	public void user_is_on_Home_page() {
		/*
		 * driver.switchTo().frame("mainpanel"); WebElement
		 * userTitle=driver.findElement(By.
		 * xpath("//td[contains(text(),'User: group automation')]")); WebElement
		 * crmIcon=driver.findElement(By.xpath("//td[contains(text(),'CRMPRO')]"));
		 * WebDriverWait wait=new WebDriverWait(driver,10);
		 * wait.until(ExpectedConditions.visibilityOf(crmIcon));
		 * 
		 * boolean b=userTitle.isDisplayed(); Assert.assertTrue(b); boolean
		 * img=crmIcon.isDisplayed(); Assert.assertTrue(img);
		 */
		String homeTitle=driver.getTitle();
		Assert.assertEquals("CRMPRO", homeTitle);
		
		
		
	}
	
	@When("^user mouse over on contact link$")
	public void user_mouse_over_on_contact_link() throws Throwable {
		
		driver.switchTo().frame("mainpanel");
		WebDriverWait wait =new WebDriverWait(driver,10); 
		WebElement contactBtn=driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"));
		wait.until(ExpectedConditions.visibilityOf(contactBtn)); Actions a=new
		Actions(driver); a.moveToElement(contactBtn).build().perform();
		
	    
	    
	    
	}

	@Then("^user clicks on new contact link$")
	public void user_clicks_on_new_contact_link() throws Throwable {
	    WebElement newContactLink=driver.findElement(By.xpath("//a[contains(text(),'New Contact')]"));
	    newContactLink.click();
	}
	
	@Then("^user enters contact details \"(.*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details(String title, String fname, String lname, String compName, String mail, String phn) throws Throwable {
		WebElement titleDropdown=driver.findElement(By.xpath("//select[@name='title']"));
		WebElement firstName=driver.findElement(By.xpath("//input[@id='first_name']"));
		WebElement lastName=driver.findElement(By.xpath("//input[@id='surname']"));
		WebElement companyName=driver.findElement(By.xpath("//input[@name='client_lookup']"));
		WebElement email=driver.findElement(By.xpath("//input[@name='email']"));
		WebElement phone=driver.findElement(By.xpath("//input[@name='phone']"));
		titleDropdown.sendKeys(title);
		firstName.sendKeys(fname);
		lastName.sendKeys(lname);
		companyName.sendKeys(compName);
		email.sendKeys(mail);
		phone.sendKeys(phn);
	}

	@Then("^user clicks on save button$")
	public void user_clicks_on_save_button() throws Throwable {
		WebElement saveBtn= driver.findElement(By.xpath("//input[@type='button'][@value='Load From Company']/following-sibling::input[@value='Save']"));
		
		saveBtn.click();
	}
	
	@Then("^verify new contact created \"([^\"]*)\"$")
	public void verify_new_contact_created(String fname) throws Throwable {
		String bfore_xpath="//span[contains(text(),'";
		String aft_xpath="')]";
		WebElement addedContact=driver.findElement(By.xpath(bfore_xpath+fname+aft_xpath));
		Boolean add=addedContact.isDisplayed();
		Assert.assertTrue(add);
	}
	
	
	
	@Then("^user closes browser$")
	public void tearDown()
	{
		driver.quit();
	}
	

}
