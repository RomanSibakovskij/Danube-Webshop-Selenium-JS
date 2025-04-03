const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Home Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Navigate to 'Sign Up' Form Test", () => {

        //Test 001 -> Navigate to 'Sign up' form test
        test("Navigate to 'Sign up' Form Test", async function () {
            await testMethods.navigateToSignUpFormTest();
        });

    });

    describe("Home Page Product Addition To Cart Test (guest)", () => {

        //Test 006 -> home page product ('The Grand Grotsby') addition to cart test
        test("Home Page Product ('The Grand Grotsby') Addition To Cart Test (as a guest)", async function () {
            await testMethods.addHomePageGrandGrotsbyBookToCart();
        });

    });

    describe("Searched Addition To Cart Test (guest)", () => {

        //Test 007 -> searched product ('The Fjord of the Lies') addition to cart test
        test("Searched Product ('The Fjord of the Lies') Addition To Cart Test (as a guest)", async function () {
            await testMethods.addSearchedBookFjordToCart();
        });

    });

    describe("Single Product Category Product Addition To Cart Test (guest)", () => {

        //Test 008 -> single category product page product ('The Insiders') addition to cart test
        test("Single Category Product Page Product ('The Insiders') Addition To Cart Test (as a guest)", async function () {
            await testMethods.addSingleCategoryProductToCart();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


