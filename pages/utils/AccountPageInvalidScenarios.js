"use strict";

const { By, until} = require('selenium-webdriver');
const BasePage = require('./BasePage');
const Logger  = require("./Logger");
const { Actions } = require('selenium-webdriver');
const { TestDataGenerator } = require("./TestDataGenerator");
const { Key } = require('selenium-webdriver');
const {SignUpFormPage} = require("../SignUpFormPage");

class AccountPageInvalidScenarios extends BasePage{

    constructor(driver) {
        super(driver);


        
    }


}
module.exports = { AccountPageInvalidScenarios }