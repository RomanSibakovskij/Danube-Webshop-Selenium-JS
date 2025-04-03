"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger  = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');
const { TestDataGenerator } = require("./utils/TestDataGenerator");
const { Key } = require('selenium-webdriver');

class LoginFormPage extends BasePage{

    constructor(driver) {
        super(driver);

        //login form page web elements
        this._loginFormPageTitle = By.xpath("//div[@id='partition-title']");
        this._loginFormEmailInputField = By.xpath("//input[@id='n-email']");
        this._loginFormPasswordInputField = By.xpath("//input[@id='n-password2']");
        this._loginFormSignInButton = By.xpath("//button[@id='goto-signin-btn']");
        //error message
        this._loginFormInputError = By.xpath("//div[@class='error-message']");
    }

    //login form page text element getter
    async getLoginFormPageTitle(){
        const loginFormPageTitle = await this.driver.findElement(this._loginFormPageTitle);
        return await loginFormPageTitle.getText();
    }

    //login form page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isLoginFormPagePageWebElementDisplayed(){
        const elementsToCheck = [
            this._loginFormPageTitle,
            this._loginFormEmailInputField,
            this._loginFormPasswordInputField,
            this._loginFormSignInButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { LoginFormPage }