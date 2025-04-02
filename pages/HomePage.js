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

    async getHomePageTopSellersProductReviewStar() {
        const elements = await this.driver.findElements(this._homePageProductReviewStarElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product (top sellers) review star:', error.message);
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