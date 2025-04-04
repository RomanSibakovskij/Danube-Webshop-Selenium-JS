"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { Logger } = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');
const { Key } = require('selenium-webdriver');

class GeneralPage extends BasePage{

    constructor(driver){
        super(driver)

        //general page web elements
        //header
        this._specialOfferText = By.xpath("//h3[@id='top-special-offer-message']");
        this._homePageLogoLink = By.xpath("//div[@class='topbar']/a");
        this._headerSearchBarInputField = By.xpath("//div[@class='topbar']/input");
        this._headerSearchButton = By.xpath("//div[@class='topbar']/button");
        this._headerDateBox = By.xpath("//div[@class='topbar']/p[@id='clock']");// this element seems to be static
        this._headerLoginButton = By.xpath("//div[@class='account-buttons']/button[1]"); //doubles as signin button too
        this._headerRegisterButton = By.xpath("//div[@class='account-buttons']/button[2]");
        this._headerShoppingCartButton = By.xpath("//div[@class='account-buttons']/button[3]");
        this._headerMyAccountButton = By.xpath("//div[@class='account-buttons']/button[4]");
        //aside section
        //books category
        this._asideBooksCategorySubtitle = By.xpath("//div[@class='category-title-wrapper'][1]/h2");
        //fiction
        this._asideBooksCategoryFictionSubtitleLink = By.xpath("//div[@class='sidebar']/ul[1]/li[1]");
        //list elements
        this._asideBooksCategoryFictionLinkElements = By.xpath("//div[@class='sidebar']/ul[1]/li[1]//a");
        //non-fiction
        this._asideBooksCategoryNonFictionSubtitleLink = By.xpath("//div[@class='sidebar']/ul[1]/li[2]");
        //list elements
        this._asideBooksCategoryNonFictionLinkElements = By.xpath("//div[@class='sidebar']/ul[1]/li[2]//a");
        //dvds category
        this._asideDVDsCategorySubtitle = By.xpath("//div[@class='category-title-wrapper'][2]/h2");
        //fiction
        this._asideDVDsCategoryFictionSubtitleLink = By.xpath("//div[@class='sidebar']/ul[2]/li");
        //list elements
        this._asideDVDsCategoryFictionListElements = By.xpath("//div[@class='sidebar']/ul[2]/li//li");
        //login message
        this._loginMessage = By.xpath("//div[@id='login-message']");
    }

