"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./BasePage');
const Logger  = require("./Logger");
const { TestDataGenerator } = require("./TestDataGenerator");

class CheckoutPageInvalidScenarios extends BasePage{

    constructor(driver) {
        super(driver);

        //shipping address
        this._checkoutPageShipAddressFirstNameInputField = By.xpath("//input[@id='s-name']");
        this._checkoutPageShipAddressLastNameInputField = By.xpath("//input[@id='s-surname']");
        this._checkoutPageShipAddressInputField = By.xpath("//input[@id='s-address']");
        this._checkoutPageShipAddressPostCodeInputField = By.xpath("//input[@id='s-zipcode']");
        this._checkoutPageShipAddressCityInputField = By.xpath("//input[@id='s-city']");
        this._checkoutPageShipAddressCompanyInputField = By.xpath("//input[@id='s-company']");
        //billing address
        this._checkoutPageBillingAddressFirstNameInputField = By.xpath("//input[@id='b-name']");
        this._checkoutPageBillingAddressLastNameInputField = By.xpath("//input[@id='b-surname']");
        this._checkoutPageBillingAddressInputField = By.xpath("//input[@id='b-address']");
        this._checkoutPageBillingAddressPostCodeInputField = By.xpath("//input[@id='b-zipcode']");
        this._checkoutPageBillingAddressCityInputField = By.xpath("//input[@id='b-city']");
        this._checkoutPageBillingAddressCompanyInputField = By.xpath("//input[@id='b-company']");
        //input error message
        this._fillAllFieldsError = By.xpath("//p[@id='error-message']");

        const testDataGenerator = new TestDataGenerator(this.driver);

        //invalid guest checkout data input - no singular input (shipping and billing address input fields will share same variables to avoid redundancies)
        this._guestCheckoutShipAddressNoFirstName = "";
        this._guestCheckoutShipAddressNoLastName = "";
        this._guestCheckoutNoShipAddress = "";
        this._guestCheckoutShipAddressNoPostCode = "";
        this._guestCheckoutShipAddressNoCity = "";
        this._guestCheckoutShipAddressNoCompany = "";

        //invalid guest checkout data input - too short singular input (shipping and billing address input fields will share same variables to avoid redundancies)
        this._guestCheckoutShipAddressTooShortFirstName = "K";
        this._guestCheckoutShipAddressTooShortLastName = "G";
        this._guestCheckoutTooShortShipAddress = "3 st"; //4 chars
        this._guestCheckoutShipAddressTooShortPostCode = 7654; //4 digits
        this._guestCheckoutShipAddressTooShortCity = "K";
        this._guestCheckoutShipAddressTooShortCompany = "G";

        //invalid guest checkout data input - too long singular input (shipping and billing address input fields will share same variables to avoid redundancies)
        this._guestCheckoutShipAddressTooLongFirstName = "Rffdgfhffvdfhggjkjhluyutrtserttiuuyouitrgfsdsadffdfvxzcxcgfdhfujttetregfdgfddsafddsfgfdhgwaewrdsdsad"; //100 chars
        this._guestCheckoutShipAddressTooLongLastName = "Dffdgfhffvdfhggjkjhluyutrtserttiuuyouitrgfsdsadffdfvxzcxcgfdhfujttetregfdgfddsafddsfgfdhgwaewrdsdsad"; //100 chars
        this._guestCheckoutTooLongShipAddress = testDataGenerator.generateRandomAddress(90); //100 chars
        this._guestCheckoutShipAddressTooLongPostCode = 2323453453232324232232324; //25 digits
        this._guestCheckoutShipAddressTooLongCity = "Sffdxfhffvdfhggjkjhluyutrtserttiuuyouitrgfsdsadffdfvxzcxcgfdhfujttetregfdgfddsafddsfgfdhgwaewrdsdsad"; //100 chars
        this._guestCheckoutShipAddressTooLongCompany = "Hfffxfhfrvdfhggjkjhluyutrtserttiuuyouitrgfsdsadffdfvxzcxcgfdhfujttetregfdgfddsafddsfgfdhgwaewrdsdsad";//100 chars

        //invalid guest checkout data input - invalid singular input format (shipping and billing address input fields will share same variables to avoid redundancies)
        this._guestCheckoutInvalidFirstNameFormat = "@$#@$%#$%^";
        this._guestCheckoutInvalidLastNameFormat = "*&^%&*$$";
        this._guestCheckoutInvalidAddressFormat = "!^%^*^&*&^";
    }

