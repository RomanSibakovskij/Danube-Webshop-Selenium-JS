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

        //invalid guest checkout data input - no singular input
        this._guestCheckoutShipAddressNoFirstName = "";
        this._guestCheckoutShipAddressNoLastName = "";
    }

    //invalid guest checkout data input methods (shipping address) - no singular input
    async inputNoGuestFirstNameIntoShipAddressFirstNameInputField(){
        const shipAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageShipAddressFirstNameInputField);
        const noGuestFirstName = await this._guestCheckoutShipAddressNoFirstName;
        Logger.info("No guest checkout first name (shipping address): ", noGuestFirstName);
        await shipAddressFirstNameInputField.sendKeys(noGuestFirstName);
    }
    async inputNoGuestLastNameIntoShipAddressLastNameInputField(){
        const shipAddressLastNameInputField = await this.driver.findElement(this._checkoutPageShipAddressLastNameInputField);
        const noGuestLastName = await this._guestCheckoutShipAddressNoLastName;
        Logger.info("No guest checkout last name (shipping address): ", noGuestLastName);
        await shipAddressLastNameInputField.sendKeys(noGuestLastName);
    }

    //invalid input error message getter
    async getCheckoutPageInvalidInputErrorMessage(){
        const invalidInputError = await this.driver.findElement(this._fillAllFieldsError);
        return await invalidInputError.getText();
    }

}
module.exports = { CheckoutPageInvalidScenarios }