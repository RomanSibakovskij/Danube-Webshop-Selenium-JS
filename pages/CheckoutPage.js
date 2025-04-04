"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger  = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');
const { TestDataGenerator } = require("./utils/TestDataGenerator");

class CheckoutPage extends BasePage {

    constructor(driver) {
        super(driver);

        //checkout page web elements
        this._checkoutPageTitle = By.xpath("//div[@class='checkout']/h1");
        this._checkoutPageSubtitle = By.xpath("//div[@class='checkout']/h2");
        //shipping address
        this._checkoutPageShipAddressSubtext = By.xpath("//div[@class='checkout']/p");
        this._checkoutPageShipAddressFirstNameInputField = By.xpath("//input[@id='s-name']");
        this._checkoutPageShipAddressLastNameInputField = By.xpath("//input[@id='s-surname']");
        this._checkoutPageShipAddressInputField = By.xpath("//input[@id='s-address']");
        this._checkoutPageShipAddressPostCodeInputField = By.xpath("//input[@id='s-zipcode']");
        this._checkoutPageShipAddressCityInputField = By.xpath("//input[@id='s-city']");
        this._checkoutPageShipAddressCompanyInputField = By.xpath("//input[@id='s-company']");
        this._checkoutPageShipItemsSubtext = By.xpath("//label[@id='account-usage']");
        this._checkoutPageShipSoonRadioButton = By.xpath("//input[@id='asap']");
        this._checkoutPageShipSoonSubtext = By.xpath("//label[@for='asap']");
        this._checkoutPageShipSinglePackageRadioButton = By.xpath("//input[@id='single']");
        this._checkoutPageShipSinglePackageSubtext = By.xpath("//label[@for='single']");
        this._checkoutPageShipBillAddressCheckbox = By.xpath("//input[@id='billing-different']");
        this._checkoutPageShipBillAddressSubtext = By.xpath("//label[@for='billing-different']");
        this._checkoutPageBillingAddressSubtext = By.xpath("//div[@id='billing-block']/p");
        this._checkoutPageBillingAddressFirstNameInputField = By.xpath("//input[@id='b-name']");
        this._checkoutPageBillingAddressLastNameInputField = By.xpath("//input[@id='b-surname']");
        this._checkoutPageBillingAddressInputField = By.xpath("//input[@id='b-address']");
        this._checkoutPageBillingAddressPostCodeInputField = By.xpath("//input[@id='b-zipcode']");
        this._checkoutPageBillingAddressCityInputField = By.xpath("//input[@id='b-city']");
        this._checkoutPageBillingAddressCompanyInputField = By.xpath("//input[@id='b-company']");
        this._checkoutPageBuyButton= By.xpath("//div[@class='checkout']/button");
    }

    //checkout page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isCheckoutPageWebElementDisplayed() {
        const elementsToCheck = [
            this._checkoutPageTitle,
            this._checkoutPageSubtitle,
            this._checkoutPageShipAddressSubtext,
            this._checkoutPageShipAddressFirstNameInputField,
            this._checkoutPageShipAddressLastNameInputField,
            this._checkoutPageShipAddressInputField,
            this._checkoutPageShipAddressPostCodeInputField,
            this._checkoutPageShipAddressCityInputField,
            this._checkoutPageShipAddressCompanyInputField,
            this._checkoutPageShipItemsSubtext,
            this._checkoutPageShipSoonRadioButton,
            this._checkoutPageShipSoonSubtext,
            this._checkoutPageShipSinglePackageRadioButton,
            this._checkoutPageShipSinglePackageSubtext,
            this._checkoutPageShipBillAddressCheckbox,
            this._checkoutPageShipBillAddressSubtext,
            this._checkoutPageBillingAddressSubtext,
            this._checkoutPageBillingAddressFirstNameInputField,
            this._checkoutPageBillingAddressLastNameInputField,
            this._checkoutPageBillingAddressInputField,
            this._checkoutPageBillingAddressPostCodeInputField,
            this._checkoutPageBillingAddressCityInputField,
            this._checkoutPageBillingAddressCompanyInputField,
            this._checkoutPageBuyButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isCheckoutPageBillAddressSectionWebElementDisplayed() {
        const elementsToCheck = [
            this._checkoutPageBillingAddressSubtext,
            this._checkoutPageBillingAddressFirstNameInputField,
            this._checkoutPageBillingAddressLastNameInputField,
            this._checkoutPageBillingAddressInputField,
            this._checkoutPageBillingAddressPostCodeInputField,
            this._checkoutPageBillingAddressCityInputField,
            this._checkoutPageBillingAddressCompanyInputField,
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }


}
module.exports = { CheckoutPage }