"use strict";

const fs = require('fs');
const path = require('path');
const assert = require("node:assert");
const Logger = require('../../pages/utils/Logger');
const { HomePage } = require('../../pages/HomePage');
const { GeneralPage } = require("../../pages/GeneralPage");
const { SignUpFormPage } = require("../../pages/SignUpFormPage");
const { SignUpFormPageInvalidScenarios } = require("../../pages/utils/SignUpFormPageInvalidScenarios");
const { AccountPage } = require("../../pages/AccountPage");
const { AccountPageInvalidScenarios } = require("../../pages/utils/AccountPageInvalidScenarios");
const { LoginFormPage } = require("../../pages/LoginFormPage");
const { SingleProductPage } = require("../../pages/SingleProductPage");
const { ShoppingCartPage } = require("../../pages/ShoppingCartPage");
const { CheckoutPage } = require("../../pages/CheckoutPage");
const { CheckoutPageInvalidScenarios } = require("../../pages/utils/CheckoutPageInvalidScenarios");

class TestMethods {

    constructor(driver) {this.driver = driver;}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //navigate to sign-up form test method
    async navigateToSignUpFormTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //capture screenshot of the home page
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //click 'Sign up' button
        await generalPage.clickSignUpButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Navigate To Sign Up Form Test");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid user account creation tests

