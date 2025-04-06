"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');

class SingleProductPage extends BasePage{

    constructor(driver) {
        super(driver);

        //single product page web elements
        this._singleProductPageTitle = By.xpath("//div[@class='detail-text-content']/h2");
        this._singleProductMainImage = By.xpath("//div[@class='detail-image-container']//img");
        this._singleProductRatingStarBox = By.xpath("//div[@class='detail-text-content']/p[@class='book-rating']");
        this._singleProductAuthor = By.xpath("//div[@class='detail-text-content']/p[2]");
        this._singleProductGenre = By.xpath("//div[@class='detail-text-content']/p[3]");
        this._singleProductDescription = By.xpath("//div[@class='detail-text-content']/p[4]");
        this._singleProductPrice = By.xpath("//div[@class='detail-text-content']/p[5]");
        this._singleProductStockCount = By.xpath("//div[@class='detail-text-content']/p[6]");
        this._singleProductAddToCartButton = By.xpath("//div[@class='detail-wrapper']/button");
    }

    //single product page product data getters
    async getSingleProductPageTitle(){
        const singleProductPageTitle = await this.driver.findElement(this._singleProductPageTitle);
        return await singleProductPageTitle.getText();
    }
    async getSingleProductAuthor() {
        const singleProductAuthor = await this.driver.findElement(this._singleProductAuthor);
        let authorText = await singleProductAuthor.getText();
        return authorText.replace(/by\s+/, '');
    }

    async getSingleProductGenre() {
        const singleProductGenre = await this.driver.findElement(this._singleProductGenre);
        let genreText = await singleProductGenre.getText();
        return genreText.replace(/Genre:\s+/, '');
    }
    async getSingleProductDescription(){
        const singleProductDescription = await this.driver.findElement(this._singleProductDescription);
        return await singleProductDescription.getText();
    }
    async getSingleProductPrice() {
        const singleProductPrice = await this.driver.findElement(this._singleProductPrice);
        let priceText = await singleProductPrice.getText();
        return priceText.replace(/Price:\s+/, '');
    }

    async getSingleProductStock() {
        const singleProductStock = await this.driver.findElement(this._singleProductStockCount);
        let stockText = await singleProductStock.getText();
        return stockText.replace(/Left in stock:\s+/, '');
    }

    //click 'Add to cart' button method
    async clickAddToCartButton(){
        const addToCartButton = await this.driver.findElement(this._singleProductAddToCartButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: addToCartButton }).click().perform();
    }

    //single product page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isSingleProductPageWebElementDisplayed(){
        const elementsToCheck = [
            this._singleProductPageTitle,
            this._singleProductMainImage,
            this._singleProductRatingStarBox,
            this._singleProductAuthor,
            this._singleProductGenre,
            this._singleProductDescription,
            this._singleProductPrice,
            this._singleProductStockCount,
            this._singleProductAddToCartButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { SingleProductPage }