const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Sign Up Form Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid User Account Creation Test", () => {

        //Test 002 -> valid user account creation test
        test("Valid User Sign Up Test", async function () {
            //navigate to 'Sign up' form test
            await testMethods.navigateToSignUpFormTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
        });

    });

    describe("Invalid User Account Creation Tests", () => {
        //the missing input error message gets triggered only when all input fields are empty but not if one of the required fields is empty
        describe("Invalid User Account Creation Tests - No Singular Input", () => {

            //Test 002b -> invalid user account creation test - no user first name (the missing input error message hasn't been triggered, test has failed)
            test("Invalid User Sign Up Test - No First Name", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //invalid user account creation test - no user first name
                await testMethods.invalidUserAccountCreationNoFirstNameTest();
            });

            //Test 002c -> invalid user account creation test - no user last name (the missing input error message hasn't been triggered, test has failed)
            test("Invalid User Sign Up Test - No Last Name", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //invalid user account creation test - no user last name
                await testMethods.invalidUserAccountCreationNoLastNameTest();
            });

            //Test 002d -> invalid user account creation test - no user email
            test("Invalid User Sign Up Test - No Email", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //invalid user account creation test - no user email
                await testMethods.invalidUserAccountCreationNoEmailTest();
            });

            //Test 002e -> invalid user account creation test - no user password (the missing input error message hasn't been triggered, test has failed)
            test("Invalid User Sign Up Test - No Password", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //invalid user account creation test - no user password
                await testMethods.invalidUserAccountCreationNoPasswordTest();
            });

            //Test 002f -> invalid user account creation test - no user account usage statement (the missing user account statement error message hasn't been triggered, test has failed)
            test("Invalid User Sign Up Test - No User Account Statement", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //invalid user account creation test - no user account usage statement
                await testMethods.invalidUserAccountCreationNoAccountStatementTest();
            });

        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


