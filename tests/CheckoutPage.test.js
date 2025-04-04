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

            //Test 012 -> home page product ('The Grand Grotsby') check out confirmation test (as a guest) (shipping address only -> as soon as possible shipping)
            test("Home Page Product ('The Grand Grotsby') Checkout Confirmation (Shipping Address Only) Test (as a guest)", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //home page product ('The Grand Grotsby') check out confirmation test (as a guest) (shipping address only -> as soon as possible shipping)
                await testMethods.validOrderCheckoutShipAddressAsSoonOnlyTest();
            });

        });
    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});