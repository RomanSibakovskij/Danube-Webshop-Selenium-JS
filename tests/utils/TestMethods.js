"use strict";

const fs = require('fs');
const path = require('path');
const assert = require("node:assert");
const Logger = require('../../pages/utils/Logger');
const TestDataGenerator = require("../../pages/utils/TestDataGenerator");
const { HomePage } = require('../../pages/HomePage');
const { GeneralPage } = require("../../pages/GeneralPage");

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

    //general page text element assert test method
    async isGeneralPageTextElementAsExpected(){
        const generalPage = new GeneralPage(this.driver);
        //assert special offer text is as expected
        const specialOfferText = await generalPage.getSpecialOfferText();
        assert.strictEqual(specialOfferText, "SPECIAL OFFER: 20% OFF BOOKS WITH WORDS IN THEM!!! LIMITED TIME ONLY!", "The special offer text doesn't match the expectations.");
        //assert header date text is as expected (it's static)
        const headerDate = await generalPage.getHeaderDate();
        assert.strictEqual(headerDate, "3:43pm 23/06/2002", "The header date text doesn't match the expectations.");
        //aside
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

    //home page text element getter test method
    async isHomePageTextElementAsExpected(){
        const homePage = new HomePage(this.driver);
        //assert home page title is as expected
        const homePageTitle = await homePage.getHomePageTitle();
        assert.strictEqual(homePageTitle, "Top sellers", "The home page title doesn't match the expectations.");
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