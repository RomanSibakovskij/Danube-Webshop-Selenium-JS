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

    describe("Home Page Product/s Addition To Cart Test (guest)", () => {

        //Test 006 -> home page product ('The Grand Grotsby') addition to cart test
        test("Home Page Product ('The Grand Grotsby') Addition To Cart Test (as a guest)", async function () {
            await testMethods.addHomePageGrandGrotsbyBookToCart();
        });

        //Test 006a -> home page multiple products ('The Grand Grotsby', 'The Pickled Lynx') addition to cart test
        test("Home Page Multiple Products ('The Grand Grotsby', 'The Pickled Lynx') Addition To Cart Test (as a guest)", async function () {
            await testMethods.addMultipleHomePageBooksToCart();
        });

    });

    describe("Searched Product/s Addition To Cart Test (guest)", () => {

        //Test 007 -> searched product ('The Fjord of the Lies') addition to cart test
        test("Searched Product ('The Fjord of the Lies') Addition To Cart Test (as a guest)", async function () {
            await testMethods.addSearchedBookFjordToCart();
        });

        //Test 007a -> multiple searched products ('The Fjord of the Lies','Mostly on the Road') addition to cart test
        test("Multiple Searched Products ('The Fjord of the Lies','Mostly on the Road') Addition To Cart Test (as a guest)", async function () {
            await testMethods.addMultipleSearchedBooksFjordAndRoadToCart();
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


