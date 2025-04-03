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

            //Test 003c -> invalid edit user account edit test - no user address (the missing address input error message hasn't been triggered, test has failed)
            test("Invalid User Account Edition Test - No Address", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account edit test - no user address
                await testMethods.invalidUserAccountEditNoAddressTest();
            });

            //Test 003d -> invalid edit user account edit test - no user post code (the missing post code input error message hasn't been triggered, test has failed)
            test("Invalid User Account Edition Test - No Post Code", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account edit test - no user post code
                await testMethods.invalidUserAccountEditNoPostCodeTest();
            });

            //Test 003e -> invalid edit user account edit test - no user city (the missing city input error message hasn't been triggered, test has failed)
            test("Invalid User Account Edition Test - No City", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account edit test - no user city
                await testMethods.invalidUserAccountEditNoCityTest();
            });

        });

        describe("Invalid User Account Edit Tests - Too Short Singular Input", () => {

            //Test 003f -> invalid edit user account edit test - too short user first name (1 char) (the too short first name input error message hasn't been triggered, test has failed)
            test("Invalid User Account Edition Test - Too Short First Name", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account edit test - too short user first name (1 char)
                await testMethods.invalidUserAccountEditTooShortFirstNameTest();
            });

            //Test 003g -> invalid edit user account edit test - too short user last name (1 char) (the too short last name input error message hasn't been triggered, test has failed)
            test("Invalid User Account Edition Test - Too Short Last Name", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account edit test - too short user last name (1 char)
                await testMethods.invalidUserAccountEditTooShortLastNameTest();
            });

            //Test 003h -> invalid edit user account edit test - too short user address (5 chars) (the too short address input error message hasn't been triggered, test has failed)
            test("Invalid User Account Edition Test - Too Short Address", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account edit test - too short user address (5 chars)
                await testMethods.invalidUserAccountEditTooShortAddressTest();
            });

            //Test 003i -> invalid edit user account edit test - too short user post code (4 digits) (the too short post code input error message hasn't been triggered, test has failed)
            test("Invalid User Account Edition Test - Too Short Post Code", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account edit test - too short user post code (4 digits)
                await testMethods.invalidUserAccountEditTooShortPostCodeTest();
            });

            //Test 003j -> invalid edit user account edit test - too short user city (2 chars) (the too short city input error message hasn't been triggered, test has failed)
            test("Invalid User Account Edition Test - Too Short City", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account edit test - too short user city (2 chars)
                await testMethods.invalidUserAccountEditTooShortCityTest();
            });

        });

        describe("Invalid User Account Edit Tests - Too Long Singular Input", () => {

            //Test 003k -> invalid edit user account edit test - too long user first name (100 chars) (the too long first name input error message hasn't been triggered, test has failed)
            test("Invalid User Account Edition Test - Too Long First Name", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //valid user account creation test
                await testMethods.validUserAccountCreationTest();
                //invalid edit user account edit test - too long user first name (100 chars)
                await testMethods.invalidUserAccountEditTooLongFirstNameTest();
            });

        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});