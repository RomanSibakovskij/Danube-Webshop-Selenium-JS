"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger  = require("./utils/Logger");
const { TestDataGenerator } = require("./utils/TestDataGenerator");

class SignUpFormPage extends BasePage{

    constructor(driver) {
        super(driver);

        //signup form page web elements
        this._signUpFormPageTitle = By.xpath("//div[@class='partition-title']");
        //input form
        this._signUpFormPageFirstNameInputField = By.xpath("//input[@id='s-name']");
        this._signUpFormPageLastNameInputField = By.xpath("//input[@id='s-surname']");
        this._signUpFormPageEmailInputField = By.xpath("//input[@id='s-email']");
        this._signUpFormPagePasswordInputField = By.xpath("//input[@id='s-password2']");
        this._signUpFormPageCompanyInputField = By.xpath("//input[@id='s-company']");
        //account radio buttons section
        this._signUpFormPageUsingAccountForSubtext = By.xpath("//label[@id='account-usage']");
        this._signUpFormPageMySelfRadioButton = By.xpath("//input[@id='myself']");
        this._signUpFormPageMyselfSubtext = By.xpath("//label[@for='myself']");
        this._signUpFormPageBusinessRadioButton = By.xpath("//input[@id='business']");
        this._signUpFormPageBusinessSubtext = By.xpath("//label[@for='business']");
        //checkboxes section
        this._signUpFormPagePromoEmailCheckbox = By.xpath("//input[@id='marketing-agreement']");
        this._signUpFormPagePromoEmailSubtext = By.xpath("//label[@for='marketing-agreement']");
        this._signUpFormPageAcceptPrivacyCheckbox = By.xpath("//input[@id='privacy-policy']");
        this._signUpFormPageAcceptPrivacySubtext = By.xpath("//label[@for='privacy-policy']");
        this._signUpFormPageRegisterButton = By.xpath("//button[@id='register-btn']");

        const testDataGenerator = new TestDataGenerator(this.driver);

        //valid user data
        const { firstName, lastName } = testDataGenerator.getRandomName();
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = testDataGenerator.generateRandomEmailAddress(7);
        this._password = testDataGenerator.generateRandomPassword();
    }

    //valid user account data input methods
    async inputFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._signUpFormPageFirstNameInputField);
        const firstName = await this._firstName;
        Logger.info("Valid user first name: ", firstName);
        await firstNameInputField.sendKeys(firstName);
    }
    async inputLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._signUpFormPageLastNameInputField);
        const lastName = await this._lastName;
        Logger.info("Valid user last name: ", lastName);
        await lastNameInputField.sendKeys(lastName);
    }
    async inputEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._signUpFormPageEmailInputField);
        const email = this._email;
        Logger.info("Valid user email: ", email);
        await emailInputField.clear();
        await emailInputField.sendKeys(email);
    }
    async inputPasswordIntoPasswordInputField() {
        const passwordInputField = await this.driver.findElement(this._signUpFormPagePasswordInputField);
        const password = this._password;
        Logger.info("Valid user password: ", password);
        await passwordInputField.sendKeys(password);
    }
    async inputCompanyIntoCompanyInputField() {
        const companyInputField = await this.driver.findElement(this._signUpFormPageCompanyInputField);
        const company = "TestCompany Co.";
        Logger.info("Valid user company: ", company);
        await companyInputField.sendKeys(company);
    }

    //click 'Myself' radio button method
    async clickMyselfRadioButton(){
        const myselfRadioButton = await this.driver.findElement(this._signUpFormPageMySelfRadioButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: myselfRadioButton }).click().perform();
    }

    //click 'Business' radio button method
    async clickBusinessRadioButton(){
        const businessRadioButton = await this.driver.findElement(this._signUpFormPageBusinessRadioButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: businessRadioButton }).click().perform();
    }

    //click 'Accept privacy policy' checkbox method
    async clickPrivacyPolicyCheckbox(){
        const privacyPolicyCheckbox = await this.driver.findElement(this._signUpFormPageAcceptPrivacyCheckbox);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: privacyPolicyCheckbox }).click().perform();
    }

    //click 'Register' button method
    async clickRegisterButton(){
        const registerButton = await this.driver.findElement(this._signUpFormPageRegisterButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: registerButton }).click().perform();
    }

    //private data getters
    get firstName() {return this._firstName;}
    get lastName() {return this._lastName;}
    get email() {return this._email;}
    get password() {return this._password;}

    //sign up form page text element getters
    async getSignUpFormPageTitle(){
        const signUpFormPageTitle = await this.driver.findElement(this._signUpFormPageTitle);
        return await signUpFormPageTitle.getText();
    }
    async getSignUpFormPageUsingAccountForSubtext(){
        const signUpFormPageUsingAccountForSubtext = await this.driver.findElement(this._signUpFormPageUsingAccountForSubtext);
        return await signUpFormPageUsingAccountForSubtext.getText();
    }
    async getSignUpFormPageMyselfSubtext(){
        const signUpFormPageMyselfSubtext = await this.driver.findElement(this._signUpFormPageMyselfSubtext);
        return await signUpFormPageMyselfSubtext.getText();
    }
    async getSignUpFormPageBusinessSubtext(){
        const signUpFormPageBusinessSubtext = await this.driver.findElement(this._signUpFormPageBusinessSubtext);
        return await signUpFormPageBusinessSubtext.getText();
    }
    async getSignUpFormPagePromoEmailSubtext(){
        const signUpFormPagePromoEmailSubtext = await this.driver.findElement(this._signUpFormPagePromoEmailSubtext);
        return await signUpFormPagePromoEmailSubtext.getText();
    }
    async getSignUpFormPageAcceptPrivacySubtext(){
        const signUpFormPageAcceptPrivacySubtext = await this.driver.findElement(this._signUpFormPageAcceptPrivacySubtext);
        return await signUpFormPageAcceptPrivacySubtext.getText();
    }

    //sign up form page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isSignUpFormPagePageWebElementDisplayed(){
        const elementsToCheck = [
            this._signUpFormPageTitle,
            this._signUpFormPageFirstNameInputField,
            this._signUpFormPageLastNameInputField,
            this._signUpFormPageEmailInputField,
            this._signUpFormPagePasswordInputField,
            this._signUpFormPageCompanyInputField,
            this._signUpFormPageUsingAccountForSubtext,
            this._signUpFormPageMySelfRadioButton,
            this._signUpFormPageMyselfSubtext,
            this._signUpFormPageBusinessRadioButton,
            this._signUpFormPageBusinessSubtext,
            this._signUpFormPagePromoEmailCheckbox,
            this._signUpFormPagePromoEmailSubtext,
            this._signUpFormPageAcceptPrivacyCheckbox,
            this._signUpFormPageAcceptPrivacySubtext,
            this._signUpFormPageRegisterButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { SignUpFormPage }