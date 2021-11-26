import { Given, When, Then } from "cucumber"
import { browser, element,by } from "protractor"
import { CreateProject } from "../../PageObjects/CreateProjectPage"
import chai from "chai"
import { btnProjectConfiguration } from "../../PageObjects/ProjectConfigurationPage"
import { ProjectEdit } from "../../PageObjects/ProjectEdit_Pom"
var EC = browser.ExpectedConditions
var expect = chai.expect;
var objCreateProject = new CreateProject()
let objProjectConfiguration = new btnProjectConfiguration()
var objProjectEdit = new ProjectEdit()

When('{string} clicks on Create New Project Button', async function (userRole) {
    try {
        await objCreateProject.btnCreateNewProject.click();
    } catch (error) {
        await console.log(error);
        throw userRole + " is not able to click on create new project button"
    }
})

Then('{string} enters the Project Name as {string}', async function (userRole, projectName) {
    try {
        await objCreateProject.projectName(projectName)
    } catch (error) {
        await console.log(error);
        throw userRole + " unable to enter the project Name"
    }
})

Then('{string} enters the Project Description as {string}', async function (userRole, projectDescription) {
    try {
        await objCreateProject.projectDescription(projectDescription)
    } catch (error) {
        await console.log(error)
        throw userRole + " unable to enter the projectDescription"
    }
})

Then('{string} clicks on Create Button', async function (userRole) {
    try {
        await browser.wait(EC.presenceOf(objCreateProject.btnCreate), 100000)
        await browser.wait(EC.elementToBeClickable(objCreateProject.btnCreate), 100000)
        //we need to wait here because page is loading so that project can't be created without waiting
        await browser.sleep(5000);
        await objCreateProject.btnCreate.click();
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to click on create button"
    }
})

Then('{string} verifies if {string} message is displayed as {string}', async function (userRole,msgDialog, toastMessage) {
    try {
        await objCreateProject.validateToastMessage(toastMessage)
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to validate the Toast Message"
    }
})

Then('{string} should navigate to project configuration page', async function (userRole) {
    try {
        await objCreateProject.btnProjectConfiguration.isDisplayed().then(async function (element) {
            await expect(element).to.be.true
        })
    } catch (error) {
        await console.log(error);
        throw userRole + " should not navigates to the project Configuration Page"
    }
})

Then('{string} verifying the Project Configuration icon is blue {string} and ticked', async function (userRole,Color) {
    try {
        await objCreateProject.btnProjectConfiguration.getCssValue('color').then(async function (actualColor) {
            await expect(actualColor).to.equal(Color)
        })
    } catch (error) {
        await console.log(error);
        throw userRole + " unable to verify the color of the icon"
    }
})

When('{string} clicks on the Project configuration icon', async function (userRole) {
    try {
        await objCreateProject.btnProjectConfiguration.click()
    } catch (error) {
        await console.log(error);
        throw userRole + " unable to click on the Project configuration icon"
    }
})

When('{string} clicks on {string} when to execute dropdown', async function (userRole, setPath) {
    try {
        
        await browser.wait(EC.presenceOf(element(by.xpath("//span[contains(.,'Document Import Configuration')]"))), 100000)
       await objProjectEdit.dropDownWhenToExecuteClick(setPath);
        // await objProjectConfiguration.drpdwnWhenToExecute.click();
       // await objProjectConfiguration.timeSelecting(Time)
   

    } catch (error) {
        await console.log(error);
        throw userRole+" unable to select the when to execute value "
    }
});
When('{string} selects when to execute time as {string}', async function (userRole, Time) {
    try {
        
        await browser.wait(EC.presenceOf(element(by.xpath("//span[contains(.,'Document Import Configuration')]"))), 100000)
        await objProjectConfiguration.timeSelecting(Time)
   

    } catch (error) {
        await console.log(error);
        throw userRole+" unable to select the when to execute value "
    }
});


When('{string} enters the FTP Username as {string}', async function (userRole, FTPUsername) {
    try {

    } catch (error) {
        await console.log(error);
        throw ""
    }
});


When('{string} enters the FTP Password as {string}', async function (userRole, FTPPassword) {
    try {

    } catch (error) {
        await console.log(error);
        throw ""
    }
});


When('{string} enters FTPHostName as {string}', async function (userRole, FTPHostName) {
    try {

    } catch (error) {
        await console.log(error);
        throw ""
    }
});