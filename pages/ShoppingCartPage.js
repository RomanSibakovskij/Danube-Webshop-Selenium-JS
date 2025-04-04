"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { Logger } = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');
class ShoppingCartPage extends BasePage{

    constructor(driver) {
        super(driver);

        //shopping cart page web elements
        this._shoppingCartTitle = By.xpath("");
        //list elements
        this._shoppingCartProductEntryElements = By.xpath("");
        //singular elements
        this._shoppingCartOrderPrice = By.xpath("");
        this._shoppingCartCouponCheckbox = By.xpath("");
        this._shoppingCartCouponSubtext = By.xpath("");
        this._shoppingCartCheckoutButton = By.xpath("");
        this._shoppingCartEmptyCartButton = By.xpath("");
    }

    //shopping cart product data getters
    async getShoppingCartProductEntry() {
        const elements = await this.driver.findElements(this._shoppingCartProductEntryElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product element (shopping cart):', error.message);
                    return '';
                }
            })
        );
    }
    async getShoppingCartOrderPrice(){
        const shoppingCartOrderPrice = await this.driver.findElement(this._shoppingCartOrderPrice);
        return await shoppingCartOrderPrice.getText();
    }

    //shopping cart text element getters
    async getShoppingCartTitle(){
        const shoppingCartTitle = await this.driver.findElement(this._shoppingCartTitle);
        return await shoppingCartTitle.getText();
    }
    async getShoppingCartCouponSubtext(){
        const shoppingCartCouponSubtext = await this.driver.findElement(this._shoppingCartCouponSubtext);
        return await shoppingCartCouponSubtext.getText();
    }

    //shopping cart page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isShoppingPageWebElementDisplayed(){
        const elementsToCheck = [
            this._shoppingCartTitle,
            this._shoppingCartProductEntryElements,
            this._shoppingCartOrderPrice,
            this._shoppingCartCouponCheckbox,
            this._shoppingCartCouponSubtext,
            this._shoppingCartCheckoutButton,
            this._shoppingCartEmptyCartButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { ShoppingCartPage }