import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import { ProjectEdit } from "../../PageObjects/ProjectEdit_Pom"
import chai from "chai"
var EC = browser.ExpectedConditions
var expect = chai.expect;
var objProjectEdit = new ProjectEdit()


Given('{string} clicks on three dots from selected project', async function (userRole) {
    try {
        await objProjectEdit.threeDotClick();
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to click on three dots from selected project"
    }
});
Given('{string} clicks on edit Project', async function (userRole) {

    try {
        await objProjectEdit.editProjectClick();
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to click on edit Project"
    }
});

Given('{string} clicks on update button', async function (userRole) {
    try {
        await browser.wait(EC.presenceOf(objProjectEdit.btnUpdate), 100000)
        await browser.wait(EC.elementToBeClickable(objProjectEdit.btnUpdate), 100000)
        await objProjectEdit.updateButtonClick();
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to click on update button"
    }
});

When('{string} clicks on {string} option', async function (userRole, projectIcons) {

    try {
        await objProjectEdit.projectIcons(projectIcons)
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to click on " + projectIcons + " option"
    }
});

When('{string} clicks on extracted fields configuration', async function (userRole) {
    try {
        await browser.wait(EC.visibilityOf(objProjectEdit.invoice), 100000)
        await objProjectEdit.extractedFieldsConfigurationClick.click();
        //  await element(by.xpath("//span[contains(text(),'EXTRACTED FIELDS CONFIGURATION')]")).click();
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to click on project configuration option"
    }
});

When('{string} clicks on the field invoice number', async function (userRole) {
    try {
        await objProjectEdit.invoiceNumberDropdown.click();
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to clicks on the field invoice number"
    }
});
When('{string} enters validation expression as {string}', async function (userRole, Expression) {
    try {
        await browser.wait(EC.visibilityOf(objProjectEdit.invoice), 100000)
        await objProjectEdit.invoiceValidationExpression.sendKeys(Expression); 
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to enters validation expression"
    }
});
When('{string} enters validation message as {string}', async function (userRole, Message) {
    try {
        await browser.wait(EC.visibilityOf(objProjectEdit.invoice), 100000)
        await objProjectEdit.invoiceValidationMessage.clear();
        await objProjectEdit.invoiceValidationMessage.sendKeys(Message);

    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to enters validation message as"
    }
});

When('{string} clicks on the field quantity', async function (userRole) {
    try {
        await objProjectEdit.quantityDrodown.click();
        // await browser.wait(EC.visibilityOf(objProjectEdit.quantityDrodown), 100000)
        // await browser.sleep(3000)
        // await objProjectEdit.quantityValidationExpression.sendKeys(quantityExpression);
        // await browser.sleep(3000)
        // await objProjectEdit.quantityValidationMessage.sendKeys(quantityMessage);

    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to click on the field quantity and enter validation expression and message"
    }
});

When('{string} enters field quantity validation expression as {string}', async function (userRole, quantityExpression) {
    try {
       
        await browser.wait(EC.visibilityOf(objProjectEdit.quantityDrodown), 100000)
        await browser.sleep(3000)
        await objProjectEdit.quantityValidationExpression.clear();
        await objProjectEdit.quantityValidationExpression.sendKeys(quantityExpression);
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to enters field quantity validation expression"
    }
});

When('{string} enters field quantity as {string}', async function (userRole, quantityMessage) {
    try {
       
        await browser.wait(EC.visibilityOf(objProjectEdit.quantityDrodown), 100000)
        await browser.sleep(3000)
        await objProjectEdit.quantityValidationExpression.sendKeys(quantityMessage)
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to enters field quantity message"
    }
});


When('{string} clicks on save button in project configuration', async function (userRole) {
    try {
       await browser.sleep(2000)
       var myElement = objProjectEdit.projectConfigurationSaveBtn
       await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
        await objProjectEdit.projectConfigurationSaveBtn.click();
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to click on save button"
    }
});



When('{string} edits source file location as {string}', async function (userRole, Location) {
    try {
        // await objProjectEdit.sourceFileLocationTxtBox.click();
        await objProjectEdit.sourceFileLocationTxtBox.clear();
        await objProjectEdit.sourceFileLocationTxtBox.sendKeys(Location)
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to edit source file location"
    }
});

When('{string} clicks on save button in DU configuration', async function (userRole) {
    try {
        var myElement = objProjectEdit.extractedFieldConfigurationSaveBtn

    await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
        await objProjectEdit.extractedFieldConfigurationSaveBtn.click();
     

    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to click on save button"
    }
});