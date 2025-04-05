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

    //invalid input error message getter
    async getCheckoutPageInvalidInputErrorMessage(){
        const invalidInputError = await this.driver.findElement(this._fillAllFieldsError);
        return await invalidInputError.getText();
    }

}
module.exports = { CheckoutPageInvalidScenarios }