"use strict";

const fs = require('fs');
const path = require('path');
const assert = require("node:assert");
const Logger = require('../../pages/utils/Logger');
const TestDataGenerator = require("../../pages/utils/TestDataGenerator");
const { HomePage } = require('../../pages/HomePage');
const { GeneralPage } = require("../../pages/GeneralPage");

class TestMethods {

    constructor(driver) {this.driver = driver;}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //navigate to sign-up form test method
    async navigateToSignUpFormTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //screenshot utility
    static async captureScreenshot(driver, fileName) {
        try {
            await driver.sleep(1500); //wait for the screenshot to be taken
            const screenshot = await driver.takeScreenshot();
            const baseDir = path.join(__dirname, '../screenshots');
            fs.mkdirSync(baseDir, {recursive: true});
            const filePath = path.join(baseDir, `${fileName.replace(/[^a-zA-Z0-9-_\(\)]/g, ' ')}.png`);

            // Save the screenshot to the file
            fs.writeFileSync(filePath, screenshot, 'base64');

            console.log(`Screenshot saved at: ${filePath}`);
        } catch (error) {
            console.error('Error capturing screenshot:', error);
        }
    }


}
module.exports = TestMethods;