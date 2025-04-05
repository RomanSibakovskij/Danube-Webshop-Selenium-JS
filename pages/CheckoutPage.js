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
        //recap section
        this._checkoutRecapSuccessMessage = By.xpath("//p[@id='order-confirmation']");
        this._checkoutRecapShopMoreButton = By.xpath("//div[@class='recap']/button");

        const testDataGenerator = new TestDataGenerator(this.driver);
        //valid guest checkout input data
        //shipping address
        const { firstName, lastName } = testDataGenerator.getRandomName();
        this._guestCheckoutShipAddressFirstName = firstName;
        this._guestCheckoutShipAddressLastName = lastName;
        this._guestCheckoutShipAddress = testDataGenerator.generateRandomAddress(5);
        this._guestCheckoutShipPostCode = testDataGenerator.getRandomPostalOrderNumber();
        this._guestCheckoutShipCity = testDataGenerator.getRandomCity();
        this._guestCheckoutShipCompany = testDataGenerator.getRandomCompany();
        //billing address data
        this._guestCheckoutBillAddressFirstName = this._guestCheckoutShipAddressFirstName;
        this._guestCheckoutBillAddressLastName = this._guestCheckoutShipAddressLastName;
        this._guestCheckoutBillAddress = testDataGenerator.generateRandomAddress(9);
        this._guestCheckoutBillPostCode = testDataGenerator.getRandomPostalOrderNumber();
        this._guestCheckoutBillCity = testDataGenerator.getRandomCity();
        this._guestCheckoutBillCompany = this._guestCheckoutShipCompany;
    }

    //valid guest checkout data input methods (shipping address)
    async inputGuestFirstNameIntoShipAddressFirstNameInputField(){
        const shipAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageShipAddressFirstNameInputField);
        const guestFirstName = await this._guestCheckoutShipAddressFirstName;
        Logger.info("Valid guest checkout first name (shipping address): ", guestFirstName);
        await shipAddressFirstNameInputField.sendKeys(guestFirstName);
    }
    async inputGuestLastNameIntoShipAddressLastNameInputField(){
        const shipAddressLastNameInputField = await this.driver.findElement(this._checkoutPageShipAddressLastNameInputField);
        const guestLastName = await this._guestCheckoutShipAddressLastName;
        Logger.info("Valid guest checkout last name (shipping address): ", guestLastName);
        await shipAddressLastNameInputField.sendKeys(guestLastName);
    }
    async inputGuestAddressIntoShipAddressInputField(){
        const shipAddressInputField = await this.driver.findElement(this._checkoutPageShipAddressInputField);
        const guestShipAddress = this._guestCheckoutShipAddress;
        Logger.info("Valid guest checkout address (shipping address): ", guestShipAddress);
        await shipAddressInputField.sendKeys(guestShipAddress);
    }
    async inputGuestPostCodeIntoShipAddressPostCodeInputField() {
        const shipAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageShipAddressPostCodeInputField);
        const guestShipAddressPostCode = this._guestCheckoutShipPostCode;
        Logger.info("Valid guest checkout post code (shipping address): ", guestShipAddressPostCode);
        await shipAddressPostCodeInputField.sendKeys(guestShipAddressPostCode);
    }
    async inputGuestCityIntoShipAddressCityInputField() {
        const shipAddressCityInputField = await this.driver.findElement(this._checkoutPageShipAddressCityInputField);
        const shipAddressGuestCity = this._guestCheckoutShipCity;
        Logger.info("Valid guest checkout city (shipping address): ", shipAddressGuestCity);
        await shipAddressCityInputField.sendKeys(shipAddressGuestCity);
    }
    async inputGuestCompanyIntoShipAddressCompanyInputField() {
        const shipAddressCompanyInputField = await this.driver.findElement(this._checkoutPageShipAddressCompanyInputField);
        const shipAddressCompany = this._guestCheckoutShipCompany;
        Logger.info("Valid guest checkout company (shipping address): ", shipAddressCompany);
        await shipAddressCompanyInputField.sendKeys(shipAddressCompany);
    }

    //valid guest checkout data input methods (billing address)
    async inputGuestFirstNameIntoBillAddressFirstNameInputField(){
        const billAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageBillingAddressFirstNameInputField);
        const guestFirstName = await this._guestCheckoutBillAddressFirstName;
        Logger.info("Valid guest checkout first name (billing address): ", guestFirstName);
        await billAddressFirstNameInputField.sendKeys(guestFirstName);
    }
    async inputGuestLastNameIntoBillAddressLastNameInputField(){
        const billAddressLastNameInputField = await this.driver.findElement(this._checkoutPageBillingAddressLastNameInputField);
        const guestLastName = await this._guestCheckoutBillAddressLastName;
        Logger.info("Valid guest checkout last name (billing address): ", guestLastName);
        await billAddressLastNameInputField.sendKeys(guestLastName);
    }
    async inputGuestAddressIntoBillAddressInputField() {
        const billAddressInputField = await this.driver.findElement(this._checkoutPageBillingAddressInputField);
        const guestShipAddress = this._guestCheckoutBillAddress;
        Logger.info("Valid guest checkout address (shipping address): ", guestShipAddress);
        await billAddressInputField.sendKeys(guestShipAddress);
    }
    async inputGuestPostCodeIntoBillAddressPostCodeInputField() {
        const billAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageBillingAddressPostCodeInputField);
        const guestBillAddressPostCode = this._guestCheckoutBillPostCode;
        Logger.info("Valid guest checkout post code (billing address): ", guestBillAddressPostCode);
        await billAddressPostCodeInputField.sendKeys(guestBillAddressPostCode);
    }
    async inputGuestCityIntoBillAddressCityInputField() {
        const billAddressCityInputField = await this.driver.findElement(this._checkoutPageBillingAddressCityInputField);
        const billAddressGuestCity = this._guestCheckoutBillCity;
        Logger.info("Valid guest checkout city (billing address): ", billAddressGuestCity);
        await billAddressCityInputField.sendKeys(billAddressGuestCity);
    }
    async inputGuestCompanyIntoBillAddressCompanyInputField() {
        const billAddressCompanyInputField = await this.driver.findElement(this._checkoutPageBillingAddressCompanyInputField);
        const billAddressCompany = this._guestCheckoutBillCompany;
        Logger.info("Valid guest checkout company (billing address): ", billAddressCompany);
        await billAddressCompanyInputField.sendKeys(billAddressCompany);
    }

    //click 'As soon as possible' radio button method (shipping address)
    async clickAsSoonRadioButton(){
        const asSoonRadioButton = await this.driver.findElement(this._checkoutPageShipSoonRadioButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: asSoonRadioButton }).click().perform();
    }

    //click 'Single package' radio button method (shipping address)
    async clickSinglePkgRadioButton(){
        const singlePkgRadioButton = await this.driver.findElement(this._checkoutPageShipSinglePackageRadioButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: singlePkgRadioButton }).click().perform();
    }

    //click 'Billing address are different' checkbox method
    async clickBillAddressCheckbox(){
        const billAddressCheckbox = await this.driver.findElement(this._checkoutPageShipBillAddressCheckbox);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: billAddressCheckbox }).click().perform();
    }

    //click 'Buy' button method (since scrolling down doesn't work on this page, JS executor method is used here)
    async clickBuyButton(){
        const buyButton = await this.driver.findElement(this._checkoutPageBuyButton);
        await this.driver.executeScript("arguments[0].click();", buyButton);
    }

    //checkout page text element getters
    async getCheckoutPageTitle(){
        const checkoutPageTitle = await this.driver.findElement(this._checkoutPageTitle);
        return await checkoutPageTitle.getText();
    }
    async getCheckoutPageSubtitle(){
        const checkoutPageSubtitle = await this.driver.findElement(this._checkoutPageSubtitle);
        return await checkoutPageSubtitle.getText();
    }
    async getCheckoutPageShipAddressSubtext(){
        const checkoutPageShipAddressSubtext = await this.driver.findElement(this._checkoutPageShipAddressSubtext);
        return await checkoutPageShipAddressSubtext.getText();
    }
    async getCheckoutPageShipItemsSubtext(){
        const checkoutPageShipItemsSubtext = await this.driver.findElement(this._checkoutPageShipItemsSubtext);
        return checkoutPageShipItemsSubtext.getText();
    }
    async getCheckoutPageShipSoonSubtext(){
        const checkoutPageShipSoonSubtext = await this.driver.findElement(this._checkoutPageShipSoonSubtext);
        return await checkoutPageShipSoonSubtext.getText();
    }
    async getCheckoutPageSinglePackageSubtext(){
        const checkoutPageSinglePackageSubtext = await this.driver.findElement(this._checkoutPageShipSinglePackageSubtext);
        return await checkoutPageSinglePackageSubtext.getText();
    }
    async getCheckoutPageShipBillAddressSubtext(){
        const checkoutPageShipBillAddressSubtext = await this.driver.findElement(this._checkoutPageShipBillAddressSubtext);
        return await checkoutPageShipBillAddressSubtext.getText();
    }
    async getCheckoutPageBillAddressSubtext(){
        const checkoutPageBillAddressSubtext = await this.driver.findElement(this._checkoutPageBillingAddressSubtext);
        return await checkoutPageBillAddressSubtext.getText();
    }

    //checkout recap text getter
    async getCheckoutRecapSuccessMessage(){
        const checkoutPageRecapSuccessMessage = await this.driver.findElement(this._checkoutRecapSuccessMessage);
        return await checkoutPageRecapSuccessMessage.getText();
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