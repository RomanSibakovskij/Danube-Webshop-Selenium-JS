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

    describe("Searched Product/s Addition To Checkout Tests (guest)", () => {

        //Test 010 -> searched product ('The Fjord of the Lies') addition to check out test (as a guest)
        test("Searched Product ('The Fjord of the Lies') Addition To Checkout Test (as a guest)", async function () {
            //searched product ('The Fjord of the Lies') addition to cart test (as a guest)
            await testMethods.addSearchedBookFjordToCart();
            //searched product ('The Fjord of the Lies') addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 010a -> multiple searched products ('The Fjord of the Lies','Mostly on the Road') addition to check out test (as a guest)
        test("Multiple Searched Products ('The Fjord of the Lies','Mostly on the Road') Addition To Checkout Test (as a guest)", async function () {
            //multiple searched products ('The Fjord of the Lies','Mostly on the Road') addition to cart test (as a guest)
            await testMethods.addMultipleSearchedBooksFjordAndRoadToCart();
            //multiple searched products ('The Fjord of the Lies','Mostly on the Road') addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

    });

    describe("Single Product Category Product/s Addition To Checkout Tests (guest)", () => {

        //Test 011 -> single category product page product ('The Insiders') addition to check out test (as a guest)
        test("Single Category Product Page Product ('The Insiders') Addition To Checkout Test (as a guest)", async function () {
            //single category product page product ('The Insiders') addition to cart test (as a guest)
            await testMethods.addSingleCategoryProductToCart();
            //single category product page product ('The Insiders') addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 011a -> single category product page multiple products ('The Insiders','Does the Sun Also Rise?') addition to check out test (as a guest)
        test("Single Category Product Page Multiple Products ('The Insiders', 'Does the Sun Also Rise?') Addition To Checkout Test (as a guest)", async function () {
            //single category product page multiple products ('The Insiders','Does the Sun Also Rise?') addition to cart test (as a guest)
            await testMethods.addSingleCategoryMultipleProductsToCart();
            //single category product page multiple products ('The Insiders','Does the Sun Also Rise?') addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

    });

    describe("Product Removal From Shopping Cart Test", () => {

        //Test 012 -> product removal from cart test
        test("Product Removal From Shopping Cart Test", async function () {
            //single category product page product ('The Insiders') addition to cart test (as a guest)
            await testMethods.addSingleCategoryProductToCart();
            //product removal from cart test
            await testMethods.removeProductFromShoppingCartTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});