import { element, by, browser, protractor } from "protractor";
var EC = browser.ExpectedConditions;
import chai from "chai"
var expect = chai.expect;

export class ProjectEdit {
    btnThreeDot = element(by.xpath("//span[contains(@class,'smo smo-more-vert-24px')]"))
    btnEditProject = element(by.xpath("//span[.='Edit Project']"))
    btnUpdate = element(by.xpath("//span[@class='ng-star-inserted']//span[@class='smo-button-text smo-clickable d-flex align-items-center ng-star-inserted']"))
    projectConfiguration = element(by.xpath("//span[.='Project Configuration']"))
    DUConfiguration = element(by.xpath("//span[.='DU Configuration']"))
    invoice = element(by.xpath('//span[text()="Invoice"]'))
    extractedFieldsConfigurationClick = element(by.xpath('//span[text()="EXTRACTED FIELDS CONFIGURATION"]//following::span[contains(@class,"smo-accordion-toggle-icon ")]'))
    sourceFileLocationTxtBox = element(by.xpath('//legend[text()="Source File Location"]//following::input[contains(@class,"textInput smo-inputtext smo-input-legend")]'))
    projectConfigurationSaveBtn = element(by.xpath("//div[@id='smo-accordiontab-4-content']//span[@class='smo-button-text smo-clickable d-flex align-items-center ng-star-inserted'][normalize-space()='Save']"))
    invoiceNumberDropdown = element(by.xpath('//label[text()="Invoice Number"]//following::span[contains(@class,"smo-accordion-toggle-icon smo smo-expand-more-alt chevron-icon")]'))
    invoiceValidationExpression = element(by.xpath("//label[text()='Invoice Number']/following::input"))
    invoiceValidationMessage = element(by.xpath("(//label[text()='Invoice Number']/following::input)[2]"))
    quantityDrodown = element(by.xpath("//div[text()='Quantity']"))
    quantityValidationExpression = element(by.xpath("//div[text()='Quantity']//following::legend[text()='Validation Expression']//following::input"))
    quantityValidationMessage = element(by.xpath('//div[text()="Quantity"]//following::input[@class="smo-inputtext smo-input-legend ui-inputtext ui-corner-all ui-state-default smo-widget border-radius-du ng-pristine ng-valid ng-touched"]'))
    extractedFieldConfigurationSaveBtn = element(by.xpath("//div[@id='smo-accordiontab-2-content']//div[contains(@class,'smo-accordion-content smo-widget-content')]//div[contains(@role,'content')]//div[contains(@class,'d-flex flex-row justify-content-end mb-3')]//div//button[contains(@class,'smo-button smo-widget smo-state-default smo-button-default smo-corner-all smo-button-du smo-button-text-only')]"))



    async projectIcons(ProjectIcon: string) {

        await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="' + ProjectIcon + '"]'))), 20000)

        await element(by.xpath('//span[text()="' + ProjectIcon + '"]')).click();

    }
    async threeDotClick() {
        await this.btnThreeDot.click();
    }
    async editProjectClick() {
        await this.btnEditProject.click();
    }
    async updateButtonClick() {
        await this.btnUpdate.click();
    }

    async dropDownWhenToExecuteClick(setPath: string) {
        await element(by.xpath('//span[text()="' + setPath + '"] //following::span[contains(@class,"smo-clickable fa fa-chevron-down")]')).click();
    }

  

}