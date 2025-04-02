"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger  = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');
const { TestDataGenerator } = require("./utils/TestDataGenerator");
const { Key } = require('selenium-webdriver');
const {SignUpFormPage} = require("./SignUpFormPage");

class AccountPage extends BasePage{

    constructor(driver) {
        super(driver);

        //account page web elements
        this._accountPageTitle = By.xpath("//div[@class='account-content']/h2");
        //user details section
        this._accountPageUserDetailsSubtitle = By.xpath("//div[@id='user-details']/h3");
        this._accountPageUserEmail = By.xpath("//div[@id='user-details']/div[1]"); //it's constantly static
        this._accountPageProfileImgSubtext = By.xpath("//div[@id='user-details']/div[2]");
        this._accountPageUploadFileButton = By.xpath("//div[@id='user-details']//input");
        this._accountPageUploadButton = By.xpath("//div[@id='user-details']//button");
        //billing information
        this._accountPageBillingInfoSubtitle = By.xpath("//div[@id='billing']/h3");
        this._accountPageBillingInfoFirstNameInputField = By.xpath("//input[@id='s-name']");
        this._accountPageBillingInfoLastNameInputField = By.xpath("//input[@id='s-surname']");
        this._accountPageBillingInfoAddressInputField = By.xpath("//input[@id='s-address']");
        this._accountPageBillingInfoPostCodeInputField = By.xpath("//input[@id='s-zipcode']");
        this._accountPageBillingInfoCityInputField = By.xpath("//input[@id='s-city']");
        this._accountPageBillingInfoCompanyInputField = By.xpath("//input[@id='s-company']");
        this._accountPageUpdateButton = By.xpath("//div[@id='billing']//button");
        //previous orders section
        this._accountPagePreviousOrdersSubtitle = By.xpath("//div[@id='orders']/h3");
        this._accountPageSubmittedOrderElements = By.xpath("//div[@id='orders']/ul/li");
        this._accountPageSubmittedOrderInvoiceLinkElements = By.xpath("//div[@id='orders']/ul/li/a");

        const testDataGenerator = new TestDataGenerator(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        //valid user account data getters
        this._accountPageFirstName = signUpFormPage.firstName;
        this._accountPageLastName = signUpFormPage.lastName;
        this._accountPageAddress = testDataGenerator.generateRandomAddress(9);
        this._accountPagePostCode = testDataGenerator.getRandomPostalOrderNumber();
        this._accountPageCity = testDataGenerator.getRandomCity();

    }

    //valid user account data input methods
    async inputFirstNameIntoAccPageFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._accountPageBillingInfoFirstNameInputField);
        const firstName = await this._accountPageFirstName;
        Logger.info("Valid user first name: ", firstName);
        await firstNameInputField.sendKeys(firstName);
    }
    async inputLastNameIntoAccPageLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._accountPageBillingInfoLastNameInputField);
        const lastName = await this._accountPageLastName;
        Logger.info("Valid user last name: ", lastName);
        await lastNameInputField.sendKeys(lastName);
    }
    async inputAddressIntoAccPageAddressInputField(){
        const addressInputField = await this.driver.findElement(this._accountPageBillingInfoAddressInputField);
        const address = this._accountPageAddress;
        Logger.info("Valid user address: ", address);
        await addressInputField.sendKeys(address);
    }
    async inputPostCodeIntoAccPagePostCodeInputField() {
        const postCodeInputField = await this.driver.findElement(this._accountPageBillingInfoPostCodeInputField);
        const postCode = this._accountPagePostCode;
        Logger.info("Valid user post code: ", postCode);
        await postCodeInputField.sendKeys(postCode);
    }
    async inputCityIntoAccPageCityInputField() {
        const cityInputField = await this.driver.findElement(this._accountPageBillingInfoCityInputField);
        const city = this._accountPageCity;
        Logger.info("Valid user city: ", city);
        await cityInputField.sendKeys(city);
    }

    //click 'Update' button
    async clickUpdateButton(){
        const updateButton = await this.driver.findElement(this._accountPageUpdateButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: updateButton }).click().perform();
    }

    //account page text element getters
    async getAccountPageTitle(){
        const accountPageTitle = await this.driver.findElement(this._accountPageTitle);
        return await accountPageTitle.getText();
    }
    async getAccountUserDetailsSubtitle(){
        const accountPageUserDetailsSubtitle = await this.driver.findElement(this._accountPageUserDetailsSubtitle);
        return await accountPageUserDetailsSubtitle.getText();
    }
    async getAccountUserEmail(){
        const accountPageUserEmail = await this.driver.findElement(this._accountPageUserEmail);
        const text = await accountPageUserEmail.getText();
        //extract email part from string
        const match = text.match(/[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}/);
        return match ? match[0].trim() : null; //return email if found or null
    }
    async getAccountProfileImgSubtext(){
        const accountPageProfileImgSubtext = await this.driver.findElement(this._accountPageProfileImgSubtext);
        const text = await accountPageProfileImgSubtext.getText();
        //extract "Profile picture:" part from string
        const match = text.match(/^Profile picture:/);
        return match ? match[0].trim() : null; //return only "Profile picture:" if found or null
    }
    async getAccountBillingInfoSubtitle(){
        const accountPageBillingInfoSubtitle = await this.driver.findElement(this._accountPageBillingInfoSubtitle);
        return await accountPageBillingInfoSubtitle.getText();
    }
    async getAccountPreviousOrdersSubtitle(){
        const accountPagePrevOrdersSubtitle = await this.driver.findElement(this._accountPagePreviousOrdersSubtitle);
        return await accountPagePrevOrdersSubtitle.getText();
    }

    //account page submitted orders getter (if present)
    async getAccountPageSubmittedOrder() {
        const elements = await this.driver.findElements(this._accountPageSubmittedOrderElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get submitted order (account page):', error.message);
                    return '';
                }
            })
        );
    }

    //account page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isAccountPagePageWebElementDisplayed(){
        const elementsToCheck = [
            this._accountPageTitle,
            this._accountPageUserDetailsSubtitle,
            this._accountPageUserEmail,
            this._accountPageProfileImgSubtext,
            this._accountPageUploadFileButton,
            this._accountPageUploadButton,
            this._accountPageBillingInfoSubtitle,
            this._accountPageBillingInfoFirstNameInputField,
            this._accountPageBillingInfoLastNameInputField,
            this._accountPageBillingInfoAddressInputField,
            this._accountPageBillingInfoPostCodeInputField,
            this._accountPageBillingInfoCityInputField,
            this._accountPageBillingInfoCompanyInputField,
            this._accountPageUpdateButton,
            this._accountPagePreviousOrdersSubtitle
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { AccountPage }