    //click 'Sign up' button method
    async clickSignUpButton(){
        const signUpButton = await this.driver.findElement(this._headerRegisterButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: signUpButton }).click().perform();
    }

    //click 'Login' button method //it's also a 'Logout' button when logged in
    async clickLoginButton(){
        const loginButton = await this.driver.findElement(this._headerLoginButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: loginButton }).click().perform();
    }

    //click 'My Account' button method //it's also a 'Logout' button when logged in
    async clickMyAccountButton(){
        const myAccountButton = await this.driver.findElement(this._headerMyAccountButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: myAccountButton }).click().perform();
    }

    //input search query method (for product 'The Fjord of the Lies')
    async inputProductFjordSearchQuery() {
        const searchBar = await this.driver.findElement(this._headerSearchBarInputField);
        const searchQuery = "The Fjord of the Lies";
        await searchBar.sendKeys(searchQuery);
    }

    //input search query method (for product 'Mostly on the Road')
    async inputProductRoadSearchQuery() {
        const searchBar = await this.driver.findElement(this._headerSearchBarInputField);
        const searchQuery = "Mostly on the Road";
        await searchBar.sendKeys(searchQuery);
    }

    //click 'Search' button method
    async clickSearchButton(){
        const searchButton = await this.driver.findElement(this._headerSearchButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: searchButton }).click().perform();
    }

    //click 'Crime & Thrillers' aside category link method
    async clickAsideCrimeLink() {
        //find and list elements
        const asideBooksCategoryLink = await this.driver.findElements(this._asideBooksCategoryFictionLinkElements);
        //assert list elements isn't empty
        if (asideBooksCategoryLink.length === 0) {throw new Error("No aside books fiction category links found.");}

        //choose set product
        const crimeThrillersLink = asideBooksCategoryLink[0];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", crimeThrillersLink);
        await crimeThrillersLink.click();
    }

    //click home page logo link method
    async clickHomePageLogoLink(){
        const homePageLogoLink = await this.driver.findElement(this._homePageLogoLink);
        await homePageLogoLink.click();
    }

    //general page text element getters
    async getSpecialOfferText(){
        const specialOfferText = await this.driver.findElement(this._specialOfferText);
        return await specialOfferText.getText();
    }
    async getHeaderDate(){
        const headerDateText = await this.driver.findElement(this._headerDateBox);
        return await headerDateText.getText();
    }
    async getAsideBooksCategorySubtitle(){
        const asideBooksCategorySubtitle = await this.driver.findElement(this._asideBooksCategorySubtitle);
        return await asideBooksCategorySubtitle.getText();
    }
    async getAsideBooksFictionSubtitle(){
        const asideBooksFictionSubtitle = await this.driver.findElement(this._asideBooksCategoryFictionSubtitleLink);
        const text = await asideBooksFictionSubtitle.getText();
        return text.split("\n")[0].trim();
    }
    async getAsideBooksNonFictionSubtitle(){
        const asideBooksNonFictionSubtitle = await this.driver.findElement(this._asideBooksCategoryNonFictionSubtitleLink);
        const text = await asideBooksNonFictionSubtitle.getText();
        return text.split("\n")[0].trim();
    }
    async getAsideDVDsCategorySubtitle(){
        const asideDVDsCategorySubtitle = await this.driver.findElement(this._asideDVDsCategorySubtitle);
        return await asideDVDsCategorySubtitle.getText();
    }
    async getAsideDVDsFictionSubtitle(){
        const asideDVDsFictionSubtitle = await this.driver.findElement(this._asideDVDsCategoryFictionSubtitleLink);
        const text = await asideDVDsFictionSubtitle.getText();
        return text.split("\n")[0].trim();
    }
    //login message getter
    async getLoginMessage(){
        const loginMessage = await this.driver.findElement(this._loginMessage);
        return await loginMessage.getText();
    }

    //link text element getters (list)
    async getAsideBooksCategoryFictionLinkNames() {
        const elements = await this.driver.findElements(this._asideBooksCategoryFictionLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get aside books category fiction links:', error.message);
                    return '';
                }
            })
        );
    }

    async getAsideBooksCategoryNonFictionLinkNames() {
        const elements = await this.driver.findElements(this._asideBooksCategoryNonFictionLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get aside category books non-fiction links:', error.message);
                    return '';
                }
            })
        );
    }

    async getAsideDVDsCategoryFictionList() {
        const elements = await this.driver.findElements(this._asideDVDsCategoryFictionListElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get DVDs fiction category list:', error.message);
                    return '';
                }
            })
        );
    }

    //general page web element assert method (all pages have those elements)
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isGeneralPageWebElementDisplayed(){
        const elementsToCheck = [
            this._specialOfferText,
            this._homePageLogoLink,
            this._headerSearchBarInputField,
            this._headerSearchButton,
            this._headerDateBox,
            this._headerLoginButton,
            this._headerRegisterButton,
            this._headerShoppingCartButton,
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isGeneralPageAsideWebElementDisplayed(){
        const elementsToCheck = [
            this._asideBooksCategorySubtitle,
            this._asideBooksCategoryFictionSubtitleLink,
            this._asideBooksCategoryFictionLinkElements,
            this._asideBooksCategoryNonFictionSubtitleLink,
            this._asideBooksCategoryNonFictionLinkElements,
            this._asideDVDsCategorySubtitle,
            this._asideDVDsCategoryFictionSubtitleLink,
            this._asideDVDsCategoryFictionListElements




        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { GeneralPage }