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

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


