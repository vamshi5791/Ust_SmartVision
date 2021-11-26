import{Browser,element,by} from "protractor"

export class btnProjectConfiguration{
    drpdwnWhenToExecute =element(by.xpath("//div[contains(@class,'smo-dropdown-trigger d-flex')]//span"))
    
    async timeSelecting(time:string){
        await element(by.xpath('//span[text()="'+time+'"]')).click();
    }
    async enterFTPUsername(text:string,username:string){
        await element(by.xpath('//legend[text()="'+text+'"]//following::input[@id="textInput_0_3_0"]')).sendKeys(username)
    }
}