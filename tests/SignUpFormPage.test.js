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

    describe("Valid User Account Creation Tests", () => {

        //Test 002 -> valid user account creation test
        test("Valid User Sign Up Test", async function () {
            //navigate to 'Sign up' form test
            await testMethods.navigateToSignUpFormTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
        });

        //Test 002a -> valid user business account creation test
        test("Valid User Sign Up Test (business account)", async function () {
            //navigate to 'Sign up' form test
            await testMethods.navigateToSignUpFormTest();
            //valid user business account creation test
            await testMethods.validUserBusinessAccountCreationTest();
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

            //Test 002g -> invalid user account creation test - no user agreement with privacy policy (the missing user agreement with privacy policy error message hasn't been triggered, test has failed)
            test("Invalid User Sign Up Test - No Agree With Privacy Policy", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //invalid user account creation test - no user agreement with privacy policy
                await testMethods.invalidUserAccountCreationNoAgreePrivacyPolicyTest();
            });

        });

        describe("Invalid User Account Creation Tests - Too Short Singular Input", () => {

            //Test 002h -> invalid user account creation test - too short user first name (1 char) (the too short first name input error message hasn't been triggered, test has failed)
            test("Invalid User Sign Up Test - Too Short First Name", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //invalid user account creation test - too short user first name (1 char)
                await testMethods.invalidUserAccountCreationTooShortFirstNameTest();
            });

            //Test 002i -> invalid user account creation test - too short user last name (1 char) (the too short last name input error message hasn't been triggered, test has failed)
            test("Invalid User Sign Up Test - Too Short Last Name", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //invalid user account creation test - too short user last name (1 char)
                await testMethods.invalidUserAccountCreationTooShortLastNameTest();
            });

            //Test 002j -> invalid user account creation test - too short user email (1 char -> name, domain) (the too short email input error message hasn't been triggered, test has failed)
            test("Invalid User Sign Up Test - Too Short Email", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //invalid user account creation test - too short user email (1 char -> name, domain)
                await testMethods.invalidUserAccountCreationTooShortEmailTest();
            });

            //Test 002k -> invalid user account creation test - too short user password (4 chars) (the too short password input error message hasn't been triggered, test has failed)
            test("Invalid User Sign Up Test - Too Short Password", async function () {
                //navigate to 'Sign up' form test
                await testMethods.navigateToSignUpFormTest();
                //invalid user account creation test - too short user password (4 chars)
                await testMethods.invalidUserAccountCreationTooShortPasswordTest();
            });

        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


