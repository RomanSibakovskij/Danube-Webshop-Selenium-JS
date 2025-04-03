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

        const testDataGenerator = new TestDataGenerator(this.driver);

        //invalid user input data - no singular input
        this._noAccPageFirstName = "";
        this._noAccPageLastName = "";
        this._noAccPageAddress = "";
        this._noAccPagePostCode = "";
        this._noAccPageCity = "";

        //invalid user input data - too short singular input
        this._tooShortAccPageFirstName = "B";
        this._tooShortAccPageLastName = "H";
        this._tooShortAccPageAddress = "3 Rd.";
        this._tooShortAccPagePostCode = 5463;
        this._tooShortAccPageCity = "Bt";

        //invalid user input data - too long singular input
        this._tooLongAccPageFirstName = "Ffhgjhdsfdsgfghtyutgtefrrttyijukolkijghbgnhgjfdgsdfrrghtuytikjgfgfdfgsdfsgfdhtuyiuorrewweqwedfsfdsgd";//100 chars
        this._tooLongAccPageLastName = "Ffhgjhdsfdsgfghtyutgtefrrttyijukolkijghbgnhgjfdgsdfrrghtuytikjgfgfdfgsdfsgfdhtuyiuorrewweqwedfsfdsgd";//100 chars
        this._tooLongAccPageAddress = testDataGenerator.generateRandomAddress(90);
        this._tooLongAccPagePostCode = 3456645445677543334553456;//25 digits
        this._tooLongAccPageCity = "Rffdgfhffvdfhggjkjhluyutrtserttiuuyouitrgfsdsadffdfvxzcxcgfdhfujttetregfdgf";//75 chars

        //invalid user input data - invalid singular input format (special symbols only)
        this._invalidAccPageFirstNameFormat = "@$#%$#^%&%$%#$";
        this._invalidAccPageLastNameFormat = ")*&*&^%^$%$";
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
    async inputNoAddressIntoAccPageAddressInputField(){
        const addressInputField = await this.driver.findElement(this._accountPageBillingInfoAddressInputField);
        const noAddress = await this._noAccPageAddress;
        Logger.info("No user address: ", noAddress);
        await addressInputField.sendKeys(noAddress);
    }
    async inputNoPostCodeIntoAccPagePostCodeInputField() {
        const postCodeInputField = await this.driver.findElement(this._accountPageBillingInfoPostCodeInputField);
        const noPostCode = this._noAccPagePostCode;
        Logger.info("No user post code: ", noPostCode);
        await postCodeInputField.sendKeys(noPostCode);
    }
    async inputNoCityIntoAccPageCityInputField() {
        const cityInputField = await this.driver.findElement(this._accountPageBillingInfoCityInputField);
        const noCity = this._noAccPageCity;
        Logger.info("No user city: ", noCity);
        await cityInputField.sendKeys(noCity);
    }

    //invalid user account data input methods - too short singular input
    async inputTooShortFirstNameIntoAccPageFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._accountPageBillingInfoFirstNameInputField);
        const tooShortFirstName = await this._tooShortAccPageFirstName;
        Logger.info("Too short user first name: ", tooShortFirstName);
        await firstNameInputField.sendKeys(tooShortFirstName);
    }
    async inputTooShortLastNameIntoAccPageLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._accountPageBillingInfoLastNameInputField);
        const tooShortLastName = await this._tooShortAccPageLastName;
        Logger.info("Too short user last name: ", tooShortLastName);
        await lastNameInputField.sendKeys(tooShortLastName);
    }
    async inputTooShortAddressIntoAccPageAddressInputField(){
        const addressInputField = await this.driver.findElement(this._accountPageBillingInfoAddressInputField);
        const tooShortAddress = await this._tooShortAccPageAddress;
        Logger.info("Too short user address: ", tooShortAddress);
        await addressInputField.sendKeys(tooShortAddress);
    }
    async inputTooShortPostCodeIntoAccPagePostCodeInputField() {
        const postCodeInputField = await this.driver.findElement(this._accountPageBillingInfoPostCodeInputField);
        const tooShortPostCode = this._tooShortAccPagePostCode;
        Logger.info("Too short user post code: ", tooShortPostCode);
        await postCodeInputField.sendKeys(tooShortPostCode);
    }
    async inputTooShortCityIntoAccPageCityInputField() {
        const cityInputField = await this.driver.findElement(this._accountPageBillingInfoCityInputField);
        const tooShortCity = this._tooShortAccPageCity;
        Logger.info("Too short user city: ", tooShortCity);
        await cityInputField.sendKeys(tooShortCity);
    }

    //invalid user account data input methods - too long singular input
    async inputTooLongFirstNameIntoAccPageFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._accountPageBillingInfoFirstNameInputField);
        const tooLongFirstName = await this._tooLongAccPageFirstName;
        Logger.info("Too long user first name: ", tooLongFirstName);
        await firstNameInputField.sendKeys(tooLongFirstName);
    }
    async inputTooLongLastNameIntoAccPageLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._accountPageBillingInfoLastNameInputField);
        const tooLongLastName = await this._tooLongAccPageLastName;
        Logger.info("Too long user last name: ", tooLongLastName);
        await lastNameInputField.sendKeys(tooLongLastName);
    }
    async inputTooLongAddressIntoAccPageAddressInputField(){
        const addressInputField = await this.driver.findElement(this._accountPageBillingInfoAddressInputField);
        const tooLongAddress = await this._tooLongAccPageAddress;
        Logger.info("Too long user address: ", tooLongAddress);
        await addressInputField.sendKeys(tooLongAddress);
    }
    async inputTooLongPostCodeIntoAccPagePostCodeInputField() {
        const postCodeInputField = await this.driver.findElement(this._accountPageBillingInfoPostCodeInputField);
        const tooLongPostCode = this._tooLongAccPagePostCode;
        Logger.info("Too long user post code: ", tooLongPostCode);
        await postCodeInputField.sendKeys(tooLongPostCode);
    }
    async inputTooLongCityIntoAccPageCityInputField() {
        const cityInputField = await this.driver.findElement(this._accountPageBillingInfoCityInputField);
        const tooLongCity = this._tooLongAccPageCity;
        Logger.info("Too long user city: ", tooLongCity);
        await cityInputField.sendKeys(tooLongCity);
    }

    //invalid user account data input methods - invalid singular input format
    async inputInvalidFirstNameFormatIntoAccPageFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._accountPageBillingInfoFirstNameInputField);
        const invalidFirstNameFormat = await this._invalidAccPageFirstNameFormat;
        Logger.info("Invalid user first name format: ", invalidFirstNameFormat);
        await firstNameInputField.sendKeys(invalidFirstNameFormat);
    }
    async inputInvalidLastNameFormatIntoAccPageLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._accountPageBillingInfoLastNameInputField);
        const invalidLastNameFormat = await this._invalidAccPageLastNameFormat;
        Logger.info("Invalid user last name format: ", invalidLastNameFormat);
        await lastNameInputField.sendKeys(invalidLastNameFormat);
    }

    //account page error message getter
    async getAccountPageInputErrorMessage(){
        const inputErrorMessage = await this.driver.findElement(this._fillAllFieldsError);
        return await inputErrorMessage.getText();
    }

}
module.exports = { AccountPageInvalidScenarios }