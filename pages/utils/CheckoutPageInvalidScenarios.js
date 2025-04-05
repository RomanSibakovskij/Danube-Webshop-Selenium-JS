"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./BasePage');
const Logger  = require("./Logger");
const { TestDataGenerator } = require("./TestDataGenerator");

class CheckoutPageInvalidScenarios extends BasePage{

    constructor(driver) {
        super(driver);



    }


}
module.exports = { CheckoutPageInvalidScenarios }