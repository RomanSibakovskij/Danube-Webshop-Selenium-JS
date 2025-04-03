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

class TestMethods {

    constructor(driver) {this.driver = driver;}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //navigate to sign-up form test method
    async navigateToSignUpFormTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //click 'Log out' button (it's same button as 'Logout' button)
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
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
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //log aside link names
        await this.logAsideLinkTextElements();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top sellers product data
        await this.logHomePageTopSellersProductData();
        //click 'Log out' button (it's same button as 'Logout' button)
        await generalPage.clickLoginButton()
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "User Account Logout Test Result");
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //general page aside links text logger method
    async logAsideLinkTextElements(){
        const generalPage = new GeneralPage(this.driver);
        //log aside books category fiction link names
        const asideBooksCategoryFictionLinkNames = await generalPage.getAsideBooksCategoryFictionLinkNames();
        Logger.info("Aside books category (fiction) link names: " + asideBooksCategoryFictionLinkNames);
        //log aside books category non-fiction link names
        const asideBooksCategoryNonFictionLinkNames = await generalPage.getAsideBooksCategoryNonFictionLinkNames();
        Logger.info("Aside books category (non-fiction) link names: " + asideBooksCategoryNonFictionLinkNames);
        //log aside DVDs category fiction link names
        const asideDVDsCategoryFictionListNames = await generalPage.getAsideDVDsCategoryFictionList();
        Logger.info("Aside DVDs category (fiction) list names: " + asideDVDsCategoryFictionListNames);
    }

    //home page (top sellers) product data logger method
    async logHomePageTopSellersProductData(){
        const homePage = new HomePage(this.driver);
        //log home page top sellers product titles (as a list)
        const homePageTopSellersProductTitles = await homePage.getHomePageTopSellersProductTitle();
        Logger.info("Home page top sellers product title(s): " + homePageTopSellersProductTitles);
        //log home page top sellers product authors (as a list)
        const homePageTopSellersProductAuthors = await homePage.getHomePageTopSellersProductAuthor();
        Logger.info("Home page top sellers product author(s): " + homePageTopSellersProductAuthors);
        //log home page top sellers product unit prices (as a list)
        const homePageTopSellersProductUnitPrices = await homePage.getHomePageTopSellersProductUnitPrice();
        Logger.info("Home page top sellers product unit price(s): " + homePageTopSellersProductUnitPrices);
    }

    //account page order invoice data logger method
    async logAccountPageOrderInvoiceData(){
        const accountPage = new AccountPage(this.driver);
        //assert user account email is as expected, log the issue otherwise
        const accountPageOrderData = await accountPage.getAccountPageSubmittedOrder();
        Logger.info("Account page displayed order invoice data (no orders submitted yet): " + accountPageOrderData);
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