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

        //Test 014a -> multiple searched products ('The Fjord of the Lies','Mostly on the Road') check out confirmation test (as a guest) (shipping address and billing address -> single package shipping)
        test("Multiple Searched Products ('The Fjord of the Lies','Mostly on the Road') Checkout Confirmation (Shipping Address And Billing Address) Test (as a guest)", async function () {
            //multiple searched products ('The Fjord of the Lies','Mostly on the Road') addition to cart test (as a guest)
            await testMethods.addMultipleSearchedBooksFjordAndRoadToCart();
            //multiple searched products ('The Fjord of the Lies','Mostly on the Road') addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //multiple searched products ('The Fjord of the Lies','Mostly on the Road') check out confirmation test (as a guest) (shipping address and billing address -> single package shipping)
            await testMethods.validOrderCheckoutShipAndBillAddressSinglePkgOnlyTest();
        });

    });

    describe("Single Product Category Product/s Checkout Confirmation Tests (guest)", () => {

        //Test 015 -> single category product page product ('The Insiders') check out confirmation test (as a guest) (shipping address and billing address -> as soon as possible shipping)
        test("Single Category Product Page Product ('The Insiders') Checkout Confirmation (Shipping Address And Billing Address) Test (as a guest)", async function () {
            //single category product page product ('The Insiders') addition to cart test (as a guest)
            await testMethods.addSingleCategoryProductToCart();
            //single category product page product ('The Insiders') addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //single category product page product ('The Insiders') check out confirmation test (as a guest) (shipping address and billing address -> as soon as possible shipping)
            await testMethods.validOrderCheckoutShipAndBillAddressAsSoonOnlyTest();
        });

        //Test 015a -> single category product page multiple products ('The Insiders','Does the Sun Also Rise?') check out confirmation test (as a guest) (shipping address and billing address -> single package shipping)
        test("Single Category Product Page Multiple Products ('The Insiders', 'Does the Sun Also Rise?') Checkout Confirmation Test (as a guest)", async function () {
            //single category product page multiple products ('The Insiders','Does the Sun Also Rise?') addition to cart test (as a guest)
            await testMethods.addSingleCategoryMultipleProductsToCart();
            //single category product page multiple products ('The Insiders','Does the Sun Also Rise?') addition to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
            //single category product page multiple products ('The Insiders','Does the Sun Also Rise?') check out confirmation test (as a guest) (shipping address and billing address -> single package shipping)
            await testMethods.validOrderCheckoutShipAndBillAddressSinglePkgOnlyTest();
        });

    });

    describe("Invalid Guest Order Checkout Tests", () => {

        describe("Invalid Guest Checkout Confirmation Tests - No Singular Input", () => {

            //Test 016 -> invalid guest check out confirmation test (shipping address) - no guest shipping first name
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - No Guest Shipping First Name", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - no guest shipping first name
                await testMethods.invalidOrderCheckoutShipAddressNoGuestFirstNameTest();
            });

            //Test 016a -> invalid guest check out confirmation test (shipping address) - no guest shipping last name
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - No Guest Shipping Last Name", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - no guest shipping last name
                await testMethods.invalidOrderCheckoutShipAddressNoGuestLastNameTest();
            });

            //Test 016b -> invalid guest check out confirmation test (shipping address) - no guest shipping address
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - No Guest Shipping Address", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - no guest shipping address
                await testMethods.invalidOrderCheckoutShipAddressNoGuestAddressTest();
            });

            //Test 016c -> invalid guest check out confirmation test (shipping address) - no guest shipping post code
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - No Guest Shipping Post Code", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - no guest post code
                await testMethods.invalidOrderCheckoutShipAddressNoGuestPostCodeTest();
            });

            //Test 016d -> invalid guest check out confirmation test (shipping address) - no guest shipping city
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - No Guest Shipping City", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - no guest city
                await testMethods.invalidOrderCheckoutShipAddressNoGuestCityTest();
            });

            //Test 016e -> invalid guest check out confirmation test (shipping address) - no guest shipping company
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - No Guest Shipping Company", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - no guest company
                await testMethods.invalidOrderCheckoutShipAddressNoGuestCompanyTest();
            });

            //Test 016f -> invalid guest check out confirmation test (shipping address) - no guest shipping method selection (the checkout gets confirmed, test has failed)
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - No Guest Shipping Method Selection", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - no guest shipping method
                await testMethods.invalidOrderCheckoutShipAddressNoGuestShipMethodTest();
            });

            //Test 016g -> invalid guest check out confirmation test (billing address) - no guest billing first name (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Billing Address) Test - No Guest Billing First Name", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (billing address) - no guest first name
                await testMethods.invalidOrderCheckoutBillAddressNoGuestFirstNameTest();
            });

        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});