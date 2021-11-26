var { Given, Then, When } = require('cucumber');
var { browser ,by} = require('protractor');
var propertiesReader = require('properties-reader');
var properties = propertiesReader('PropertyFile/ConfigParam.properties');
var chai = require('chai');
var EC = browser.ExpectedConditions;
var expect = chai.expect
import { LogIn } from "../../PageObjects/DuProjectCreation"
var objLogin = new LogIn();


import { configure, getLogger } from "log4js";
const logger = getLogger();
configure({
    appenders: { Error: { type: "file", filename: "logs/logs.log" } },
    categories: { default: { appenders: ["Error"], level: "all" } }
});

Given('{string} click on create a new project', async function (userRole) {
    try {
        await objLogin.createNewProjectClick();
    } catch (error) {
        logger.error(userRole + " is unable create a new project");
        await console.log(error);
        throw userRole + " is unable create a new project"
    }
});

Given('{string} enters the project name as {string}', async function (userRole, projectName) {
    try {
        await objLogin.enterProjectName(projectName);
      
       // await objLogin.clickOnGeneralSavebtn();

    } catch (error) {
        logger.error(userRole + " is unable enters the project name");
        await console.log(error);
        throw userRole + " is unable to enter the project name"
    }
});

Given('{string} enters the project description as {string}', async function (userRole, description) {
    try {
      
        await objLogin.enterProjectDescriptionName(description);
    
    } catch (error) {
        logger.error(userRole + " is unable to enter project description");
        await console.log(error);
        throw userRole + " is unable to enter project description"
    }
});
Given('{string} clicks on save button', async function (userRole) {
    try {
        await objLogin.clickOnGeneralSavebtn();
    } catch (error) {
        logger.error(userRole + " is unable to clicks on save button");
        await console.log(error);
        throw userRole + " is unable to clicks on save button"
    }
});

Given('{string} click on select type and Select Locale as US select Domain as Finance select Document Type as Invoice and click on save button', async function (userRole) {
    try {
    
     await browser.element(by.xpath("//span[text()='SELECT TYPE']")).click()
     await objLogin.selectTypeClick();
    } catch (error) {
        logger.error(userRole + " is unable to enter project name and description");
        await console.log(error);
        throw userRole + " is unable to enter project name and description"
    }
});


Given('{string} clic on select type and Select Locale as US select Domain as Finance select Document Type as Invoice and click on save button', async function (userRole) {
    try {
        await browser.wait(EC.visibilityOf(objLogin.selectTypeMenuClick));
        await objLogin.selectTypeMenuClick.click();
        await browser.wait(EC.visibilityOf(objLogin.selectLocateUs));
        await objLogin.selectTypeClick();
    } catch (error) {
        logger.error(userRole + " is unable to enter project name and description");
        await console.log(error);
        throw userRole + " is unable to enter project name and description"
    }
});


Given('{string} click on select classfiers and click on save button', async function (userRole) {
    try {
        await objLogin.selectClassifiersClick();
    } catch (error) {
        logger.error(userRole + " is unable select classfiers");
        await console.log(error);
        throw userRole + " is unable select classfiers"
    }
});
Given('{string} click on select extraction pipeline select Smart Extract as Smart Extract and click on save button', async function (userRole) {
    try {
        await objLogin.selectExtractionPipeLineClick();
    } catch (error) {
        logger.error(userRole + " is unable to select extraction pipeline");
        await console.log(error);
        throw userRole + " is unable to select extraction pipeline"
    }
});

Given('{string} click on OCR CONFIGURATIONS select Tesseract and click on save button', async function (userRole) {
    try {
        await objLogin.ocrConfigurationClick();
    } catch (error) {
        logger.error(userRole + " is unable to select OCR CONFIGURATIONS");
        await console.log(error);
        throw userRole + " is unable to select OCR CONFIGURATIONS"
    }
});

Given('{string} select preprocessors as Barcode Page Split and Orientation Correction and click on save button', async function (userRole) {
    try {
        await objLogin.ocrConfigurationClick();
    } catch (error) {
        logger.error(userRole + " is unable to select OCR CONFIGURATIONS");
        await console.log(error);
        throw userRole + " is unable to select OCR CONFIGURATIONS"
    }
});

Given('{string} click on Add all button from extraction info', async function (userRole) {
    try {
        await objLogin.addAll();
    } catch (error) {
        logger.error(userRole + " is unable click on Add all button");
        await console.log(error);
        throw userRole + " is unable click on Add all button"
    }
});

Given('{string} verify the fields to be extracted are available as {string} and click on save', async function (userRole, field) {
    try {
        await expect(await objLogin.fieldsAvailable()).to.equal(field);
        await objLogin.fieldsAvailable();
        await objLogin.extractionInfoSaveBtn.click();
    } catch (error) {
        logger.error(userRole + " is unable verify the fields");
        await console.log(error);
        throw userRole + " is unable verify the fields"
    }
});

Given('{string} click on save in Output Configurartions', async function (userRole) {
    try {
        await objLogin.outputConfigSaveBtn.click();
    } catch (error) {
        logger.error(userRole + " is unable click on save in Output Configurartions");
        await console.log(error);
        throw userRole + " is unable click on save in Output Configurartions"
    }
});

Given('{string} verify the home page of DU application as {string}', async function (userRole, projectName) {
    try {
        await expect(await objLogin.fieldsAvailable()).to.equal(projectName);
    } catch (error) {
        logger.error(userRole + " is unable to verify the home page of DU application");
        await console.log(error);
        throw userRole + " is unable to verify the home page of DU application"
    }
});