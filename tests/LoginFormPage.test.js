const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Login Form Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid User Account Login Tests", () => {

        //Test 005 -> valid user account login test (the user fails to log in with valid credentials, therefore, registered user product testing will be halted here until the issue gets resolved, test has failed)
        test("Valid User Login Test", async function () {
            //navigate to 'Sign up' form test
            await testMethods.navigateToSignUpFormTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //user account logout test
            await testMethods.userLogoutTest();
            //valid user account login test
            await testMethods.validUserLoginTest();
        });

        //Test 005a -> valid user business account login test (the user fails to log in with valid credentials, therefore, registered user product testing will be halted here until the issue gets resolved, test has failed)
        test("Valid User (business account) Login Test", async function () {
            //navigate to 'Sign up' form test
            await testMethods.navigateToSignUpFormTest();
            //valid user business account creation test
            await testMethods.validUserBusinessAccountCreationTest();
            //user account logout test
            await testMethods.userLogoutTest();
            //valid user account login test
            await testMethods.validUserLoginTest();
        });

    });

    describe("Invalid User Account Login Tests", () => {

        describe("Invalid User Account Login Tests - No Singular Input", () => {

            //Test 005b -> invalid user account login test - no user login email (the page has a visual bug that makes the user email re-appear after password input (or sign in button click) despite clearing input field beforehand and inputting an empty string)
            test("Invalid User Login Test - No Login Email", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //user account logout test
                await testMethods.userLogoutTest();
                //invalid user account login test - no user login email
                await testMethods.invalidUserLoginNoEmailTest();
            });

            //Test 005c -> invalid user account login test - no user login password
            test("Invalid User Login Test - No Login Password", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //user account logout test
                await testMethods.userLogoutTest();
                //invalid user account login test - no user login password
                await testMethods.invalidUserLoginNoPasswordTest();
            });

        });
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


