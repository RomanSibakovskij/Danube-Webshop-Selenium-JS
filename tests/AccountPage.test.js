const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Account Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid User Account Edit Test", () => {

        //Test 003 -> valid edit user account edit test (there are no messages to confirm user account creation nor any other way to confirm the user account data input)
        test("Valid User Account Edition Test", async function () {
            //navigate to 'Sign up' form test
            await testMethods.navigateToSignUpFormTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user account edit test
            await testMethods.validUserAccountEditTest();
        });

    });

    describe("Invalid User Account Edit Tests", () => {

        describe("Invalid User Account Edit Tests - No Singular Input", () => {

            //Test 003a -> invalid edit user account edit test - no user first name (the missing first name input error message hasn't been triggered, test has failed)
            test("Invalid User Account Edition Test - No First Name", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account edit test - no user first name
                await testMethods.invalidUserAccountEditNoFirstNameTest();
            });
            
            //Test 003b -> invalid edit user account edit test - no user last name (the missing last name input error message hasn't been triggered, test has failed)
            test("Invalid User Account Edition Test - No Last Name", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account edit test - no user last name
                await testMethods.invalidUserAccountEditNoLastNameTest();
            });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});