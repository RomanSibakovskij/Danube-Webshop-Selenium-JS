"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { Logger } = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');
const { Key } = require('selenium-webdriver');

class HomePage extends BasePage{

    constructor(driver){
        super(driver);

        //home page web elements
        //main
        this._homePageTitle = By.xpath("//div[@class='shop-content']/h2");
        //product list elements
        this._homePageProductCardElements = By.xpath("//div[@class='shop-content']/ul/li");
        this._homePageProductTitleElements = By.xpath("//div[@class='shop-content']/ul/li/div[1]");
        this._homePageProductAuthorElements = By.xpath("//div[@class='shop-content']/ul/li/div[2]");
        this._homePageProductReviewStarElements = By.xpath("//div[@class='shop-content']/ul/li/div[3]/p[1]");
        this._homePageProductUnitPriceElements = By.xpath("//div[@class='shop-content']/ul/li/div[3]/p[2]");

    }

    //home page product data list getters (top sellers category)
    async getHomePageTopSellersProductTitle() {
        const elements = await this.driver.findElements(this._homePageProductTitleElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product (top sellers) title:', error.message);
                    return '';
                }
            })
        );
    }

    async getHomePageTopSellersProductAuthor() {
        const elements = await this.driver.findElements(this._homePageProductAuthorElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product (top sellers) author:', error.message);
                    return '';
                }
            })
        );
    }

    async getHomePageTopSellersProductUnitPrice() {
        const elements = await this.driver.findElements(this._homePageProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product (top sellers) title:', error.message);
                    return '';
                }
            })
        );
    }

    //click 'Grand Grotsby' product card method
    async clickGrandGrotsbyProductCard() {
        //find and list elements
        const homePageProductCard = await this.driver.findElements(this._homePageProductCardElements);
        //assert list elements isn't empty
        if (homePageProductCard.length === 0) {throw new Error("No product cards found on home page.");}

        //choose set product
        const grandGrotsbyProductCard = homePageProductCard[5];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", grandGrotsbyProductCard);
        await grandGrotsbyProductCard.click();
    }

    //click 'Pickled Lynx' product card method
    async clickPickledLynxProductCard() {
        //find and list elements
        const homePageProductCard = await this.driver.findElements(this._homePageProductCardElements);
        //assert list elements isn't empty
        if (homePageProductCard.length === 0) {throw new Error("No product cards found on home page.");}

        //choose set product
        const pickledLynxProductCard = homePageProductCard[6];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", pickledLynxProductCard);
        await pickledLynxProductCard.click();
    }

    //click searched 'Fjord' product card method
    async clickFjordProductCard() {
        await new Promise(resolve => setTimeout(resolve, 800));
        const setProductCard = await this.driver.findElement(By.xpath("//li[@class='preview']"));
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: setProductCard }).click().perform();
    }

    //click 'The Insiders' product card method
    async clickInsidersProductCard() {
        await new Promise(resolve => setTimeout(resolve, 800));
        //find and list elements
        const singleCategoryProductCard = await this.driver.findElements(this._homePageProductCardElements);
        //assert list elements isn't empty
        if (singleCategoryProductCard.length === 0) {throw new Error("No single category product card has been found.");}

        //choose set product
        const insidersProductCard = singleCategoryProductCard[1];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", insidersProductCard);
        await insidersProductCard.click();
    }

    //click 'Does the Sun Also Rise?' product card method
    async clickSunriseProductCard() {
        await new Promise(resolve => setTimeout(resolve, 800));
        //find and list elements
        const singleCategoryProductCard = await this.driver.findElements(this._homePageProductCardElements);
        //assert list elements isn't empty
        if (singleCategoryProductCard.length === 0) {throw new Error("No single category product card has been found.");}

        //choose set product
        const sunriseProductCard = singleCategoryProductCard[0];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", sunriseProductCard);
        await sunriseProductCard.click();
    }

    //home page text element getter
    async getHomePageTitle(){
        const homePageTitle = await this.driver.findElement(this._homePageTitle);
        return homePageTitle.getText();
    }

    //home page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isHomePageWebElementDisplayed(){
        const elementsToCheck = [
            this._homePageTitle,
            this._homePageProductCardElements,
            this._homePageProductTitleElements,
            this._homePageProductAuthorElements,
            this._homePageProductReviewStarElements,
            this._homePageProductUnitPriceElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { HomePage }