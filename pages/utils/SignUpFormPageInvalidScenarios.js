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

        //invalid user data - no singular input
        this._noFirstName = "";
        this._noLastName = "";
        this._noEmail = "";
        this._noPassword = "";
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

    //sign up form page error message getter
    async getSignUpFormPageInputErrorMessage(){
        const inputErrorMessage = await this.driver.findElement(this._fillAllFieldsError);
        return await inputErrorMessage.getText();
    }

}
module.exports = { SignUpFormPageInvalidScenarios }