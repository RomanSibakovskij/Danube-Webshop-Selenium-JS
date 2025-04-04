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

    describe("Home Page Product/s Addition To Checkout Tests (guest)", () => {

        //Test 009 -> home page product ('The Grand Grotsby') addition to check out test (as a guest)
        test("Home Page Product ('The Grand Grotsby') Addition To Checkout Test (as a guest)", async function () {
            //home page product ('The Grand Grotsby') addition to cart test (as a guest)
            await testMethods.addHomePageGrandGrotsbyBookToCart();
            //home page product ('The Grand Grotsby') addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 009a -> home page multiple products ('The Grand Grotsby', 'The Pickled Lynx') addition to check out test (as a guest)
        test("Home Page Multiple Products ('The Grand Grotsby', 'The Pickled Lynx') Addition To Checkout Test (as a guest)", async function () {
            //home page multiple products ('The Grand Grotsby', 'The Pickled Lynx') addition to cart test (as a guest)
            await testMethods.addMultipleHomePageBooksToCart();
            //home page multiple products ('The Grand Grotsby', 'The Pickled Lynx') addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});