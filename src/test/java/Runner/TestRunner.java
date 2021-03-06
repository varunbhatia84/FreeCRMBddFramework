package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		//Complete path of Feature and stepDefinations package has to be given
		features="/Users/hridhaan/eclipse-workspace/FreeCRMBddFramework/src/main/java/Features/hooks.feature",
		//features defines path of feature file
		glue= {"stepDefination"},//glue defines where step definitions file is available
		format= {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
		//format is used to format contents on console and print various reporting formats e.g : HTML,JSON,XML etc.
		//XML reports gives quick description of status of each step in a scenario ,is passed ,or failed with reason
		monochrome = true,//displays console output in proper readable form(removes timestamp and other unwanted details)
		strict = true,//This fails the execution in case any undefined steps are there.
		dryRun = false //Validates if the steps have been implemented ,it does not run the code. 
					//If step definition is missing it will display in console
					//Once condition is satisfied, make the option as "false" and run.
		//tags= {"~@SmokeTest" , "~@End2End","~@RegressionTest"}
				//Provide the name of tag which based on test you want to run.E.g : @SmokeTest,@End2End,@RegressionTest
				//We can provide AND and OR condition\
				// Format for OR .E.g : tags= {"@SmokeTest , @End2End"}
				// Format for  AND .E.g : tags= {"@SmokeTest" , "@End2End"}
				//To ignore Test case : tags= {"~@SmokeTest" , "@End2End"}
		
		
		)


public class TestRunner {
	
	

}
