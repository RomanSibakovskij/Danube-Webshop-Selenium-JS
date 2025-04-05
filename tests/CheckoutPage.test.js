const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Checkout Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid Guest Order Checkout Tests(guest)", () => {

        describe("Home Page Product/s Checkout Confirmation Tests (guest)", () => {

            //Test 013 -> home page product ('The Grand Grotsby') check out confirmation test (as a guest) (shipping address only -> as soon as possible shipping)
            test("Home Page Product ('The Grand Grotsby') Checkout Confirmation (Shipping Address Only) Test (as a guest)", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //home page product ('The Grand Grotsby') check out confirmation test (as a guest) (shipping address only -> as soon as possible shipping)
                await testMethods.validOrderCheckoutShipAddressAsSoonOnlyTest();
            });

            //Test 013a -> home page multiple products ('The Grand Grotsby', 'The Pickled Lynx') check out confirmation test (as a guest) (shipping address only -> single package shipping)
            test("Home Page Multiple Products ('The Grand Grotsby', 'The Pickled Lynx') Checkout Confirmation (Shipping Address Only) Test (as a guest)", async function () {
                //home page multiple products ('The Grand Grotsby', 'The Pickled Lynx') addition to cart test (as a guest)
                await testMethods.addMultipleHomePageBooksToCart();
                //home page multiple products ('The Grand Grotsby', 'The Pickled Lynx') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //home page multiple products ('The Grand Grotsby', 'The Pickled Lynx') check out confirmation test (as a guest) (shipping address only -> single package shipping)
                await testMethods.validOrderCheckoutShipAddressSinglePkgOnlyTest();
            });

        });

    });

    describe("Searched Product/s Checkout Confirmation Tests (guest)", () => {

        //Test 014 -> searched product ('The Fjord of the Lies') check out confirmation test (as a guest) (shipping address and billing address -> as soon as possible shipping)
        test("Searched Product ('The Fjord of the Lies') Checkout Confirmation (Shipping Address And Billing Address) Test (as a guest)", async function () {
            //searched product ('The Fjord of the Lies') addition to cart test (as a guest)
            await testMethods.addSearchedBookFjordToCart();
            //searched product ('The Fjord of the Lies') addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //searched product ('The Fjord of the Lies') check out confirmation test (as a guest) (shipping address and billing address -> as soon as possible shipping)
            await testMethods.validOrderCheckoutShipAndBillAddressAsSoonOnlyTest();
        });

        //Test 014a -> multiple searched products ('The Fjord of the Lies','Mostly on the Road') check out confirmation test (as a guest) (shipping address and billing address -> as soon as possible shipping)
        test("Multiple Searched Products ('The Fjord of the Lies','Mostly on the Road') Checkout Confirmation (Shipping Address And Billing Address) Test (as a guest)", async function () {
            //multiple searched products ('The Fjord of the Lies','Mostly on the Road') addition to cart test (as a guest)
            await testMethods.addMultipleSearchedBooksFjordAndRoadToCart();
            //multiple searched products ('The Fjord of the Lies','Mostly on the Road') addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //multiple searched products ('The Fjord of the Lies','Mostly on the Road') check out confirmation test (as a guest) (shipping address and billing address -> as soon as possible shipping)
            await testMethods.validOrderCheckoutShipAndBillAddressSinglePkgOnlyTest();
        });

    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});