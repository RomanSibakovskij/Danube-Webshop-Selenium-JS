"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger  = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');
const { SignUpFormPage } = require("./SignUpFormPage");
const { Key } = require('selenium-webdriver');

class LoginFormPage extends BasePage{

    constructor(driver) {
        super(driver);

        //login form page web elements
        this._loginFormPageTitle = By.xpath("//div[@id='partition-login']/div[1]");
        this._loginFormEmailInputField = By.xpath("//input[@id='n-email']");
        this._loginFormPasswordInputField = By.xpath("//input[@id='n-password2']");
        this._loginFormSignInButton = By.xpath("//button[@id='goto-signin-btn']");
        //error message
        this._loginFormInputError = By.xpath("//div[@class='error-message']");

        //invalid user login input data - no singular input
        this._noLoginEmail = "";
        this._noLoginPassword = "";
    }

    //valid user login data input methods
    async inputValidUserEmailIntoLoginEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginFormEmailInputField);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const loginEmail = signUpFormPage.email;
        Logger.info("Valid user login email: ", loginEmail);
        await loginEmailInputField.clear();
        await loginEmailInputField.sendKeys(loginEmail);
    }
    async inputValidUserPasswordIntoLoginPasswordInputField(){
        const loginPasswordInputField = await this.driver.findElement(this._loginFormPasswordInputField);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const loginPassword = signUpFormPage.password;
        Logger.info("Valid user login password: ", loginPassword);
        await loginPasswordInputField.sendKeys(loginPassword);
    }

    //invalid user login data input methods - no singular input
    async inputNoUserEmailIntoLoginEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginFormEmailInputField);
        const noLoginEmail = this._noLoginEmail;
        Logger.info("No user login email: ", noLoginEmail);
        await loginEmailInputField.clear();
        await loginEmailInputField.sendKeys(noLoginEmail);
    }
    async inputNoUserPasswordIntoLoginPasswordInputField(){
        const loginPasswordInputField = await this.driver.findElement(this._loginFormPasswordInputField);
        const noLoginPassword = this._noLoginPassword;
        Logger.info("No user login password: ", noLoginPassword);
        await loginPasswordInputField.sendKeys(noLoginPassword);
    }

    //click 'Sign in' button method
    async clickSigninButton(){
        const signinButton = await this.driver.findElement(this._loginFormSignInButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: signinButton }).click().perform();
    }

    //login input error message getter
    async getLoginInputErrorMessage(){
        const loginInputErrorMessage = await this.driver.findElement(this._loginFormInputError);
        return await loginInputErrorMessage.getText();
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