    //invalid guest checkout data input methods (shipping address) - no singular input
    async inputNoGuestFirstNameIntoShipAddressFirstNameInputField(){
        const shipAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageShipAddressFirstNameInputField);
        const noGuestFirstName = this._guestCheckoutShipAddressNoFirstName;
        Logger.info("No guest checkout first name (shipping address): ", noGuestFirstName);
        await shipAddressFirstNameInputField.sendKeys(noGuestFirstName);
    }
    async inputNoGuestLastNameIntoShipAddressLastNameInputField(){
        const shipAddressLastNameInputField = await this.driver.findElement(this._checkoutPageShipAddressLastNameInputField);
        const noGuestLastName = this._guestCheckoutShipAddressNoLastName;
        Logger.info("No guest checkout last name (shipping address): ", noGuestLastName);
        await shipAddressLastNameInputField.sendKeys(noGuestLastName);
    }
    async inputNoGuestAddressIntoShipAddressInputField(){
        const shipAddressInputField = await this.driver.findElement(this._checkoutPageShipAddressInputField);
        const noGuestShipAddress = this._guestCheckoutNoShipAddress;
        Logger.info("No guest checkout address (shipping address): ", noGuestShipAddress);
        await shipAddressInputField.sendKeys(noGuestShipAddress);
    }
    async inputNoGuestPostCodeIntoShipAddressPostCodeInputField() {
        const shipAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageShipAddressPostCodeInputField);
        const noGuestShipAddressPostCode = this._guestCheckoutShipAddressNoPostCode;
        Logger.info("No guest checkout post code (shipping address): ", noGuestShipAddressPostCode);
        await shipAddressPostCodeInputField.sendKeys(noGuestShipAddressPostCode);
    }
    async inputNoGuestCityIntoShipAddressCityInputField() {
        const shipAddressCityInputField = await this.driver.findElement(this._checkoutPageShipAddressCityInputField);
        const noShipAddressGuestCity = this._guestCheckoutShipAddressNoCity;
        Logger.info("No guest checkout city (shipping address): ", noShipAddressGuestCity);
        await shipAddressCityInputField.sendKeys(noShipAddressGuestCity);
    }
    async inputNoGuestCompanyIntoShipAddressCompanyInputField() {
        const shipAddressCompanyInputField = await this.driver.findElement(this._checkoutPageShipAddressCompanyInputField);
        const noShipAddressCompany = this._guestCheckoutShipAddressNoCompany;
        Logger.info("No guest checkout company (shipping address): ", noShipAddressCompany);
        await shipAddressCompanyInputField.sendKeys(noShipAddressCompany);
    }

    //invalid guest checkout data input methods (billing address) - no singular input
    async inputNoGuestFirstNameIntoBillAddressFirstNameInputField(){
        const billAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageBillingAddressFirstNameInputField);
        const noGuestFirstName = this._guestCheckoutShipAddressNoFirstName;
        Logger.info("No guest checkout first name (billing address): ", noGuestFirstName);
        await billAddressFirstNameInputField.sendKeys(noGuestFirstName);
    }
    async inputNoGuestLastNameIntoBillAddressLastNameInputField(){
        const billAddressLastNameInputField = await this.driver.findElement(this._checkoutPageBillingAddressLastNameInputField);
        const noGuestLastName = this._guestCheckoutShipAddressNoLastName;
        Logger.info("No guest checkout last name (billing address): ", noGuestLastName);
        await billAddressLastNameInputField.sendKeys(noGuestLastName);
    }
    async inputNoGuestAddressIntoBillAddressInputField() {
        const billAddressInputField = await this.driver.findElement(this._checkoutPageBillingAddressInputField);
        const noGuestBillAddress = this._guestCheckoutNoShipAddress;
        Logger.info("No guest checkout address (shipping address): ", noGuestBillAddress);
        await billAddressInputField.sendKeys(noGuestBillAddress);
    }
    async inputNoGuestPostCodeIntoBillAddressPostCodeInputField() {
        const billAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageBillingAddressPostCodeInputField);
        const noGuestBillAddressPostCode = this._guestCheckoutShipAddressNoPostCode;
        Logger.info("No guest checkout post code (billing address): ", noGuestBillAddressPostCode);
        await billAddressPostCodeInputField.sendKeys(noGuestBillAddressPostCode);
    }
    async inputNoGuestCityIntoBillAddressCityInputField() {
        const billAddressCityInputField = await this.driver.findElement(this._checkoutPageBillingAddressCityInputField);
        const noBillAddressGuestCity = this._guestCheckoutShipAddressNoCity;
        Logger.info("No guest checkout city (billing address): ", noBillAddressGuestCity);
        await billAddressCityInputField.sendKeys(noBillAddressGuestCity);
    }
    async inputNoGuestCompanyIntoBillAddressCompanyInputField() {
        const billAddressCompanyInputField = await this.driver.findElement(this._checkoutPageBillingAddressCompanyInputField);
        const noBillAddressCompany = this._guestCheckoutShipAddressNoCompany;
        Logger.info("No guest checkout company (billing address): ", noBillAddressCompany);
        await billAddressCompanyInputField.sendKeys(noBillAddressCompany);
    }

    //invalid guest checkout data input methods (shipping address) - too short singular input
    async inputTooShortGuestFirstNameIntoShipAddressFirstNameInputField(){
        const shipAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageShipAddressFirstNameInputField);
        const tooShortGuestFirstName = this._guestCheckoutShipAddressTooShortFirstName;
        Logger.info("Too short guest checkout first name (shipping address): ", tooShortGuestFirstName);
        await shipAddressFirstNameInputField.sendKeys(tooShortGuestFirstName);
    }
    async inputTooShortGuestLastNameIntoShipAddressLastNameInputField(){
        const shipAddressLastNameInputField = await this.driver.findElement(this._checkoutPageShipAddressLastNameInputField);
        const tooShortGuestLastName = this._guestCheckoutShipAddressTooShortLastName;
        Logger.info("Too short guest checkout last name (shipping address): ", tooShortGuestLastName);
        await shipAddressLastNameInputField.sendKeys(tooShortGuestLastName);
    }
    async inputTooShortGuestAddressIntoShipAddressInputField(){
        const shipAddressInputField = await this.driver.findElement(this._checkoutPageShipAddressInputField);
        const tooShortGuestShipAddress = this._guestCheckoutTooShortShipAddress;
        Logger.info("Too short guest checkout address (shipping address): ", tooShortGuestShipAddress);
        await shipAddressInputField.sendKeys(tooShortGuestShipAddress);
    }
    async inputTooShortGuestPostCodeIntoShipAddressPostCodeInputField() {
        const shipAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageShipAddressPostCodeInputField);
        const tooShortGuestShipAddressPostCode = this._guestCheckoutShipAddressTooShortPostCode;
        Logger.info("Too short guest checkout post code (shipping address): ", tooShortGuestShipAddressPostCode);
        await shipAddressPostCodeInputField.sendKeys(tooShortGuestShipAddressPostCode);
    }
    async inputTooShortGuestCityIntoShipAddressCityInputField() {
        const shipAddressCityInputField = await this.driver.findElement(this._checkoutPageShipAddressCityInputField);
        const tooShortShipAddressGuestCity = this._guestCheckoutShipAddressTooShortCity;
        Logger.info("Too short guest checkout city (shipping address): ", tooShortShipAddressGuestCity);
        await shipAddressCityInputField.sendKeys(tooShortShipAddressGuestCity);
    }
    async inputTooShortGuestCompanyIntoShipAddressCompanyInputField() {
        const shipAddressCompanyInputField = await this.driver.findElement(this._checkoutPageShipAddressCompanyInputField);
        const tooShortShipAddressCompany = this._guestCheckoutShipAddressTooShortCompany;
        Logger.info("Too short guest checkout company (shipping address): ", tooShortShipAddressCompany);
        await shipAddressCompanyInputField.sendKeys(tooShortShipAddressCompany);
    }

    //invalid guest checkout data input methods (billing address) - too short singular input
    async inputTooShortGuestFirstNameIntoBillAddressFirstNameInputField(){
        const billAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageBillingAddressFirstNameInputField);
        const tooShortGuestFirstName = this._guestCheckoutShipAddressTooShortFirstName;
        Logger.info("Too short guest checkout first name (billing address): ", tooShortGuestFirstName);
        await billAddressFirstNameInputField.sendKeys(tooShortGuestFirstName);
    }
    async inputTooShortGuestLastNameIntoBillAddressLastNameInputField(){
        const billAddressLastNameInputField = await this.driver.findElement(this._checkoutPageBillingAddressLastNameInputField);
        const tooShortGuestLastName = this._guestCheckoutShipAddressTooShortLastName;
        Logger.info("Too short guest checkout last name (billing address): ", tooShortGuestLastName);
        await billAddressLastNameInputField.sendKeys(tooShortGuestLastName);
    }
    async inputTooShortGuestAddressIntoBillAddressInputField() {
        const billAddressInputField = await this.driver.findElement(this._checkoutPageBillingAddressInputField);
        const tooShortGuestBillAddress = this._guestCheckoutTooShortShipAddress;
        Logger.info("Too short guest checkout address (billing address): ", tooShortGuestBillAddress);
        await billAddressInputField.sendKeys(tooShortGuestBillAddress);
    }
    async inputTooShortGuestPostCodeIntoBillAddressPostCodeInputField() {
        const billAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageBillingAddressPostCodeInputField);
        const tooShortGuestBillAddressPostCode = this._guestCheckoutShipAddressTooShortPostCode;
        Logger.info("Too short guest checkout post code (billing address): ", tooShortGuestBillAddressPostCode);
        await billAddressPostCodeInputField.sendKeys(tooShortGuestBillAddressPostCode);
    }
    async inputTooShortGuestCityIntoBillAddressCityInputField() {
        const billAddressCityInputField = await this.driver.findElement(this._checkoutPageBillingAddressCityInputField);
        const tooShortBillAddressGuestCity = this._guestCheckoutShipAddressTooShortCity;
        Logger.info("Too short guest checkout city (billing address): ", tooShortBillAddressGuestCity);
        await billAddressCityInputField.sendKeys(tooShortBillAddressGuestCity);
    }
    async inputTooShortGuestCompanyIntoBillAddressCompanyInputField() {
        const billAddressCompanyInputField = await this.driver.findElement(this._checkoutPageBillingAddressCompanyInputField);
        const tooShortBillAddressCompany = this._guestCheckoutShipAddressTooShortCompany;
        Logger.info("Too short guest checkout company (billing address): ", tooShortBillAddressCompany);
        await billAddressCompanyInputField.sendKeys(tooShortBillAddressCompany);
    }

    //invalid guest checkout data input methods (shipping address) - too long singular input
    async inputTooLongGuestFirstNameIntoShipAddressFirstNameInputField(){
        const shipAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageShipAddressFirstNameInputField);
        const tooLongGuestFirstName = this._guestCheckoutShipAddressTooLongFirstName;
        Logger.info("Too long guest checkout first name (shipping address): ", tooLongGuestFirstName);
        await shipAddressFirstNameInputField.sendKeys(tooLongGuestFirstName);
    }
    async inputTooLongGuestLastNameIntoShipAddressLastNameInputField(){
        const shipAddressLastNameInputField = await this.driver.findElement(this._checkoutPageShipAddressLastNameInputField);
        const tooLongGuestLastName = this._guestCheckoutShipAddressTooLongLastName;
        Logger.info("Too long guest checkout last name (shipping address): ", tooLongGuestLastName);
        await shipAddressLastNameInputField.sendKeys(tooLongGuestLastName);
    }
    async inputTooLongGuestAddressIntoShipAddressInputField(){
        const shipAddressInputField = await this.driver.findElement(this._checkoutPageShipAddressInputField);
        const tooLongGuestShipAddress = this._guestCheckoutTooLongShipAddress;
        Logger.info("Too long guest checkout address (shipping address): ", tooLongGuestShipAddress);
        await shipAddressInputField.sendKeys(tooLongGuestShipAddress);
    }
    async inputTooLongGuestPostCodeIntoShipAddressPostCodeInputField() {
        const shipAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageShipAddressPostCodeInputField);
        const tooLongGuestShipAddressPostCode = this._guestCheckoutShipAddressTooLongPostCode;
        Logger.info("Too long guest checkout post code (shipping address): ", tooLongGuestShipAddressPostCode);
        await shipAddressPostCodeInputField.sendKeys(tooLongGuestShipAddressPostCode);
    }
    async inputTooLongGuestCityIntoShipAddressCityInputField() {
        const shipAddressCityInputField = await this.driver.findElement(this._checkoutPageShipAddressCityInputField);
        const tooLongShipAddressGuestCity = this._guestCheckoutShipAddressTooLongCity;
        Logger.info("Too long guest checkout city (shipping address): ", tooLongShipAddressGuestCity);
        await shipAddressCityInputField.sendKeys(tooLongShipAddressGuestCity);
    }
    async inputTooLongGuestCompanyIntoShipAddressCompanyInputField() {
        const shipAddressCompanyInputField = await this.driver.findElement(this._checkoutPageShipAddressCompanyInputField);
        const tooLongShipAddressCompany = this._guestCheckoutShipAddressTooLongCompany;
        Logger.info("Too long guest checkout company (shipping address): ", tooLongShipAddressCompany);
        await shipAddressCompanyInputField.sendKeys(tooLongShipAddressCompany);
    }

    //invalid guest checkout data input methods (billing address) - too long singular input
    async inputTooLongGuestFirstNameIntoBillAddressFirstNameInputField(){
        const billAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageBillingAddressFirstNameInputField);
        const tooLongGuestFirstName = this._guestCheckoutShipAddressTooLongFirstName;
        Logger.info("Too long guest checkout first name (billing address): ", tooLongGuestFirstName);
        await billAddressFirstNameInputField.sendKeys(tooLongGuestFirstName);
    }
    async inputTooLongGuestLastNameIntoBillAddressLastNameInputField(){
        const billAddressLastNameInputField = await this.driver.findElement(this._checkoutPageBillingAddressLastNameInputField);
        const tooLongGuestLastName = this._guestCheckoutShipAddressTooLongLastName;
        Logger.info("Too long guest checkout last name (billing address): ", tooLongGuestLastName);
        await billAddressLastNameInputField.sendKeys(tooLongGuestLastName);
    }
    async inputTooLongGuestAddressIntoBillAddressInputField() {
        const billAddressInputField = await this.driver.findElement(this._checkoutPageBillingAddressInputField);
        const tooLongGuestBillAddress = this._guestCheckoutTooLongShipAddress;
        Logger.info("Too long guest checkout address (billing address): ", tooLongGuestBillAddress);
        await billAddressInputField.sendKeys(tooLongGuestBillAddress);
    }
    async inputTooLongGuestPostCodeIntoBillAddressPostCodeInputField() {
        const billAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageBillingAddressPostCodeInputField);
        const tooLongGuestBillAddressPostCode = this._guestCheckoutShipAddressTooLongPostCode;
        Logger.info("Too long guest checkout post code (billing address): ", tooLongGuestBillAddressPostCode);
        await billAddressPostCodeInputField.sendKeys(tooLongGuestBillAddressPostCode);
    }
    async inputTooLongGuestCityIntoBillAddressCityInputField() {
        const billAddressCityInputField = await this.driver.findElement(this._checkoutPageBillingAddressCityInputField);
        const tooLongBillAddressGuestCity = this._guestCheckoutShipAddressTooLongCity;
        Logger.info("Too long guest checkout city (billing address): ", tooLongBillAddressGuestCity);
        await billAddressCityInputField.sendKeys(tooLongBillAddressGuestCity);
    }
    async inputTooLongGuestCompanyIntoBillAddressCompanyInputField() {
        const billAddressCompanyInputField = await this.driver.findElement(this._checkoutPageBillingAddressCompanyInputField);
        const tooLongBillAddressCompany = this._guestCheckoutShipAddressTooLongCompany;
        Logger.info("Too long guest checkout company (billing address): ", tooLongBillAddressCompany);
        await billAddressCompanyInputField.sendKeys(tooLongBillAddressCompany);
    }

    //invalid guest checkout data input methods (shipping address) - invalid singular input format
    async inputInvalidGuestFirstNameFormatIntoShipAddressFirstNameInputField(){
        const shipAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageShipAddressFirstNameInputField);
        const invalidGuestFirstNameFormat = this._guestCheckoutInvalidFirstNameFormat;
        Logger.info("Invalid guest checkout first name format (shipping address): ", invalidGuestFirstNameFormat);
        await shipAddressFirstNameInputField.sendKeys(invalidGuestFirstNameFormat);
    }
    async inputInvalidGuestLastNameFormatIntoShipAddressLastNameInputField(){
        const shipAddressLastNameInputField = await this.driver.findElement(this._checkoutPageShipAddressLastNameInputField);
        const invalidGuestLastNameFormat = this._guestCheckoutInvalidLastNameFormat;
        Logger.info("Invalid guest checkout last name format (shipping address): ", invalidGuestLastNameFormat);
        await shipAddressLastNameInputField.sendKeys(invalidGuestLastNameFormat);
    }
    async inputInvalidGuestAddressFormatIntoShipAddressInputField(){
        const shipAddressInputField = await this.driver.findElement(this._checkoutPageShipAddressInputField);
        const invalidGuestShipAddressFormat = this._guestCheckoutInvalidAddressFormat;
        Logger.info("Invalid guest checkout address format (shipping address): ", invalidGuestShipAddressFormat);
        await shipAddressInputField.sendKeys(invalidGuestShipAddressFormat);
    }

    //invalid input error message getter
    async getCheckoutPageInvalidInputErrorMessage(){
        const invalidInputError = await this.driver.findElement(this._fillAllFieldsError);
        return await invalidInputError.getText();
    }

}
module.exports = { CheckoutPageInvalidScenarios }