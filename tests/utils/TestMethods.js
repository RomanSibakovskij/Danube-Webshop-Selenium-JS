"use strict";

const fs = require('fs');
const path = require('path');
const assert = require("node:assert");
const Logger = require('../../pages/utils/Logger');
const { HomePage } = require('../../pages/HomePage');
const { GeneralPage } = require("../../pages/GeneralPage");
const { SignUpFormPage } = require("../../pages/SignUpFormPage");
const { SignUpFormPageInvalidScenarios } = require("../../pages/utils/SignUpFormPageInvalidScenarios");

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