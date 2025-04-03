"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./BasePage');
const Logger  = require("./Logger");
const { Actions } = require('selenium-webdriver');
const { TestDataGenerator } = require("./TestDataGenerator");
const { Key } = require('selenium-webdriver');
const {SignUpFormPage} = require("../SignUpFormPage");

class AccountPageInvalidScenarios extends BasePage{

    constructor(driver) {
        super(driver);

        //input elements
        this._accountPageBillingInfoFirstNameInputField = By.xpath("//input[@id='s-name']");
        this._accountPageBillingInfoLastNameInputField = By.xpath("//input[@id='s-surname']");
        this._accountPageBillingInfoAddressInputField = By.xpath("//input[@id='s-address']");
        this._accountPageBillingInfoPostCodeInputField = By.xpath("//input[@id='s-zipcode']");
        this._accountPageBillingInfoCityInputField = By.xpath("//input[@id='s-city']");
        //error message
        this._fillAllFieldsError = By.xpath("//div[@class='error-message']");

        //invalid user input data - no singular input
        this._noAccPageFirstName = "";
        this._noAccPageLastName = "";

    }

    //invalid user account data input methods - no singular input
    async inputNoFirstNameIntoAccPageFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._accountPageBillingInfoFirstNameInputField);
        const noFirstName = await this._noAccPageFirstName;
        Logger.info("No user first name: ", noFirstName);
        await firstNameInputField.sendKeys(noFirstName);
    }
    async inputNoLastNameIntoAccPageLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._accountPageBillingInfoLastNameInputField);
        const noLastName = await this._noAccPageLastName;
        Logger.info("No user last name: ", noLastName);
        await lastNameInputField.sendKeys(noLastName);
    }


    //account page error message getter
    async getAccountPageInputErrorMessage(){
        const inputErrorMessage = await this.driver.findElement(this._fillAllFieldsError);
        return await inputErrorMessage.getText();
    }

}
module.exports = { AccountPageInvalidScenarios }