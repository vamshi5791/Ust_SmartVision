import { ElementFinder, element, by, promise, browser } from "protractor";
var EC = browser.ExpectedConditions;
var fs = require('fs');
var Actual_Title, Actual_user,Actual_Text,homepage;

export class LogIn {
    txtUserName = element(by.xpath("//input[@id='username']"))
    txtPassword = element(by.xpath("//input[@id='password']"))
    btnClickOnSignIn = element(by.xpath("//input[@id='kc-login']"))
    validUserText = element(by.xpath("//div[@class='d-flex  justify-content-start align-items-center user-details']"))
    allprojectsTitle = element(by.xpath(" //div[normalize-space()='All Projects']"))
    logOutClick = element(by.xpath("//em[@class='fa fa-angle-down color-blue']"))
    createNewProjectBtn=element(by.xpath("//span[@class='smo-button-text smo-clickable d-flex align-items-center ng-star-inserted']"))
    projectNameTextBox=element(by.xpath("//input[@placeholder='Project Name']"))
    projectDescriptionTextBox=element(by.xpath("//textarea[@placeholder='Project Description']"))
    generalSaveBtn=element(by.xpath("//div[@id='smo-accordiontab-0-content']//span[@class='smo-button-text smo-clickable d-flex align-items-center ng-star-inserted'][normalize-space()='Save']"))
    selectTypeMenuClick=element(by.xpath("//span[text()='SELECT TYPE']"))
    selectLocateUs=element(by.xpath("//label[.='US']"))
    selectDomainFinance=element(by.xpath("//label[.='FINANCE']"))
    selectDocumentTypeInvoice=element(by.xpath("//label[.='INVOICE']"))
    selectDocumentTypeADDENDUM=element(by.xpath("//label[.='ADDENDUM']"))
    selectTypeSaveBtn=element(by.xpath("//div[@id='smo-accordiontab-1-content']//span[@class='smo-button-text smo-clickable d-flex align-items-center ng-star-inserted'][normalize-space()='Save']"))
    selectClassifiersMenuClick=element(by.xpath("//span[.='SELECT CLASSIFIERS']"))
    selectClassifiersSaveBtn=element(by.xpath("//div[@class='d-flex align-items-center justify-content-end classifier-save-btn']//span[@class='smo-button-text smo-clickable d-flex align-items-center ng-star-inserted'][normalize-space()='Save']"))
    selectExtractionPipeLineMenuClick=element(by.xpath("//span[.='SELECT EXTRACTION PIPELINE']"))
    smartExtractClick=element(by.xpath("//label[.='SMART EXTRACT']"))
    selectExtractionPipeLinesaveBtn=element(by.xpath("//div[@class='smo-accordion-content-wrapper p-0 ng-trigger ng-trigger-tabContent']//span[@class='smo-button-text smo-clickable d-flex align-items-center ng-star-inserted']"))
    ocrConfigurationMenuClick=element(by.xpath("//span[.='OCR CONFIGURATIONS']"))
    tessractClick=element(by.xpath("//label[.='TESSERACT']"))
    ocrConfigurationSaveBtn=element(by.xpath("//div[@class='smo-accordion-content-wrapper p-0 ng-trigger ng-trigger-tabContent']//span[@class='smo-button-text smo-clickable d-flex align-items-center ng-star-inserted']"))
    barCodePageSplitClick=element(by.xpath("//label[.='Barcode Page Split']"))
    orientationCorrectionClick=element(by.xpath("//label[.='Orientation Correction']"))
    selectPreProcessorsSaveBtn=element(by.xpath("//span[@class='smo-button-text smo-clickable d-flex align-items-center ng-star-inserted']"))
    addAllBtn=element(by.xpath("//div[@class='d-flex ']//span[@class='smo-button-text smo-clickable d-flex align-items-center ng-star-inserted']"))
    companyNameText=element(by.xpath("//div[normalize-space()='Company Name']"))
    extractionInfoSaveBtn=element(by.xpath("//div[@class='right-bottom-cont color-blue d-flex align-items-center justify-content-around']/div[2]//span[@class='smo-button-text smo-clickable d-flex align-items-center ng-star-inserted']"))
    outputConfigSaveBtn=element(by.xpath("//div[@class='smo-accordion-content-wrapper p-0 ng-trigger ng-trigger-tabContent']//span[@class='smo-button-text smo-clickable d-flex align-items-center ng-star-inserted']"))
    DUhomepageText=element(by.xpath("//div[@class='profile-name profile-name-hover back-icon-text']"))

    async enterUserName(UserName: string) {
        await this.txtUserName.sendKeys(UserName)
        
    }
    async enterPassword(Password: string) {

        await this.txtPassword.sendKeys(Password)

    }
    async clickOnLogInButton() {

        await this.btnClickOnSignIn.click();
    }

    async pageTitle() {

        await browser.wait(EC.visibilityOf(this.allprojectsTitle), 100000);

    }
    async validuser() {
        await this.validUserText.getText().then(async function (validuser) {
            Actual_user = validuser;
        })
        return Actual_user

    }

    

    async createNewProjectClick(){
        await this.createNewProjectBtn.click();
    }
    async enterProjectName(projectName: string){
        await this.projectNameTextBox.sendKeys(projectName)
    }
    async enterProjectDescriptionName(description: string){
        await this.projectDescriptionTextBox.sendKeys(description)
    }
    async clickOnGeneralSavebtn(){
        await this.generalSaveBtn.click();
    }

    async selectTypeClick(){
        
        await this.selectLocateUs.click();
        await this.selectDomainFinance.click();
        await this.selectDocumentTypeInvoice.click();
        await this.selectDocumentTypeADDENDUM.click();
        await this.selectTypeSaveBtn.click();
    }
    async selectClassifiersClick(){
        await this.selectClassifiersMenuClick.click();
        await this.selectClassifiersSaveBtn.click();
    }
    async selectExtractionPipeLineClick(){
        await this.selectExtractionPipeLineMenuClick.click();
        await this.selectExtractionPipeLinesaveBtn.click();
    }

    async ocrConfigurationClick(){
        await this.ocrConfigurationMenuClick.click();
        await this.tessractClick.click();
    }

    async selectPreprocessors(){
        await this.barCodePageSplitClick.click();
        await this.orientationCorrectionClick.click();
        await this.selectPreProcessorsSaveBtn.click();
    }

    async addAll(){
        await this.addAllBtn.click();
    
    }
    async fieldsAvailable(){
        await this.companyNameText.getText().then(async function (c_name) {
            Actual_user = c_name;
        })
        return Actual_user
    }
    async DUhomepage(){
        await this.DUhomepageText.getText().then(async function (homepage_name) {
          homepage = homepage_name;
        })
        return homepage
    }

    

    




    async logOutUser() {
        await this.logOutClick.click();
    }

}