    //valid user account creation test method
    async validUserAccountCreationTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input valid user first name into first name input field
        await signUpFormPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await signUpFormPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await signUpFormPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await signUpFormPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the sign-up form page after valid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Valid Data Input");
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected login message
        const loginMessage = await generalPage.getLoginMessage();
        const loginEmail = await signUpFormPage.email;
        assert.strictEqual(loginMessage, `Welcome back, ${loginEmail}`, "The login message doesn't match expectations or the user sign up process has failed.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Sign Up Test Result");
    }
    //valid user business account creation test method
    async validUserBusinessAccountCreationTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input valid user first name into first name input field
        await signUpFormPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await signUpFormPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await signUpFormPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await signUpFormPage.inputPasswordIntoPasswordInputField();
        //input valid user company into company input field
        await signUpFormPage.inputCompanyIntoCompanyInputField();
        //capture screenshot of the sign-up form page after valid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Valid Data Input (business account)");
        //click 'Business' radio button
        await signUpFormPage.clickBusinessRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected login message
        const loginMessage = await generalPage.getLoginMessage();
        const loginEmail = await signUpFormPage.email;
        assert.strictEqual(loginMessage, `Welcome back, ${loginEmail}`, "The login message doesn't match expectations or the user sign up process has failed.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Sign Up Test Result (business account)");
    }

    //invalid user account creation tests

    //no singular input

    //invalid user account creation test method - no user first name
    async invalidUserAccountCreationNoFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //don't input user first name into first name input field
        await signUpFormPageInvalidScenarios.inputNoFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await signUpFormPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await signUpFormPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await signUpFormPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - No First Name");
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Please fill in all fields.", "The missing first name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The missing first name input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - No First Name");
    }
    //invalid user account creation test method - no user last name
    async invalidUserAccountCreationNoLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input valid user first name into first name input field
        await signUpFormPage.inputFirstNameIntoFirstNameInputField();
        //don't input user last name into last name input field
        await signUpFormPageInvalidScenarios.inputNoLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await signUpFormPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await signUpFormPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - No Last Name");
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Please fill in all fields.", "The missing last name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The missing last name input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - No Last Name");
    }
    //invalid user account creation test method - no user email
    async invalidUserAccountCreationNoEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input valid user first name into first name input field
        await signUpFormPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await signUpFormPage.inputLastNameIntoLastNameInputField();
        //don't input user email into email input field
        await signUpFormPageInvalidScenarios.inputNoEmailIntoEmailInputField();
        //input valid user password into password input field
        await signUpFormPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - No Email");
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Please fill in all fields.", "The missing email input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The missing email input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - No Email");
    }
    //invalid user account creation test method - no user password
    async invalidUserAccountCreationNoPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input valid user first name into first name input field
        await signUpFormPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await signUpFormPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await signUpFormPage.inputEmailIntoEmailInputField();
        //don't input user password into password input field
        await signUpFormPageInvalidScenarios.inputNoPasswordIntoPasswordInputField();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - No Password");
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Please fill in all fields.", "The missing password input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The missing password input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - No Password");
    }
    //invalid user account creation test method - no user account usage statement
    async invalidUserAccountCreationNoAccountStatementTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input valid user first name into first name input field
        await signUpFormPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await signUpFormPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await signUpFormPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await signUpFormPage.inputPasswordIntoPasswordInputField();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - No User Account Statement");
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Please state the account usage.", "The missing account usage statement error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The missing account usage statement error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - No Account Usage Statement");
    }
    //invalid user account creation test method - no user agreement with privacy policy
    async invalidUserAccountCreationNoAgreePrivacyPolicyTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input valid user first name into first name input field
        await signUpFormPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await signUpFormPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await signUpFormPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await signUpFormPage.inputPasswordIntoPasswordInputField();
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - No Accept Privacy Policy");
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Please agree with Privacy Policy.", "The missing user privacy policy agreement error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The missing user privacy policy agreement error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - No Accept Privacy Policy");
    }

    //too short singular input

    //invalid user account creation test method - too short user first name (1 char)
    async invalidUserAccountCreationTooShortFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input too short user first name into first name input field (1 char)
        await signUpFormPageInvalidScenarios.inputTooShortFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await signUpFormPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await signUpFormPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await signUpFormPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - Too Short First Name");
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Name is too short.", "The too short first name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short first name input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - Too Short First Name");
    }
    //invalid user account creation test method - too short user last name (1 char)
    async invalidUserAccountCreationTooShortLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input valid user first name into first name input field
        await signUpFormPage.inputFirstNameIntoFirstNameInputField();
        //input too short user last name into last name input field (1 char)
        await signUpFormPageInvalidScenarios.inputTooShortLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await signUpFormPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await signUpFormPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - Too Short Last Name");
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Surname is too short.", "The too short last name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short last name input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - Too Short Last Name");
    }
    //invalid user account creation test method - too short user email (1 char -> name, domain)
    async invalidUserAccountCreationTooShortEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input valid user first name into first name input field
        await signUpFormPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await signUpFormPage.inputLastNameIntoLastNameInputField();
        //input too short user email into email input field (1 char -> name, domain)
        await signUpFormPageInvalidScenarios.inputTooShortEmailIntoEmailInputField();
        //input valid user password into password input field
        await signUpFormPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - Too Short Email");
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Email address is too short.", "The too short email input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short email input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - Too Short Email");
    }
    //invalid user account creation test method - too short user password (4 chars)
    async invalidUserAccountCreationTooShortPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input valid user first name into first name input field
        await signUpFormPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await signUpFormPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await signUpFormPage.inputEmailIntoEmailInputField();
        //input too short user password into password input field (4 chars)
        await signUpFormPageInvalidScenarios.inputTooShortPasswordIntoPasswordInputField();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - Too Short Password");
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Password is too short.", "The too short password input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short password input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - Too Short Password");
    }

    //too long singular input

    //invalid user account creation test method - too long user first name (100 chars)
    async invalidUserAccountCreationTooLongFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input too long user first name into first name input field (100 chars)
        await signUpFormPageInvalidScenarios.inputTooLongFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await signUpFormPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await signUpFormPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await signUpFormPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - Too Long First Name");
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Name is too long.", "The too long first name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long first name input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - Too Long First Name");
    }
    //invalid user account creation test method - too long user last name (100 chars)
    async invalidUserAccountCreationTooLongLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input valid user first name into first name input field
        await signUpFormPage.inputFirstNameIntoFirstNameInputField();
        //input too long user last name into last name input field (100 chars)
        await signUpFormPageInvalidScenarios.inputTooLongLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await signUpFormPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await signUpFormPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - Too Long Last Name");
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Surname is too long.", "The too long last name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long last name input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - Too Long Last Name");
    }
    //invalid user account creation test method - too long user email (100 chars -> name, domain)
    async invalidUserAccountCreationTooLongEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input valid user first name into first name input field
        await signUpFormPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await signUpFormPage.inputLastNameIntoLastNameInputField();
        //input too long user email into email input field (100 chars -> name, domain)
        await signUpFormPageInvalidScenarios.inputTooLongEmailIntoEmailInputField();
        //input valid user password into password input field
        await signUpFormPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - Too Long Email");
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Email address is too long.", "The too long email input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long email input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - Too Long Email");
    }
    //invalid user account creation test method - too long user password (21 chars)
    async invalidUserAccountCreationTooLongPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input valid user first name into first name input field
        await signUpFormPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await signUpFormPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await signUpFormPage.inputEmailIntoEmailInputField();
        //input too long user password into password input field (21 chars)
        await signUpFormPageInvalidScenarios.inputTooLongPasswordIntoPasswordInputField();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - Too Long Password");
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Password is too long.", "The too long password input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long password input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - Too Long Password");
    }

    //invalid singular input format

    //invalid user account creation test method - invalid user first name format (special symbols only)
    async invalidUserAccountCreationInvalidFirstNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input invalid user first name format into first name input field (special symbols only)
        await signUpFormPageInvalidScenarios.inputInvalidFirstNameFormatIntoFirstNameInputField();
        //input valid user last name into last name input field
        await signUpFormPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await signUpFormPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await signUpFormPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - Invalid First Name Input Format");
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Name cannot consist of special symbols only.", "The invalid first name input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid first name input format error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - Invalid First Name Format");
    }
    //invalid user account creation test method - invalid user last name format (special symbols only)
    async invalidUserAccountCreationInvalidLastNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input valid user first name into first name input field
        await signUpFormPage.inputFirstNameIntoFirstNameInputField();
        //input invalid user last name format into last name input field (special symbols only)
        await signUpFormPageInvalidScenarios.inputInvalidLastNameFormatIntoLastNameInputField();
        //input valid user email into email input field
        await signUpFormPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await signUpFormPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - Invalid Last Name Input Format");
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Surname cannot consist of special symbols only.", "The invalid last name input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid last name input format error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - Invalid Last Name Format");
    }
    //invalid user account creation test method - invalid user email format (missing '@')
    async invalidUserAccountCreationInvalidEmailFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input valid user first name into first name input field
        await signUpFormPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await signUpFormPage.inputLastNameIntoLastNameInputField();
        //input invalid user email format into email input field (missing '@')
        await signUpFormPageInvalidScenarios.inputInvalidEmailFormatIntoEmailInputField();
        //input valid user password into password input field
        await signUpFormPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - Invalid Email Input Format");
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Email has to contain '@'.", "The invalid email input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid email input format error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - Invalid Email Format");
    }
    //invalid user account creation test method - existing user email (used beforehand in account creation)
    async invalidUserAccountCreationExistingEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const signUpFormPage = new SignUpFormPage(this.driver);
        const signUpFormPageInvalidScenarios = new SignUpFormPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //click 'Log out' button (it's same button as 'Login' button)
        await generalPage.clickLoginButton()
        //click 'Sign up' button
        await generalPage.clickSignUpButton();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Repeated Sign Up Form Page Display Before Data Input");
        //sign up form page web element assert
        await signUpFormPage.isSignUpFormPagePageWebElementDisplayed();
        //sign up form page text element assert
        await this.isSignUpFormPageTextElementAsExpected();
        //capture screenshot of the sign-up form page before data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page Display Before Data Input");
        //input valid user first name into first name input field
        await signUpFormPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await signUpFormPage.inputLastNameIntoLastNameInputField();
        //input pre-existing user email into email input field (used beforehand during account creation)
        await signUpFormPageInvalidScenarios.inputExistingEmailIntoEmailInputField();
        //input valid user password into password input field
        await signUpFormPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the sign-up form page after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Sign Up Form Page After Invalid Data Input - Existing Email");
        //click 'Myself' radio button
        await signUpFormPage.clickMyselfRadioButton();
        //click 'Accept privacy policy' checkbox
        await signUpFormPage.clickPrivacyPolicyCheckbox();
        //click 'Register' button
        await signUpFormPage.clickRegisterButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await signUpFormPageInvalidScenarios.getSignUpFormPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Email is already in use.", "The invalid email input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid email input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Sign Up Test Result - Existing Email");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid user account edit test

    //valid user account test method
    async validUserAccountEditTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input user first name into first name input field
        await accountPage.inputFirstNameIntoAccPageFirstNameInputField();
        //input user last name into last name input field
        await accountPage.inputLastNameIntoAccPageLastNameInputField();
        //input user address into address input field
        await accountPage.inputAddressIntoAccPageAddressInputField();
        //input user post code into post code input field
        await accountPage.inputPostCodeIntoAccPagePostCodeInputField();
        //input user city into city input field
        await accountPage.inputCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after valid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Valid Data Input");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Account Edition Test Result");
    }

    //invalid user account edit tests

    //no singular input

    //invalid user account test method - no user first name
    async invalidUserAccountEditNoFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //don't input user first name into first name input field
        await accountPageInvalidScenarios.inputNoFirstNameIntoAccPageFirstNameInputField();
        //input user last name into last name input field
        await accountPage.inputLastNameIntoAccPageLastNameInputField();
        //input user address into address input field
        await accountPage.inputAddressIntoAccPageAddressInputField();
        //input user post code into post code input field
        await accountPage.inputPostCodeIntoAccPagePostCodeInputField();
        //input user city into city input field
        await accountPage.inputCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - No First Name");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Please input name.", "The missing first name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The missing first name input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - No First Name");
    }
    //invalid user account test method - no user last name
    async invalidUserAccountEditNoLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input user first name into first name input field
        await accountPage.inputFirstNameIntoAccPageFirstNameInputField();
        //don't input user last name into last name input field
        await accountPageInvalidScenarios.inputNoLastNameIntoAccPageLastNameInputField();
        //input user address into address input field
        await accountPage.inputAddressIntoAccPageAddressInputField();
        //input user post code into post code input field
        await accountPage.inputPostCodeIntoAccPagePostCodeInputField();
        //input user city into city input field
        await accountPage.inputCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - No Last Name");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Please input surname.", "The missing last name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The missing last name input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - No Last Name");
    }
    //invalid user account test method - no user address
    async invalidUserAccountEditNoAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input user first name into first name input field
        await accountPage.inputFirstNameIntoAccPageFirstNameInputField();
        //input user last name into last name input field
        await accountPage.inputLastNameIntoAccPageLastNameInputField();
        //don't input user address into address input field
        await accountPageInvalidScenarios.inputNoAddressIntoAccPageAddressInputField();
        //input user post code into post code input field
        await accountPage.inputPostCodeIntoAccPagePostCodeInputField();
        //input user city into city input field
        await accountPage.inputCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - No Address");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Please input address.", "The missing address input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The missing address input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - No Address");
    }
    //invalid user account test method - no user post code
    async invalidUserAccountEditNoPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input user first name into first name input field
        await accountPage.inputFirstNameIntoAccPageFirstNameInputField();
        //input user last name into last name input field
        await accountPage.inputLastNameIntoAccPageLastNameInputField();
        //input user address into address input field
        await accountPage.inputAddressIntoAccPageAddressInputField();
        //don't input user post code into post code input field
        await accountPageInvalidScenarios.inputNoPostCodeIntoAccPagePostCodeInputField();
        //input user city into city input field
        await accountPage.inputCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - No Post Code");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Please input post code.", "The missing post code input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The missing post code input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - No Post Code");
    }
    //invalid user account test method - no user city
    async invalidUserAccountEditNoCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input user first name into first name input field
        await accountPage.inputFirstNameIntoAccPageFirstNameInputField();
        //input user last name into last name input field
        await accountPage.inputLastNameIntoAccPageLastNameInputField();
        //input user address into address input field
        await accountPage.inputAddressIntoAccPageAddressInputField();
        //input user post code into post code input field
        await accountPage.inputPostCodeIntoAccPagePostCodeInputField();
        //don't input user city into city input field
        await accountPageInvalidScenarios.inputNoCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - No City");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Please input city.", "The missing city input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The missing city input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - No City");
    }

    //too short singular input

    //invalid user account test method - too short user first name (1 char)
    async invalidUserAccountEditTooShortFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input too short user first name into first name input field (1 char)
        await accountPageInvalidScenarios.inputTooShortFirstNameIntoAccPageFirstNameInputField();
        //input user last name into last name input field
        await accountPage.inputLastNameIntoAccPageLastNameInputField();
        //input user address into address input field
        await accountPage.inputAddressIntoAccPageAddressInputField();
        //input user post code into post code input field
        await accountPage.inputPostCodeIntoAccPagePostCodeInputField();
        //input user city into city input field
        await accountPage.inputCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - Too Short First Name");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Name is too short.", "The too short first name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short first name input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - Too Short First Name");
    }
    //invalid user account test method - too short user last name (1 char)
    async invalidUserAccountEditTooShortLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input user first name into first name input field
        await accountPage.inputFirstNameIntoAccPageFirstNameInputField();
        //input too short user last name into last name input field (1 char)
        await accountPageInvalidScenarios.inputTooShortLastNameIntoAccPageLastNameInputField();
        //input user address into address input field
        await accountPage.inputAddressIntoAccPageAddressInputField();
        //input user post code into post code input field
        await accountPage.inputPostCodeIntoAccPagePostCodeInputField();
        //input user city into city input field
        await accountPage.inputCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - Too Short Last Name");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Surname is too short.", "The too short last name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short last name input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - Too Short Last Name");
    }
    //invalid user account test method - too short user address (5 chars)
    async invalidUserAccountEditTooShortAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input user first name into first name input field
        await accountPage.inputFirstNameIntoAccPageFirstNameInputField();
        //input user last name into last name input field
        await accountPage.inputLastNameIntoAccPageLastNameInputField();
        //input too short user address into address input field (5 chars)
        await accountPageInvalidScenarios.inputTooShortAddressIntoAccPageAddressInputField();
        //input user post code into post code input field
        await accountPage.inputPostCodeIntoAccPagePostCodeInputField();
        //input user city into city input field
        await accountPage.inputCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - Too Short Address");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Address is too short.", "The too short address input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short address input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - Too Short Address");
    }
    //invalid user account test method - too short user post code (4 digits)
    async invalidUserAccountEditTooShortPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input user first name into first name input field
        await accountPage.inputFirstNameIntoAccPageFirstNameInputField();
        //input user last name into last name input field
        await accountPage.inputLastNameIntoAccPageLastNameInputField();
        //input user address into address input field
        await accountPage.inputAddressIntoAccPageAddressInputField();
        //input too short user post code into post code input field (4 digits)
        await accountPageInvalidScenarios.inputTooShortPostCodeIntoAccPagePostCodeInputField();
        //input user city into city input field
        await accountPage.inputCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - Too Short Post Code");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Post code is too short.", "The too short post code input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short post code input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - Too Short Post Code");
    }
    //invalid user account test method - too short user city (4 digits)
    async invalidUserAccountEditTooShortCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input user first name into first name input field
        await accountPage.inputFirstNameIntoAccPageFirstNameInputField();
        //input user last name into last name input field
        await accountPage.inputLastNameIntoAccPageLastNameInputField();
        //input user address into address input field
        await accountPage.inputAddressIntoAccPageAddressInputField();
        //input user post code into post code input field
        await accountPage.inputPostCodeIntoAccPagePostCodeInputField();
        //input too short user city into city input field (2 chars)
        await accountPageInvalidScenarios.inputTooShortCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - Too Short City");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "City is too short.", "The too short city input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too short city input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - Too Short City");
    }

    //too long singular input

    //invalid user account test method - too long user first name (100 chars)
    async invalidUserAccountEditTooLongFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input too long user first name into first name input field (100 chars)
        await accountPageInvalidScenarios.inputTooLongFirstNameIntoAccPageFirstNameInputField();
        //input user last name into last name input field
        await accountPage.inputLastNameIntoAccPageLastNameInputField();
        //input user address into address input field
        await accountPage.inputAddressIntoAccPageAddressInputField();
        //input user post code into post code input field
        await accountPage.inputPostCodeIntoAccPagePostCodeInputField();
        //input user city into city input field
        await accountPage.inputCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - Too Long First Name");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Name is too long.", "The too long first name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long first name input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - Too Long First Name");
    }
    //invalid user account test method - too long user last name (100 chars)
    async invalidUserAccountEditTooLongLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input user first name into first name input field
        await accountPage.inputFirstNameIntoAccPageFirstNameInputField();
        //input too long user last name into last name input field (100 chars)
        await accountPageInvalidScenarios.inputTooLongLastNameIntoAccPageLastNameInputField();
        //input user address into address input field
        await accountPage.inputAddressIntoAccPageAddressInputField();
        //input user post code into post code input field
        await accountPage.inputPostCodeIntoAccPagePostCodeInputField();
        //input user city into city input field
        await accountPage.inputCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - Too Long Last Name");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Surname is too long.", "The too long last name input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long last name input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - Too Long Last Name");
    }
    //invalid user account test method - too long user address (100 chars)
    async invalidUserAccountEditTooLongAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input user first name into first name input field
        await accountPage.inputFirstNameIntoAccPageFirstNameInputField();
        //input user last name into last name input field
        await accountPage.inputLastNameIntoAccPageLastNameInputField();
        //input too short user address into address input field (100 chars)
        await accountPageInvalidScenarios.inputTooLongAddressIntoAccPageAddressInputField();
        //input user post code into post code input field
        await accountPage.inputPostCodeIntoAccPagePostCodeInputField();
        //input user city into city input field
        await accountPage.inputCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - Too Long Address");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Address is too long.", "The too long address input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long address input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - Too Long Address");
    }
    //invalid user account test method - too long user post code (25 digits)
    async invalidUserAccountEditTooLongPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input user first name into first name input field
        await accountPage.inputFirstNameIntoAccPageFirstNameInputField();
        //input user last name into last name input field
        await accountPage.inputLastNameIntoAccPageLastNameInputField();
        //input user address into address input field
        await accountPage.inputAddressIntoAccPageAddressInputField();
        //input too long user post code into post code input field (25 digits)
        await accountPageInvalidScenarios.inputTooLongPostCodeIntoAccPagePostCodeInputField();
        //input user city into city input field
        await accountPage.inputCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - Too Long Post Code");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Post code is too long.", "The too long post code input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long post code input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - Too Long Post Code");
    }
    //invalid user account test method - too long user city (75 chars)
    async invalidUserAccountEditTooLongCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input user first name into first name input field
        await accountPage.inputFirstNameIntoAccPageFirstNameInputField();
        //input user last name into last name input field
        await accountPage.inputLastNameIntoAccPageLastNameInputField();
        //input user address into address input field
        await accountPage.inputAddressIntoAccPageAddressInputField();
        //input user post code into post code input field
        await accountPage.inputPostCodeIntoAccPagePostCodeInputField();
        //input too long user city into city input field (75 chars)
        await accountPageInvalidScenarios.inputTooLongCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - Too Long City");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "City is too long.", "The too long city input error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The too long city input error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - Too Long City");
    }

    //invalid singular input format

    //invalid user account test method - invalid user first name format (special symbols only)
    async invalidUserAccountEditInvalidFirstNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input invalid user first name format into first name input field (special symbols only)
        await accountPageInvalidScenarios.inputInvalidFirstNameFormatIntoAccPageFirstNameInputField();
        //input user last name into last name input field
        await accountPage.inputLastNameIntoAccPageLastNameInputField();
        //input user address into address input field
        await accountPage.inputAddressIntoAccPageAddressInputField();
        //input user post code into post code input field
        await accountPage.inputPostCodeIntoAccPagePostCodeInputField();
        //input user city into city input field
        await accountPage.inputCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - Invalid First Name Input Format");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Name cannot consist of special symbols only.", "The invalid first name input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid first name input format error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - Invalid First Name Format");
    }
    //invalid user account test method - invalid user last name format (special symbols only)
    async invalidUserAccountEditInvalidLastNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input user first name format into first name input field
        await accountPage.inputFirstNameIntoAccPageFirstNameInputField();
        //input invalid user last name format into last name input field (special symbols only)
        await accountPageInvalidScenarios.inputInvalidLastNameFormatIntoAccPageLastNameInputField();
        //input user address into address input field
        await accountPage.inputAddressIntoAccPageAddressInputField();
        //input user post code into post code input field
        await accountPage.inputPostCodeIntoAccPagePostCodeInputField();
        //input user city into city input field
        await accountPage.inputCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - Invalid Last Name Input Format");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Surname cannot consist of special symbols only.", "The invalid last name input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid last name input format error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - Invalid Last Name Format");
    }
    //invalid user account test method - invalid user address format (special symbols only)
    async invalidUserAccountEditInvalidAddressFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input user first name format into first name input field
        await accountPage.inputFirstNameIntoAccPageFirstNameInputField();
        //input user last name format into last name input field
        await accountPage.inputLastNameIntoAccPageLastNameInputField();
        //input invalid user address format into address input field (special symbols only)
        await accountPageInvalidScenarios.inputInvalidAddressFormatIntoAccPageAddressInputField();
        //input user post code into post code input field
        await accountPage.inputPostCodeIntoAccPagePostCodeInputField();
        //input user city into city input field
        await accountPage.inputCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - Invalid Address Input Format");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Address cannot consist of special symbols only.", "The invalid address input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid address input format error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - Invalid Address Format");
    }
    //invalid user account test method - invalid user post code format (special symbols only)
    async invalidUserAccountEditInvalidPostCodeFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input user first name format into first name input field
        await accountPage.inputFirstNameIntoAccPageFirstNameInputField();
        //input user last name format into last name input field
        await accountPage.inputLastNameIntoAccPageLastNameInputField();
        //input user address into address input field
        await accountPage.inputAddressIntoAccPageAddressInputField();
        //input invalid user post code format into post code input field (special symbols only)
        await accountPageInvalidScenarios.inputInvalidPostCodeFormatIntoAccPagePostCodeInputField();
        //input user city into city input field
        await accountPage.inputCityIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - Invalid Post Code Input Format");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "Post code cannot consist of special symbols only.", "The invalid post code input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid post code input format error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - Invalid Post Code Format");
    }
    //invalid user account test method - invalid user city format (special symbols only)
    async invalidUserAccountEditInvalidCityFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const accountPage = new AccountPage(this.driver);
        const accountPageInvalidScenarios = new AccountPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'My Account' button
        await generalPage.clickMyAccountButton();
        //capture screenshot of the 'my account' page display
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display");
        //account page web element assert
        await accountPage.isAccountPagePageWebElementDisplayed();
        //account page text element assert
        await this.isAccountPageTextElementAsExpected();
        //account page user details section assert
        await this.isAccountPageUserDetailsSectionDataAsExpected();
        //log order invoice data (it's present before submission)
        await this.logAccountPageOrderInvoiceData();
        //capture screenshot of the 'my account' page display before data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display Before Data Input");
        //input user first name format into first name input field
        await accountPage.inputFirstNameIntoAccPageFirstNameInputField();
        //input user last name format into last name input field
        await accountPage.inputLastNameIntoAccPageLastNameInputField();
        //input user address into address input field
        await accountPage.inputAddressIntoAccPageAddressInputField();
        //input user post code format into post code input field
        await accountPage.inputPostCodeIntoAccPagePostCodeInputField();
        //input invalid user city format into city input field (special symbols only)
        await accountPageInvalidScenarios.inputInvalidCityFormatIntoAccPageCityInputField();
        //capture screenshot of the 'my account' page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "User Account Page Display After Invalid Data Input - Invalid City Input Format");
        //click 'Update' button
        await accountPage.clickUpdateButton();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const errorMessage = await accountPageInvalidScenarios.getAccountPageInputErrorMessage();
            assert.strictEqual(errorMessage, "City cannot consist of special symbols only.", "The invalid city input format error message doesn't match expectations.");
        } catch (e) {
            Logger.error("The invalid city input format error message hasn't been triggered, test has failed");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Edition Test Result - Invalid City Format");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //user logout test method
    async userLogoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'Log out' button (it's same button as 'Login' button)
        await generalPage.clickLoginButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "User Account Logout Test Result");
    }

    //valid user account login test

    //valid user login test method
    async validUserLoginTest(){
        const generalPage = new GeneralPage(this.driver);
        const loginFormPage = new LoginFormPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //click 'Login' button
        await generalPage.clickLoginButton();
        //capture screenshot of the login form page display before data input
        await TestMethods.captureScreenshot(this.driver, "Login Form Page Display Before Data Input");
        //login form page web element assert
        await loginFormPage.isLoginFormPagePageWebElementDisplayed();
        //login form page text element assert
        await this.isLoginFormPageTextElementAsExpected();
        //input valid user login email into email input field
        await loginFormPage.inputValidUserEmailIntoLoginEmailInputField();
        //input valid user login password into email input field
        await loginFormPage.inputValidUserPasswordIntoLoginPasswordInputField();
        //capture screenshot of the login form page display after valid data input
        await TestMethods.captureScreenshot(this.driver, "Login Form Page Display After Valid Data Input");
        //click 'Sign in' button
        await loginFormPage.clickSigninButton();
        //if the login somehow fails, log the issue
        const errorElement = await loginFormPage.getLoginInputErrorMessage();
        if(errorElement.length === 0) {
            Logger.info("The login has proceeded successfully. Test has passed");
        } else {
            assert.strictEqual(errorElement, "The email and/or password you have provided is incorrect.", "The expected error message doesn't match expectations")
            Logger.error(`The login has failed with valid user login credentials. The error message displayed: ${errorElement} Test has failed.`);
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Account Login Test Result");
    }

    //invalid user login tests

    //no singular input

    //invalid user login test method - no user login email
    async invalidUserLoginNoEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const loginFormPage = new LoginFormPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //click 'Login' button
        await generalPage.clickLoginButton();
        //capture screenshot of the login form page display before data input
        await TestMethods.captureScreenshot(this.driver, "Login Form Page Display Before Data Input");
        //login form page web element assert
        await loginFormPage.isLoginFormPagePageWebElementDisplayed();
        //login form page text element assert
        await this.isLoginFormPageTextElementAsExpected();
        //don't input user login email into email input field
        await loginFormPage.inputNoUserEmailIntoLoginEmailInputField();
        //input valid user login password into email input field
        await loginFormPage.inputValidUserPasswordIntoLoginPasswordInputField();
        //capture screenshot of the login form page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Login Form Page Display After Invalid Data Input - No Login Email");
        //click 'Sign in' button
        await loginFormPage.clickSigninButton();
        //assert the user gets an expected error message
        const errorElement = await loginFormPage.getLoginInputErrorMessage();
        assert.strictEqual(errorElement, "Please fill in all fields.", "The missing login email error message doesn't match expectations")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Login Test Result - No Login Email");
    }
    //invalid user login test method - no user login password
    async invalidUserLoginNoPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const loginFormPage = new LoginFormPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //click 'Login' button
        await generalPage.clickLoginButton();
        //capture screenshot of the login form page display before data input
        await TestMethods.captureScreenshot(this.driver, "Login Form Page Display Before Data Input");
        //login form page web element assert
        await loginFormPage.isLoginFormPagePageWebElementDisplayed();
        //login form page text element assert
        await this.isLoginFormPageTextElementAsExpected();
        //input valid user login email into email input field
        await loginFormPage.inputValidUserEmailIntoLoginEmailInputField();
        //don't input user login password into email input field
        await loginFormPage.inputNoUserPasswordIntoLoginPasswordInputField();
        //capture screenshot of the login form page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Login Form Page Display After Invalid Data Input - No Login Password");
        //click 'Sign in' button
        await loginFormPage.clickSigninButton();
        //assert the user gets an expected error message
        const errorElement = await loginFormPage.getLoginInputErrorMessage();
        assert.strictEqual(errorElement, "Please fill in all fields.", "The missing login password error message doesn't match expectations")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Login Test Result - No Login Password");
    }

    //invalid singular input

    //invalid user login test method - invalid user login email
    async invalidUserLoginInvalidEmailTest(){
        const generalPage = new GeneralPage(this.driver);
        const loginFormPage = new LoginFormPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //click 'Login' button
        await generalPage.clickLoginButton();
        //capture screenshot of the login form page display before data input
        await TestMethods.captureScreenshot(this.driver, "Login Form Page Display Before Data Input");
        //login form page web element assert
        await loginFormPage.isLoginFormPagePageWebElementDisplayed();
        //login form page text element assert
        await this.isLoginFormPageTextElementAsExpected();
        //input invalid user login email into email input field
        await loginFormPage.inputInvalidUserEmailIntoLoginEmailInputField();
        //input valid user login password into email input field
        await loginFormPage.inputValidUserPasswordIntoLoginPasswordInputField();
        //capture screenshot of the login form page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Login Form Page Display After Invalid Data Input - Invalid Login Email");
        //click 'Sign in' button
        await loginFormPage.clickSigninButton();
        //assert the user gets an expected error message
        const errorElement = await loginFormPage.getLoginInputErrorMessage();
        assert.strictEqual(errorElement, "The email and/or password you have provided is incorrect.", "The invalid login email error message doesn't match expectations")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Login Test Result - Invalid Login Email");
    }
    //invalid user login test method - invalid user login password
    async invalidUserLoginInvalidPasswordTest(){
        const generalPage = new GeneralPage(this.driver);
        const loginFormPage = new LoginFormPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //click 'Login' button
        await generalPage.clickLoginButton();
        //capture screenshot of the login form page display before data input
        await TestMethods.captureScreenshot(this.driver, "Login Form Page Display Before Data Input");
        //login form page web element assert
        await loginFormPage.isLoginFormPagePageWebElementDisplayed();
        //login form page text element assert
        await this.isLoginFormPageTextElementAsExpected();
        //input valid user login email into email input field
        await loginFormPage.inputValidUserEmailIntoLoginEmailInputField();
        //input invalid user login password into email input field
        await loginFormPage.inputInvalidUserPasswordIntoLoginPasswordInputField();
        //capture screenshot of the login form page display after invalid data input
        await TestMethods.captureScreenshot(this.driver, "Login Form Page Display After Invalid Data Input - Invalid Login Password");
        //click 'Sign in' button
        await loginFormPage.clickSigninButton();
        //assert the user gets an expected error message
        const errorElement = await loginFormPage.getLoginInputErrorMessage();
        assert.strictEqual(errorElement, "The email and/or password you have provided is incorrect.", "The invalid login password error message doesn't match expectations")
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Login Test Result - Invalid Login Password");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //home page product/products addition to cart tests

    //home page set product ('The Grand Grotsby') addition to cart test method
    async addHomePageGrandGrotsbyBookToCart(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'Grand Grotsby' book product card
        await homePage.clickGrandGrotsbyProductCard();
        //capture screenshot of the single product page
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display - 'The Grand Grotsby'");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //log single product page product data ('The Grand Grotsby')
        await this.logSingleProductPageProductData();
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Home Page Product ('The Grand Grotsby') Addition To Cart Test Result");
    }
    //home page multiple products ('The Grand Grotsby', 'The Pickled Lynx') addition to cart test method
    async addMultipleHomePageBooksToCart(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'Grand Grotsby' book product card
        await homePage.clickGrandGrotsbyProductCard();
        //capture screenshot of the single product page
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display - 'The Grand Grotsby'");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //log single product page product data ('The Grand Grotsby')
        await this.logSingleProductPageProductData();
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //click 'Homepage' logo link
        await generalPage.clickHomePageLogoLink();
        //click 'The Pickled Lynx' book product card
        await homePage.clickPickledLynxProductCard();
        //capture screenshot of the single product page
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display - 'The Pickled Lynx'");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //log single product page product data ('The Pickled Lynx')
        await this.logSingleProductPageProductData();
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Home Page Multiple Products ('The Grand Grotsby', 'The Pickled Lynx') Addition To Cart Test Result");
    }

    //home page searched product/products addition to cart test

    //home page set searched product ('The Fjord of the Lies') addition to cart test method
    async addSearchedBookFjordToCart(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //input product search query
        await generalPage.inputProductFjordSearchQuery();
        //click 'Search' button
        await generalPage.clickSearchButton();
        //capture screenshot of the single product page
        await TestMethods.captureScreenshot(this.driver, "Searched Product Page Display - 'The Fjord of the Lies'");
        //click searched product card
        await homePage.clickFjordProductCard();
        //capture screenshot of the single product page
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display - 'The Fjord of the Lies'");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //log single product page product data ('The Fjord of the Lies')
        await this.logSingleProductPageProductData();
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Searched Product ('The Fjord of the Lies') Addition To Cart Test Result");
    }
    //home page multiple searched products ('The Fjord of the Lies','Mostly on the Road') addition to cart test method
    async addMultipleSearchedBooksFjordAndRoadToCart(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //input product search query ('The Fjord of the Lies')
        await generalPage.inputProductFjordSearchQuery();
        //click 'Search' button
        await generalPage.clickSearchButton();
        //capture screenshot of the single product page
        await TestMethods.captureScreenshot(this.driver, "Searched Product Page Display - 'The Fjord of the Lies'");
        //click searched product card ('The Fjord of the Lies')
        await homePage.clickFjordProductCard();
        //capture screenshot of the single product page
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display - 'The Fjord of the Lies'");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //log single product page product data ('The Fjord of the Lies')
        await this.logSingleProductPageProductData();
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //click 'Homepage' logo link
        await generalPage.clickHomePageLogoLink();
        //input product search query ('Mostly on the Road')
        await generalPage.inputProductRoadSearchQuery();
        //click 'Search' button
        await generalPage.clickSearchButton();
        //capture screenshot of the single product page
        await TestMethods.captureScreenshot(this.driver, "Searched Product Page Display - 'Mostly on the Road'");
        //click searched product card ('Mostly on the Road')
        await homePage.clickFjordProductCard();
        //capture screenshot of the single product page
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display - 'Mostly on the Road'");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //log single product page product data ('The Fjord of the Lies', 'Mostly on the Road')
        await this.logSingleProductPageProductData();
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Multiple Searched Product ('The Fjord of the Lies', 'Mostly on the Road') Addition To Cart Test Result");
    }

    //home page searched product/products addition to cart tests

    //single category product page product ('The Insiders') addition to cart test method
    async addSingleCategoryProductToCart(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'Crime & Thrillers' aside books category link
        await generalPage.clickAsideCrimeLink();
        //capture screenshot of the single category product page
        await TestMethods.captureScreenshot(this.driver, "Single Category Product Page Display - Crime and Thrillers");
        //click set product ('The Insiders') card
        await homePage.clickInsidersProductCard();
        //capture screenshot of the single product page
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display - 'The Insiders'");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //log single product page product data ('The Insiders')
        await this.logSingleProductPageProductData();
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Single Category Product ('The Insiders') Addition To Cart Test Result");
    }
    //single category product page multiple products ('The Insiders','Does the Sun Also Rise?') addition to cart test method
    async addSingleCategoryMultipleProductsToCart(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page aside section web element assert
        await generalPage.isGeneralPageAsideWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //general page aside link text element assert
        await this.isGeneralPageAsideLinkTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'Crime & Thrillers' aside books category link
        await generalPage.clickAsideCrimeLink();
        //capture screenshot of the single category product page
        await TestMethods.captureScreenshot(this.driver, "Single Category Product Page Display - Crime and Thrillers");
        //click set product ('The Insiders') card
        await homePage.clickInsidersProductCard();
        //capture screenshot of the single product page
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display - 'The Insiders'");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //log single product page product data ('The Insiders')
        await this.logSingleProductPageProductData();
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //click 'Homepage' logo link
        await generalPage.clickHomePageLogoLink();
        //click 'Crime & Thrillers' aside books category link
        await generalPage.clickAsideCrimeLink();
        //capture screenshot of the single category product page
        await TestMethods.captureScreenshot(this.driver, "Single Category Product Page Display - Crime and Thrillers");
        //click set product ('Does the Sun Also Rise?') card
        await homePage.clickSunriseProductCard();
        //capture screenshot of the single product page
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Display - 'Does the Sun Also Rise?'");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //log single product page product data ('Does the Sun Also Rise?')
        await this.logSingleProductPageProductData();
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Single Category Product ('The Insiders','Does the Sun Also Rise?') Addition To Cart Test Result");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //shopping cart page test

    //product/products addition to check out test method
    async addProductToCheckoutTest(){
        const generalPage = new GeneralPage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //shopping cart page web element assert
        await shoppingCartPage.isShoppingPageWebElementDisplayed();
        //shopping cart text element assert
        await this.isShoppingCartTextElementAsExpected();
        //log shopping cart test data
        await this.logShoppingCartProductData();
        //click 'Checkout' button
        await shoppingCartPage.clickCheckoutButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Product/s Addition To Checkout Test Result");
    }

    //product removal from shopping cart page test

    //product removal from shopping cart test method
    async removeProductFromShoppingCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //shopping cart page web element assert
        await shoppingCartPage.isShoppingPageWebElementDisplayed();
        //shopping cart text element assert
        await this.isShoppingCartTextElementAsExpected();
        //log shopping cart test data
        await this.logShoppingCartProductData();
        //click 'Empty cart' button
        await shoppingCartPage.clickEmptyCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Product/s Addition To Checkout Test Result");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid check out page tests (as a guest) (since registered user can't log into the created account, its testing is paused till the issue will be resolved)
    //(Important visual bugs note:
    // 1: even if the company input field is being marked as 'optional' in both shipping and billing addresses, they are being treated as required
    // 2: the scroll up/down doesn't work on this page so it's impossible to visually verify billing address section elements / error message.)

    //valid order checkout test method (shipping address only -> as soon as possible shipping)
    async validOrderCheckoutShipAddressAsSoonOnlyTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //assert the user gets the expected success recap message
        const checkoutRecapMessage = await checkoutPage.getCheckoutRecapSuccessMessage();
        assert.strictEqual(checkoutRecapMessage, "All good, order is on the way. Thank you!!", "The checkout recap success message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Guest Order Checkout (Shipping Address Only - 'As Soon As' shipping option) Test Result");
    }
    //valid order checkout test method (shipping address only -> single package shipping)
    async validOrderCheckoutShipAddressSinglePkgOnlyTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'Single package' shipping radio button
        await checkoutPage.clickSinglePkgRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //assert the user gets the expected success recap message
        const checkoutRecapMessage = await checkoutPage.getCheckoutRecapSuccessMessage();
        assert.strictEqual(checkoutRecapMessage, "All good, order is on the way. Thank you!!", "The checkout recap success message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Guest Order Checkout (Shipping Address Only - 'Single Package' shipping option) Test Result");
    }

    //check out page shipping and billing address tests

    //valid order checkout test method (shipping address and billing address -> as soon as possible shipping)
    async validOrderCheckoutShipAndBillAddressAsSoonOnlyTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input valid guest first name into billing address first name input field
        await checkoutPage.inputGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Data Input");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //assert the user gets the expected success recap message
        const checkoutRecapMessage = await checkoutPage.getCheckoutRecapSuccessMessage();
        assert.strictEqual(checkoutRecapMessage, "All good, order is on the way. Thank you!!", "The checkout recap success message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Guest Order Checkout (Shipping Address And Billing Address - 'As Soon As' shipping option) Test Result");
    }
    //valid order checkout test method (shipping address and billing address -> single package shipping)
    async validOrderCheckoutShipAndBillAddressSinglePkgOnlyTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'Single package' shipping radio button
        await checkoutPage.clickSinglePkgRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input valid guest first name into billing address first name input field
        await checkoutPage.inputGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Valid Guest Data Input");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //assert the user gets the expected success recap message
        const checkoutRecapMessage = await checkoutPage.getCheckoutRecapSuccessMessage();
        assert.strictEqual(checkoutRecapMessage, "All good, order is on the way. Thank you!!", "The checkout recap success message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Guest Order Checkout (Shipping Address And Billing Address - 'Single Package' shipping option) Test Result");
    }

    //invalid guest checkout tests (for both shipping and billing address sections)

    //no singular input

    //shipping address section

    //invalid order checkout test method (shipping address) - no guest shipping address first name
    async invalidOrderCheckoutShipAddressNoGuestFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //don't input guest first name into shipping address first name input field
        await checkoutPageInvalidScenarios.inputNoGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - No Guest Shipping Address First Name");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //assert the user gets the expected error message
        const checkoutInvalidInputError = await checkoutPageInvalidScenarios.getCheckoutPageInvalidInputErrorMessage();
        assert.strictEqual(checkoutInvalidInputError, "Please fill in all fields.", "The checkout missing shipping first name error message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - No Shipping Address First Name");
    }
    //invalid order checkout test method (shipping address) - no guest shipping address last name
    async invalidOrderCheckoutShipAddressNoGuestLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //don't input guest last name into shipping address last name input field
        await checkoutPageInvalidScenarios.inputNoGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - No Guest Shipping Address Last Name");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //assert the user gets the expected error message
        const checkoutInvalidInputError = await checkoutPageInvalidScenarios.getCheckoutPageInvalidInputErrorMessage();
        assert.strictEqual(checkoutInvalidInputError, "Please fill in all fields.", "The checkout missing shipping last name error message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - No Shipping Address Last Name");
    }
    //invalid order checkout test method (shipping address) - no guest shipping address
    async invalidOrderCheckoutShipAddressNoGuestAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //don't input guest address into shipping address input field
        await checkoutPageInvalidScenarios.inputNoGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - No Guest Shipping Address");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //assert the user gets the expected error message
        const checkoutInvalidInputError = await checkoutPageInvalidScenarios.getCheckoutPageInvalidInputErrorMessage();
        assert.strictEqual(checkoutInvalidInputError, "Please fill in all fields.", "The checkout missing shipping address error message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - No Shipping Address");
    }
    //invalid order checkout test method (shipping address) - no guest shipping post code
    async invalidOrderCheckoutShipAddressNoGuestPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //don't input guest post code into shipping address post code input field
        await checkoutPageInvalidScenarios.inputNoGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - No Guest Shipping Address Post Code");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //assert the user gets the expected error message
        const checkoutInvalidInputError = await checkoutPageInvalidScenarios.getCheckoutPageInvalidInputErrorMessage();
        assert.strictEqual(checkoutInvalidInputError, "Please fill in all fields.", "The checkout missing shipping post code error message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - No Shipping Post Code");
    }
    //invalid order checkout test method (shipping address) - no guest shipping city
    async invalidOrderCheckoutShipAddressNoGuestCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //don't input guest city into shipping address city input field
        await checkoutPageInvalidScenarios.inputNoGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - No Guest Shipping Address City");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //assert the user gets the expected error message
        const checkoutInvalidInputError = await checkoutPageInvalidScenarios.getCheckoutPageInvalidInputErrorMessage();
        assert.strictEqual(checkoutInvalidInputError, "Please fill in all fields.", "The checkout missing shipping city error message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - No Shipping City");
    }
    //invalid order checkout test method (shipping address) - no guest shipping company
    async invalidOrderCheckoutShipAddressNoGuestCompanyTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //don't input guest company into shipping address company input field
        await checkoutPageInvalidScenarios.inputNoGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - No Guest Shipping Address Company");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //assert the user gets the expected error message
        const checkoutInvalidInputError = await checkoutPageInvalidScenarios.getCheckoutPageInvalidInputErrorMessage();
        assert.strictEqual(checkoutInvalidInputError, "Please fill in all fields.", "The checkout missing shipping company input error message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - No Shipping Company");
    }
    //invalid order checkout test method (shipping address) - no guest shipping method selection
    async invalidOrderCheckoutShipAddressNoGuestShipMethodTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //assert the user gets the expected error message, log the issue otherwise
        try {
            const checkoutInvalidInputError = await checkoutPageInvalidScenarios.getCheckoutPageInvalidInputErrorMessage();
            assert.strictEqual(checkoutInvalidInputError, "Please select a shipping method.", "The checkout missing shipping method input error message doesn't match expectations.");
        } catch (e) {
            Logger.info ("The missing shipping method input error message hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - No Shipping Method Selection");
    }

    //billing address section

    //invalid order checkout test method (billing address) - no guest billing first name
    async invalidOrderCheckoutBillAddressNoGuestFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //don't input guest first name into billing address first name input field
        await checkoutPageInvalidScenarios.inputNoGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - No Billing First Name");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The missing billing address first name input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - No Billing First Name");
    }
    //invalid order checkout test method (billing address) - no guest billing last name
    async invalidOrderCheckoutBillAddressNoGuestLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input valid guest first name into billing address first name input field
        await checkoutPage.inputGuestFirstNameIntoBillAddressFirstNameInputField();
        //don't input guest last name into billing address last name input field
        await checkoutPageInvalidScenarios.inputNoGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - No Billing Last Name");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The missing billing address last name input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - No Billing Last Name");
    }
    //invalid order checkout test method (billing address) - no guest billing address
    async invalidOrderCheckoutBillAddressNoGuestAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input valid guest first name into billing address first name input field
        await checkoutPage.inputGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //don't input guest address into billing address input field
        await checkoutPageInvalidScenarios.inputNoGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - No Billing Address");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The missing billing address input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - No Billing Address");
    }
    //invalid order checkout test method (billing address) - no guest billing post code
    async invalidOrderCheckoutBillAddressNoGuestPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input valid guest first name into billing address first name input field
        await checkoutPage.inputGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //don't input guest post code into billing address post code input field
        await checkoutPageInvalidScenarios.inputNoGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - No Billing Post Code");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The missing billing post code input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - No Billing Post Code");
    }
    //invalid order checkout test method (billing address) - no guest billing city
    async invalidOrderCheckoutBillAddressNoGuestCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input valid guest first name into billing address first name input field
        await checkoutPage.inputGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //don't input guest city into billing address city input field
        await checkoutPageInvalidScenarios.inputNoGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - No Billing City");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The missing billing city input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - No Billing City");
    }
    //invalid order checkout test method (billing address) - no guest billing company
    async invalidOrderCheckoutBillAddressNoGuestCompanyTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input valid guest first name into billing address first name input field
        await checkoutPage.inputGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //don't input guest company into billing address company input field
        await checkoutPageInvalidScenarios.inputNoGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - No Billing Company");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The missing billing city input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - No Billing Company");
    }

    //too short singular input

    //shipping address section

    //invalid order checkout test method (shipping address) - too short guest shipping address first name (1 char)
    async invalidOrderCheckoutShipAddressTooShortGuestFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input too short guest first name into shipping address first name input field (1 char)
        await checkoutPageInvalidScenarios.inputTooShortGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Too Short Guest Shipping Address First Name");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too short shipping first name input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Too Short Shipping Address First Name");
    }
    //invalid order checkout test method (shipping address) - too short guest shipping address last name (1 char)
    async invalidOrderCheckoutShipAddressTooShortGuestLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input too short guest last name into shipping address last name input field
        await checkoutPageInvalidScenarios.inputTooShortGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Too Short Guest Shipping Address Last Name");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too short shipping last name input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Too Short Shipping Address Last Name");
    }
    //invalid order checkout test method (shipping address) - too short guest shipping address (4 chars)
    async invalidOrderCheckoutShipAddressTooShortGuestAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input too short guest address into shipping address input field
        await checkoutPageInvalidScenarios.inputTooShortGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Too Short Guest Shipping Address");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too short shipping address input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Too Short Shipping Address");
    }
    //invalid order checkout test method (shipping address) - too short guest shipping post code (4 digits)
    async invalidOrderCheckoutShipAddressTooShortGuestPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input too short guest post code into shipping address post code input field (4 digits)
        await checkoutPageInvalidScenarios.inputTooShortGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Too Short Guest Shipping Address Post Code");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too short shipping address post code input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Too Short Shipping Address Post Code");
    }
    //invalid order checkout test method (shipping address) - too short guest shipping city (1 char)
    async invalidOrderCheckoutShipAddressTooShortGuestCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input too short guest city into shipping address city input field (1 char)
        await checkoutPageInvalidScenarios.inputTooShortGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Too Short Guest Shipping Address City");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too short shipping address city input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Too Short Shipping Address City");
    }
    //invalid order checkout test method (shipping address) - too short guest shipping company (1 char)
    async invalidOrderCheckoutShipAddressTooShortGuestCompanyTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input too short guest company into shipping address company input field (1 char)
        await checkoutPageInvalidScenarios.inputTooShortGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Too Short Guest Shipping Address Company");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too short shipping address company input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Too Short Shipping Address Company");
    }

    //billing address section

    //invalid order checkout test method (billing address) - too short guest billing first name (1 char)
    async invalidOrderCheckoutBillAddressTooShortGuestFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input too short guest first name into billing address first name input field (1 char)
        await checkoutPageInvalidScenarios.inputTooShortGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - Too Short Billing First Name");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too short billing address first name input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - Too Short Billing First Name");
    }
    //invalid order checkout test method (billing address) - too short guest billing last name (1 char)
    async invalidOrderCheckoutBillAddressTooShortGuestLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input valid guest first name into billing address first name input field
        await checkoutPage.inputGuestFirstNameIntoBillAddressFirstNameInputField();
        //input too short guest last name into billing address last name input field (1 char)
        await checkoutPageInvalidScenarios.inputTooShortGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - Too Short Billing Last Name");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too short billing address last name input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - Too Short Billing Last Name");
    }
    //invalid order checkout test method (billing address) - too short guest billing address (4 chars)
    async invalidOrderCheckoutBillAddressTooShortGuestAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input valid guest first name into billing address first name input field
        await checkoutPage.inputGuestFirstNameIntoBillAddressFirstNameInputField();
        //input guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //input too short guest address into billing address input field (4 chars)
        await checkoutPageInvalidScenarios.inputTooShortGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - Too Short Billing Address");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too short billing address input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - Too Short Billing Address");
    }
    //invalid order checkout test method (billing address) - too short guest billing post code (4 digits)
    async invalidOrderCheckoutBillAddressTooShortGuestPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input valid guest first name into billing address first name input field
        await checkoutPage.inputGuestFirstNameIntoBillAddressFirstNameInputField();
        //input guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //input  guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //input too short guest post code into billing address post code input field (4 digits)
        await checkoutPageInvalidScenarios.inputTooShortGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - Too Short Billing Post Code");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too short billing post code input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - Too Short Billing Post Code");
    }
    //invalid order checkout test method (billing address) - too short guest billing city (1 char)
    async invalidOrderCheckoutBillAddressTooShortGuestCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input valid guest first name into billing address first name input field
        await checkoutPage.inputGuestFirstNameIntoBillAddressFirstNameInputField();
        //input guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //input  guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //input too short guest city into billing address city input field (1 char)
        await checkoutPageInvalidScenarios.inputTooShortGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - Too Short Billing City");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too short billing city input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - Too Short Billing City");
    }
    //invalid order checkout test method (billing address) - too short guest billing company (1 char)
    async invalidOrderCheckoutBillAddressTooShortGuestCompanyTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input valid guest first name into billing address first name input field
        await checkoutPage.inputGuestFirstNameIntoBillAddressFirstNameInputField();
        //input guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //input  guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //input too short guest company into billing address company input field (1 char)
        await checkoutPageInvalidScenarios.inputTooShortGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - Too Short Billing Company");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too short billing company input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - Too Short Billing Company");
    }

    //too long singular input

    //shipping address section

    //invalid order checkout test method (shipping address) - too long guest shipping address first name (100 chars)
    async invalidOrderCheckoutShipAddressTooLongGuestFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input too long guest first name into shipping address first name input field (100 chars)
        await checkoutPageInvalidScenarios.inputTooLongGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Too Long Guest Shipping Address First Name");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too long shipping first name input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Too Long Shipping Address First Name");
    }
    //invalid order checkout test method (shipping address) - too long guest shipping address last name (100 chars)
    async invalidOrderCheckoutShipAddressTooLongGuestLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input too long guest last name into shipping address last name input field (100 chars)
        await checkoutPageInvalidScenarios.inputTooLongGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Too Long Guest Shipping Address Last Name");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too long shipping last name input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Too Long Shipping Address Last Name");
    }
    //invalid order checkout test method (shipping address) - too long guest shipping address (100 chars)
    async invalidOrderCheckoutShipAddressTooLongGuestAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input too long guest address into shipping address input field (100 chars)
        await checkoutPageInvalidScenarios.inputTooLongGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Too Long Guest Shipping Address");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too long shipping address input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Too Long Shipping Address");
    }
    //invalid order checkout test method (shipping address) - too long guest shipping post code (25 digits)
    async invalidOrderCheckoutShipAddressTooLongGuestPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input too long guest post code into shipping address post code input field (25 digits)
        await checkoutPageInvalidScenarios.inputTooLongGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Too Long Guest Shipping Post Code");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too long shipping post code input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Too Long Shipping Post Code");
    }
    //invalid order checkout test method (shipping address) - too long guest shipping city (100 chars)
    async invalidOrderCheckoutShipAddressTooLongGuestCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input too long guest city into shipping address city input field (100 chars)
        await checkoutPageInvalidScenarios.inputTooLongGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Too Long Guest Shipping City");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too long shipping city input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Too Long Shipping City");
    }
    //invalid order checkout test method (shipping address) - too long guest shipping company (100 chars)
    async invalidOrderCheckoutShipAddressTooLongGuestCompanyTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input too long guest company into shipping address company input field (100 chars)
        await checkoutPageInvalidScenarios.inputTooLongGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Too Long Guest Shipping Company");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too long shipping company input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Too Long Shipping Company");
    }

    //billing address section

    //invalid order checkout test method (billing address) - too long guest billing first name (100 chars)
    async invalidOrderCheckoutBillAddressTooLongGuestFirstNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input too long guest first name into billing address first name input field (100 chars)
        await checkoutPageInvalidScenarios.inputTooLongGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - Too Long Billing First Name");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too long billing address first name input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - Too Long Billing First Name");
    }
    //invalid order checkout test method (billing address) - too long guest billing last name (100 chars)
    async invalidOrderCheckoutBillAddressTooLongGuestLastNameTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input valid guest first name into billing address first name input field
        await checkoutPage.inputGuestFirstNameIntoBillAddressFirstNameInputField();
        //input too long guest last name into billing address last name input field (100 chars)
        await checkoutPageInvalidScenarios.inputTooLongGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - Too Long Billing Last Name");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too long billing address last name input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - Too Long Billing Last Name");
    }
    //invalid order checkout test method (billing address) - too long guest billing address (100 chars)
    async invalidOrderCheckoutBillAddressTooLongGuestAddressTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input valid guest first name into billing address first name input field
        await checkoutPage.inputGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //input too long guest address into billing address input field (100 chars)
        await checkoutPageInvalidScenarios.inputTooLongGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - Too Long Billing Address");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too long billing address input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - Too Long Billing Address");
    }
    //invalid order checkout test method (billing address) - too long guest billing post code (25 digits)
    async invalidOrderCheckoutBillAddressTooLongGuestPostCodeTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input valid guest first name into billing address first name input field
        await checkoutPage.inputGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //input too long guest post code into billing address post code input field (25 digits)
        await checkoutPageInvalidScenarios.inputTooLongGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - Too Long Billing Post Code");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too long billing post code input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - Too Long Billing Post Code");
    }
    //invalid order checkout test method (billing address) - too long guest billing city  (100 chars)
    async invalidOrderCheckoutBillAddressTooLongGuestCityTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input valid guest first name into billing address first name input field
        await checkoutPage.inputGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //input too long guest city into billing address city input field (100 chars)
        await checkoutPageInvalidScenarios.inputTooLongGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - Too Long Billing City");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too long billing city input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - Too Long Billing City");
    }
    //invalid order checkout test method (billing address) - too long guest billing company  (100 chars)
    async invalidOrderCheckoutBillAddressTooLongGuestCompanyTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input valid guest first name into billing address first name input field
        await checkoutPage.inputGuestFirstNameIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //input too long guest company into billing address company input field (100 chars)
        await checkoutPageInvalidScenarios.inputTooLongGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - Too Long Billing Company");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The too long billing company input error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - Too Long Billing Company");
    }

    //invalid singular input format

    //shipping address section

    //invalid order checkout test method (shipping address) - invalid guest shipping address first name input format (special symbols only)
    async invalidOrderCheckoutShipAddressInvalidGuestFirstNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input invalid guest first name format into shipping address first name input field (special symbols only)
        await checkoutPageInvalidScenarios.inputInvalidGuestFirstNameFormatIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Invalid Guest Shipping Address First Name Format");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The invalid shipping first name input format error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Invalid Shipping Address First Name Format");
    }
    //invalid order checkout test method (shipping address) - invalid guest shipping address last name input format (special symbols only)
    async invalidOrderCheckoutShipAddressInvalidGuestLastNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input invalid guest last name format into shipping address last name input field (special symbols only)
        await checkoutPageInvalidScenarios.inputInvalidGuestLastNameFormatIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Invalid Guest Shipping Address Last Name Format");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The invalid shipping last name input format error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Invalid Shipping Address Last Name Format");
    }
    //invalid order checkout test method (shipping address) - invalid guest shipping address input format (special symbols only)
    async invalidOrderCheckoutShipAddressInvalidGuestAddressFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input invalid guest address format into shipping address input field (special symbols only)
        await checkoutPageInvalidScenarios.inputInvalidGuestAddressFormatIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Invalid Guest Shipping Address Format");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The invalid shipping address input format error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Invalid Shipping Address Format");
    }
    //invalid order checkout test method (shipping address) - invalid guest shipping post code input format (special symbols only)
    async invalidOrderCheckoutShipAddressInvalidGuestPostCodeFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input invalid guest post code format into shipping address post code input field (special symbols only)
        await checkoutPageInvalidScenarios.inputInvalidGuestPostCodeFormatIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Invalid Guest Shipping Post Code Format");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The invalid shipping post code input format error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Invalid Shipping Post Code Format");
    }
    //invalid order checkout test method (shipping address) - invalid guest shipping city input format (special symbols only)
    async invalidOrderCheckoutShipAddressInvalidGuestCityFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input invalid guest city format into shipping address city input field (special symbols only)
        await checkoutPageInvalidScenarios.inputInvalidGuestCityFormatIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Invalid Guest Shipping City Format");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The invalid shipping city input format error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Invalid Shipping City Format");
    }
    //invalid order checkout test method (shipping address) - invalid guest shipping company input format (special symbols only)
    async invalidOrderCheckoutShipAddressInvalidGuestCompanyFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input invalid guest company format into shipping address company input field (special symbols only)
        await checkoutPageInvalidScenarios.inputInvalidGuestCompanyFormatIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after invalid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Invalid Guest Data Input - Invalid Guest Shipping Company Format");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The invalid shipping company input format error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Shipping Address) Test Result - Invalid Shipping Company Format");
    }

    //billing address section

    //invalid order checkout test method (billing address) - invalid guest billing first name input format (special symbols only)
    async invalidOrderCheckoutBillAddressInvalidGuestFirstNameFormatTest(){
        const generalPage = new GeneralPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver)
        const checkoutPageInvalidScenarios = new CheckoutPageInvalidScenarios(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //checkout page web element assert (shipping section)
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert (shipping section)
        await this.isCheckoutPageTextElementAsExpected();
        //capture screenshot of the shipping address form before guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display Before Guest Data Input");
        //input valid guest first name into shipping address first name input field
        await checkoutPage.inputGuestFirstNameIntoShipAddressFirstNameInputField();
        //input valid guest last name into shipping address last name input field
        await checkoutPage.inputGuestLastNameIntoShipAddressLastNameInputField();
        //input valid guest address into shipping address input field
        await checkoutPage.inputGuestAddressIntoShipAddressInputField();
        //input valid guest post code into shipping address post code input field
        await checkoutPage.inputGuestPostCodeIntoShipAddressPostCodeInputField();
        //input valid guest city into shipping address city input field
        await checkoutPage.inputGuestCityIntoShipAddressCityInputField();
        //input valid guest company into shipping address company input field
        await checkoutPage.inputGuestCompanyIntoShipAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (shipping address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display After Valid Guest Data Input");
        //click 'As soon as possible' shipping radio button
        await checkoutPage.clickAsSoonRadioButton();
        //click 'Billing address are different' checkbox
        await checkoutPage.clickBillAddressCheckbox();
        //check out page web element assert (billing address)
        await checkoutPage.isCheckoutPageBillAddressSectionWebElementDisplayed();
        //check out page text element assert (billing address)
        await this.isCheckoutPageBillAddressTextElementAsExpected();
        //capture screenshot of the shipping address form before invalid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display Before Guest Data Input");
        //input invalid guest first name into billing address first name input field (special symbols only)
        await checkoutPageInvalidScenarios.inputInvalidGuestFirstNameFormatIntoBillAddressFirstNameInputField();
        //input valid guest last name into billing address last name input field
        await checkoutPage.inputGuestLastNameIntoBillAddressLastNameInputField();
        //input valid guest address into billing address input field
        await checkoutPage.inputGuestAddressIntoBillAddressInputField();
        //input valid guest post code into billing address post code input field
        await checkoutPage.inputGuestPostCodeIntoBillAddressPostCodeInputField();
        //input valid guest city into billing address city input field
        await checkoutPage.inputGuestCityIntoBillAddressCityInputField();
        //input valid guest company into billing address company input field
        await checkoutPage.inputGuestCompanyIntoBillAddressCompanyInputField();
        //capture screenshot of the shipping address form after valid guest input data (billing address)
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Billing Address Section Display After Invalid Guest Data Input - Invalid Billing First Name Input Format");
        //click 'Buy' button
        await checkoutPage.clickBuyButton();
        //if the order gets submitted successfully, log the issue
        if(await checkoutPage.getCheckoutRecapSuccessMessage()){
            Logger.error("The invalid billing address first name input format error hasn't been triggered, test has failed.");
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Order Checkout (Billing Address) Test Result - Invalid Billing First Name Format");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //general page text element assert test method
    async isGeneralPageTextElementAsExpected(){
        const generalPage = new GeneralPage(this.driver);
        //assert special offer text is as expected
        const specialOfferText = await generalPage.getSpecialOfferText();
        assert.strictEqual(specialOfferText, "SPECIAL OFFER: 20% OFF BOOKS WITH WORDS IN THEM!!! LIMITED TIME ONLY!", "The special offer text doesn't match the expectations.");
        //assert header date text is as expected (it's static)
        const headerDate = await generalPage.getHeaderDate();
        assert.strictEqual(headerDate, "3:43pm 23/06/2002", "The header date text doesn't match the expectations.");
    }

    //general page aside links text element test method
    async isGeneralPageAsideLinkTextElementAsExpected(){
        const generalPage = new GeneralPage(this.driver);
        //aside category
        //assert aside books category subtitle is as expected
        const asideBooksCategorySubtitle = await generalPage.getAsideBooksCategorySubtitle();
        assert.strictEqual(asideBooksCategorySubtitle, "Books", "The aside books category subtitle doesn't match the expectations.");
        //assert aside books fiction subtitle is as expected
        const asideBooksFictionSubtitle = await generalPage.getAsideBooksFictionSubtitle();
        assert.strictEqual(asideBooksFictionSubtitle, "Fiction", "The aside books fiction subtitle doesn't match the expectations.");
        //assert aside books non-fiction subtitle is as expected
        const asideBooksNonFictionSubtitle = await generalPage.getAsideBooksNonFictionSubtitle();
        assert.strictEqual(asideBooksNonFictionSubtitle, "Non-Fiction", "The aside books non-fiction subtitle doesn't match the expectations.");
        //assert aside DVDs category subtitle is as expected
        const asideDVDsSubtitle = await generalPage.getAsideDVDsCategorySubtitle();
        assert.strictEqual(asideDVDsSubtitle, "DVDs", "The aside DVDs category subtitle doesn't match the expectations.");
        //assert aside DVDs fiction subtitle is as expected
        const asideDVDsFictionSubtitle = await generalPage.getAsideDVDsFictionSubtitle();
        assert.strictEqual(asideDVDsFictionSubtitle, "Fiction", "The aside DVDs fiction subtitle doesn't match the expectations.");
    }

    //home page text element assert test method
    async isHomePageTextElementAsExpected(){
        const homePage = new HomePage(this.driver);
        //assert home page title is as expected
        const homePageTitle = await homePage.getHomePageTitle();
        assert.strictEqual(homePageTitle, "Top sellers", "The home page title doesn't match the expectations.");
    }

    //sign up form page text element assert test method
    async isSignUpFormPageTextElementAsExpected(){
        const signUpFormPage = new SignUpFormPage(this.driver);
        //assert sign up form page title is as expected
        const signUpFormPageTitle = await signUpFormPage.getSignUpFormPageTitle();
        assert.strictEqual(signUpFormPageTitle, "SIGN UP", "The sign up form page title doesn't match the expectations.");
        //assert sign up form using account for subtext is as expected
        const signUpFormPageUsingAccountForSubtext = await signUpFormPage.getSignUpFormPageUsingAccountForSubtext();
        assert.strictEqual(signUpFormPageUsingAccountForSubtext, "I will be using my account for:", "The sign up form page using account for subtext doesn't match the expectations.");
        //assert sign up form using account for subtext is as expected
        const signUpFormPageMyselfSubtext = await signUpFormPage.getSignUpFormPageMyselfSubtext();
        assert.strictEqual(signUpFormPageMyselfSubtext, "Myself", "The sign up form page myself subtext doesn't match the expectations.");
        //assert sign up form business subtext is as expected
        const signUpFormPageBusinessSubtext = await signUpFormPage.getSignUpFormPageBusinessSubtext();
        assert.strictEqual(signUpFormPageBusinessSubtext, "My business", "The sign up form page business subtext doesn't match the expectations.");
        //assert sign up form promo email subtext is as expected
        const signUpFormPagePromoEmailSubtext = await signUpFormPage.getSignUpFormPagePromoEmailSubtext();
        assert.strictEqual(signUpFormPagePromoEmailSubtext, "I would like to receive promotional emails", "The sign up form page promo email subtext doesn't match the expectations.");
        //assert sign up form accept privacy subtext is as expected
        const signUpFormPageAcceptPrivacySubtext = await signUpFormPage.getSignUpFormPageAcceptPrivacySubtext();
        assert.strictEqual(signUpFormPageAcceptPrivacySubtext, "I have read and accept the privacy policy", "The sign up form page accept privacy subtext doesn't match the expectations.");
    }

    //account page text element assert test method
    async isAccountPageTextElementAsExpected(){
        const accountPage = new AccountPage(this.driver);
        //assert account page title is as expected
        const accountPageTitle = await accountPage.getAccountPageTitle();
        assert.strictEqual(accountPageTitle, "Account", "The account page title doesn't match the expectations.");
        //assert account user details subtitle is as expected
        const accountPageUserDetailsSubtitle = await accountPage.getAccountUserDetailsSubtitle();
        assert.strictEqual(accountPageUserDetailsSubtitle, "User Details", "The account page user details subtitle doesn't match the expectations.");
        //assert account profile image subtext is as expected
        const accountPageProfileImgSubtext = await accountPage.getAccountProfileImgSubtext();
        assert.strictEqual(accountPageProfileImgSubtext, "Profile picture:", "The account page profile image subtext doesn't match the expectations.");
        //assert account billing info subtitle is as expected
        const accountPageBillingInfoSubtitle = await accountPage.getAccountBillingInfoSubtitle();
        assert.strictEqual(accountPageBillingInfoSubtitle, "Billing Information", "The account page billing info subtitle doesn't match the expectations.");
        //assert account profile previous order subtitle is as expected
        const accountPagePrevOrderSubtitle = await accountPage.getAccountPreviousOrdersSubtitle();
        assert.strictEqual(accountPagePrevOrderSubtitle, "Previous Orders", "The account page previous orders subtitle doesn't match the expectations.");
    }

    //account page user details section web element assert test method
    async isAccountPageUserDetailsSectionDataAsExpected(){
        const signUpFormPage = new SignUpFormPage(this.driver);
        const accountPage = new AccountPage(this.driver);
        //assert user account email is as expected, log the issue otherwise
        const accountPageUserEmail = await accountPage.getAccountUserEmail();
        const accountPageExpectedEmail = await signUpFormPage.email;
        try {
            assert.strictEqual(accountPageUserEmail, accountPageExpectedEmail, "The account page user email doesn't match expectations.");
        } catch (e) {
            Logger.error(`The user email doesn't match expected values. Expected email: ${accountPageExpectedEmail}, displayed email: ${accountPageUserEmail}`)
        }
    }

    //login form page text element assert test method
    async isLoginFormPageTextElementAsExpected(){
        const loginFormPage = new LoginFormPage(this.driver);
        //assert login form page title is as expected
        const loginFormPageTitle = await loginFormPage.getLoginFormPageTitle();
        assert.strictEqual(loginFormPageTitle, "LOG IN", "The login form page title doesn't match the expectations.");
    }

    //shopping cart text element assert test method
    async isShoppingCartTextElementAsExpected(){
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //assert shopping cart page title is as expected
        const shoppingCartPageTitle = await shoppingCartPage.getShoppingCartTitle();
        assert.strictEqual(shoppingCartPageTitle, "Your Shopping Cart", "The shopping cart page title doesn't match the expectations.");
        //assert shopping cart coupon subtext is as expected
        const shoppingCartCouponSubtext = await shoppingCartPage.getShoppingCartCouponSubtext();
        assert.strictEqual(shoppingCartCouponSubtext, "I have a coupon for this order", "The shopping cart coupon subtext doesn't match the expectations.");
    }

    //checkout page text element assert test method
    async isCheckoutPageTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //assert checkout page title is as expected
        const checkoutPageTitle = await checkoutPage.getCheckoutPageTitle();
        assert.strictEqual(checkoutPageTitle, "Checkout", "The checkout page title doesn't match the expectations.");
        //assert checkout page subtitle is as expected
        const checkoutPageSubtitle = await checkoutPage.getCheckoutPageSubtitle();
        assert.strictEqual(checkoutPageSubtitle, "buy those books already...", "The checkout page subtitle doesn't match the expectations.");
        //assert checkout page shipping address subtext is as expected
        const checkoutPageShipAddressSubtext = await checkoutPage.getCheckoutPageShipAddressSubtext();
        assert.strictEqual(checkoutPageShipAddressSubtext, "Shipping:", "The checkout page shipping address subtext doesn't match the expectations.");
        //assert checkout page shipping items subtext is as expected
        const checkoutPageShipItemsSubtext = await checkoutPage.getCheckoutPageShipItemsSubtext();
        assert.strictEqual(checkoutPageShipItemsSubtext, "I would like the items to be shipped", "The checkout page shipping items subtext doesn't match the expectations.");
        //assert checkout page shipping soon subtext is as expected
        const checkoutPageShipSoonSubtext = await checkoutPage.getCheckoutPageShipSoonSubtext();
        assert.strictEqual(checkoutPageShipSoonSubtext, "as soon as possible", "The checkout page shipping soon subtext doesn't match the expectations.");
        //assert checkout page shipping as a single package subtext is as expected
        const checkoutPageSinglePackageSubtext = await checkoutPage.getCheckoutPageSinglePackageSubtext();
        assert.strictEqual(checkoutPageSinglePackageSubtext, "in a single package", "The checkout page shipping as a single package subtext doesn't match the expectations.");
        //assert checkout page shipping and billing address are different subtext is as expected
        const checkoutPageShipBillAddressSubtext = await checkoutPage.getCheckoutPageShipBillAddressSubtext();
        assert.strictEqual(checkoutPageShipBillAddressSubtext, "Billing address is different from shipping", "The checkout page shipping and billing address checkbox subtext doesn't match the expectations.");
    }

    //check out page text element assert test method (billing address)
    async isCheckoutPageBillAddressTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //assert checkout page billing address subtext is as expected
        const checkoutPageBillAddressSubtext = await checkoutPage.getCheckoutPageBillAddressSubtext();
        assert.strictEqual(checkoutPageBillAddressSubtext, "Billing:", "The checkout page billing address subtext doesn't match the expectations.");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //general page aside links text logger method
    async logAsideLinkTextElements(){
        const generalPage = new GeneralPage(this.driver);
        console.log("General page aside links: " + "\n");
        //log aside books category fiction link names
        const asideBooksCategoryFictionLinkNames = await generalPage.getAsideBooksCategoryFictionLinkNames();
        Logger.info("Aside books category (fiction) link names: " + asideBooksCategoryFictionLinkNames);
        //log aside books category non-fiction link names
        const asideBooksCategoryNonFictionLinkNames = await generalPage.getAsideBooksCategoryNonFictionLinkNames();
        Logger.info("Aside books category (non-fiction) link names: " + asideBooksCategoryNonFictionLinkNames);
        //log aside DVDs category fiction link names
        const asideDVDsCategoryFictionListNames = await generalPage.getAsideDVDsCategoryFictionList();
        Logger.info("Aside DVDs category (fiction) list names: " + asideDVDsCategoryFictionListNames);
        console.log("\n");
    }

    //home page (top sellers) product data logger method
    async logHomePageTopSellersProductData(){
        const homePage = new HomePage(this.driver);
        console.log("Home page displayed top sellers product data: " + "\n");
        //log home page top sellers product titles (as a list)
        const homePageTopSellersProductTitles = await homePage.getHomePageTopSellersProductTitle();
        Logger.info("Home page top sellers product title(s): " + homePageTopSellersProductTitles);
        //log home page top sellers product authors (as a list)
        const homePageTopSellersProductAuthors = await homePage.getHomePageTopSellersProductAuthor();
        Logger.info("Home page top sellers product author(s): " + homePageTopSellersProductAuthors);
        //log home page top sellers product unit prices (as a list)
        const homePageTopSellersProductUnitPrices = await homePage.getHomePageTopSellersProductUnitPrice();
        Logger.info("Home page top sellers product unit price(s): " + homePageTopSellersProductUnitPrices);
        console.log("\n");
    }

    //account page order invoice data logger method
    async logAccountPageOrderInvoiceData(){
        const accountPage = new AccountPage(this.driver);
        console.log("Account page order invoice data (no orders have been made beforehand): " + "\n");
        //assert user account email is as expected, log the issue otherwise
        const accountPageOrderData = await accountPage.getAccountPageSubmittedOrder();
        Logger.info("Account page displayed order invoice data (no orders submitted yet): " + accountPageOrderData);
        console.log("\n");
    }

    //single product page product data logger method
    async logSingleProductPageProductData(){
        const singleProductPage = new SingleProductPage(this.driver);
        console.log("Single product page displayed product data: " + "\n");
        //log single product page product name
        const singleProductName = await singleProductPage.getSingleProductPageTitle();
        Logger.info("Single product page set product name: " + singleProductName);
        //log single product page product author
        const singleProductAuthor = await singleProductPage.getSingleProductAuthor();
        Logger.info("Single product page set product author: " + singleProductAuthor);
        //log single product page product genre
        const singleProductGenre = await singleProductPage.getSingleProductGenre();
        Logger.info("Single product page set product genre: " + singleProductGenre);
        //log single product page product description
        const singleProductDescription = await singleProductPage.getSingleProductDescription();
        Logger.info("Single product page set product description: " + singleProductDescription);
        //log single product page product price
        const singleProductPrice = await singleProductPage.getSingleProductPrice();
        Logger.info("Single product page set product price: " + singleProductPrice);
        //log single product page product stock
        const singleProductStock = await singleProductPage.getSingleProductStock();
        Logger.info("Single product page set product stock: " + singleProductStock);
        console.log("\n");
    }

    //shopping cart data logger method
    async logShoppingCartProductData(){
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        console.log("Shopping cart displayed product data: " + "\n");
        //log shopping cart product entry
        const shoppingCartProductEntry = await shoppingCartPage.getShoppingCartProductEntry();
        Logger.info("Shopping cart product entry(ies): " + shoppingCartProductEntry);
        //log shopping cart product entry
        const shoppingCartOrderPrice = await shoppingCartPage.getShoppingCartOrderPrice();
        Logger.info("Shopping cart product order price(s): " + shoppingCartOrderPrice);
        console.log("\n");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //screenshot utility
    static async captureScreenshot(driver, fileName) {
        try {
            await driver.sleep(1500); //wait for the screenshot to be taken
            const screenshot = await driver.takeScreenshot();
            const baseDir = path.join(__dirname, '../screenshots');
            fs.mkdirSync(baseDir, {recursive: true});
            const filePath = path.join(baseDir, `${fileName.replace(/[^a-zA-Z0-9-_\(\)]/g, ' ')}.png`);

            // Save the screenshot to the file
            fs.writeFileSync(filePath, screenshot, 'base64');

            console.log(`Screenshot saved at: ${filePath}`);
        } catch (error) {
            console.error('Error capturing screenshot:', error);
        }
    }


}
module.exports = TestMethods;