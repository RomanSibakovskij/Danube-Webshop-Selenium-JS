"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./BasePage');
const Logger  = require("./Logger");
const { Actions } = require('selenium-webdriver');
const { TestDataGenerator } = require("./TestDataGenerator");
const { Key } = require('selenium-webdriver');

class SignUpFormPageInvalidScenarios extends BasePage{

    constructor(driver) {
        super(driver);

        //input form
        this._signUpFormPageFirstNameInputField = By.xpath("//input[@id='s-name']");
        this._signUpFormPageLastNameInputField = By.xpath("//input[@id='s-surname']");
        this._signUpFormPageEmailInputField = By.xpath("//input[@id='s-email']");
        this._signUpFormPagePasswordInputField = By.xpath("//input[@id='s-password2']");
        this._signUpFormPageCompanyInputField = By.xpath("//input[@id='s-company']");
        //error message
        this._fillAllFieldsError = By.xpath("//div[@class='error-message']");

        const testDataGenerator = new TestDataGenerator(this.driver);

        //invalid user data - no singular input
        this._noFirstName = "";
        this._noLastName = "";
        this._noEmail = "";
        this._noPassword = "";

        //invalid user data - too short singular input
        this._tooShortFirstName = "J";
        this._tooShortLastName = "M"
        this._tooShortEmail = testDataGenerator.generateRandomTooShortEmailAddress(1);
        this._tooShortPassword = "$Fr2"

        //invalid user data - too long singular input
        this._tooLongFirstName = "Cffdgdfhesfesdghjulkjhtgrefdwsafghjklskfgjmhgnbfdvcsxzbcvgbnfgjertrytuiukjhgfsdgfjuyuioijfhgdfsfddsf"; //100 chars
        this._tooLongLastName = "Dffdgdfhesfesdghjulkjhtgrefdwsafghjklskfgjmhgnbfdvcsxzbcvgbnfgjertrytuiukjhgfsdgfjuyuioijfhgdfsfddsf"; //100 chars
        this._tooLongEmail = testDataGenerator.generateRandomTooLongEmailAddress(100);
        this._tooLongPassword = "$rfsdfdsfRRtgdfdsfd$%"//21 chars

        //invalid user data - invalid singular input format
        this._invalidFirstNameInputFormat = "#$#$^%^&*%^*&";
        this._invalidLastNameInputFormat = "#$#$^%^&*%^*&";
        this._invalidEmailFormat = "bghtyffakemail.com"//missing '@'
    }

    //invalid user account data input method - no singular input
    async inputNoFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._signUpFormPageFirstNameInputField);
        const noFirstName = await this._noFirstName;
        Logger.info("No user first name: ", noFirstName);
        await firstNameInputField.sendKeys(noFirstName);
    }
    async inputNoLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._signUpFormPageLastNameInputField);
        const noLastName = await this._noLastName;
        Logger.info("No user last name: ", noLastName);
        await lastNameInputField.sendKeys(noLastName);
    }
    async inputNoEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._signUpFormPageEmailInputField);
        const noEmail = await this._noEmail;
        Logger.info("No user email: ", noEmail);
        await emailInputField.sendKeys(noEmail);
    }
    async inputNoPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._signUpFormPagePasswordInputField);
        const noPassword = await this._noPassword;
        Logger.info("No user password: ", noPassword);
        await passwordInputField.sendKeys(noPassword);
    }

    //invalid user account data input method - too short singular input
    async inputTooShortFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._signUpFormPageFirstNameInputField);
        const tooShortFirstName = await this._tooShortFirstName;
        Logger.info("Too short user first name: ", tooShortFirstName);
        await firstNameInputField.sendKeys(tooShortFirstName);
    }
    async inputTooShortLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._signUpFormPageLastNameInputField);
        const tooShortLastName = await this._tooShortLastName;
        Logger.info("Too short user last name: ", tooShortLastName);
        await lastNameInputField.sendKeys(tooShortLastName);
    }
    async inputTooShortEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._signUpFormPageEmailInputField);
        const tooShortEmail = await this._tooShortEmail;
        Logger.info("Too short user email: ", tooShortEmail);
        await emailInputField.sendKeys(tooShortEmail);
    }
    async inputTooShortPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._signUpFormPagePasswordInputField);
        const tooShortPassword = await this._tooShortPassword;
        Logger.info("Too short user password: ", tooShortPassword);
        await passwordInputField.sendKeys(tooShortPassword);
    }

    //invalid user account data input method - too long singular input
    async inputTooLongFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._signUpFormPageFirstNameInputField);
        const tooLongFirstName = await this._tooLongFirstName;
        Logger.info("Too long user first name: ", tooLongFirstName);
        await firstNameInputField.sendKeys(tooLongFirstName);
    }
    async inputTooLongLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._signUpFormPageLastNameInputField);
        const tooLongLastName = await this._tooLongLastName;
        Logger.info("Too long user last name: ", tooLongLastName);
        await lastNameInputField.sendKeys(tooLongLastName);
    }
    async inputTooLongEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._signUpFormPageEmailInputField);
        const tooLongEmail = await this._tooLongEmail;
        Logger.info("Too long user email: ", tooLongEmail);
        await emailInputField.sendKeys(tooLongEmail);
    }
    async inputTooLongPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._signUpFormPagePasswordInputField);
            const tooLongPassword = await this._tooLongPassword;
        Logger.info("Too long user password: ", tooLongPassword);
        await passwordInputField.sendKeys(tooLongPassword);
    }

    //invalid user account data input method - invalid singular input format
    async inputInvalidFirstNameFormatIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._signUpFormPageFirstNameInputField);
        const invalidFirstNameFormat = await this._invalidFirstNameInputFormat;
        Logger.info("Invalid user first name input format: ", invalidFirstNameFormat);
        await firstNameInputField.sendKeys(invalidFirstNameFormat);
    }
    async inputInvalidLastNameFormatIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._signUpFormPageLastNameInputField);
        const invalidLastNameFormat = await this._invalidLastNameInputFormat;
        Logger.info("Invalid user last name input format: ", invalidLastNameFormat);
        await lastNameInputField.sendKeys(invalidLastNameFormat);
    }
    async inputInvalidEmailFormatIntoLastNameInputField(){
        const emailInputField = await this.driver.findElement(this._signUpFormPageEmailInputField);
        const invalidEmailFormat = await this._invalidEmailFormat;
        Logger.info("Invalid user email input format: ", invalidEmailFormat);
        await emailInputField.sendKeys(invalidEmailFormat);
    }

    //sign up form page error message getter
    async getSignUpFormPageInputErrorMessage(){
        const inputErrorMessage = await this.driver.findElement(this._fillAllFieldsError);
        return await inputErrorMessage.getText();
    }

}
module.exports = { SignUpFormPageInvalidScenarios }