"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { Logger } = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');
const { Key } = require('selenium-webdriver');

class ShoppingCartPage extends BasePage{

    constructor(driver) {
        super(driver);

        

    }

}
module.exports = { ShoppingCartPage }