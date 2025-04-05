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

            //Test 016h -> invalid guest check out confirmation test (billing address) - no guest billing last name (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Billing Address) Test - No Guest Billing Last Name", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (billing address) - no guest last name
                await testMethods.invalidOrderCheckoutBillAddressNoGuestLastNameTest();
            });

            //Test 016i -> invalid guest check out confirmation test (billing address) - no guest billing address (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Billing Address) Test - No Guest Billing Address", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (billing address) - no guest address
                await testMethods.invalidOrderCheckoutBillAddressNoGuestAddressTest();
            });

            //Test 016j -> invalid guest check out confirmation test (billing address) - no guest billing post code (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Billing Address) Test - No Guest Billing Post Code", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (billing address) - no guest post code
                await testMethods.invalidOrderCheckoutBillAddressNoGuestPostCodeTest();
            });

            //Test 016k -> invalid guest check out confirmation test (billing address) - no guest billing city (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Billing Address) Test - No Guest Billing City", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (billing address) - no guest city
                await testMethods.invalidOrderCheckoutBillAddressNoGuestCityTest();
            });

            //Test 016l -> invalid guest check out confirmation test (billing address) - no guest billing company (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Billing Address) Test - No Guest Billing Company", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (billing address) - no guest company
                await testMethods.invalidOrderCheckoutBillAddressNoGuestCompanyTest();
            });

        });

        describe("Invalid Guest Checkout Confirmation Tests - Too Short Singular Input", () => {

            //Test 016m -> invalid guest check out confirmation test (shipping address) - too short guest shipping first name (1 char) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - Too Short Guest Shipping First Name", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - too short guest shipping first name (1 char)
                await testMethods.invalidOrderCheckoutShipAddressTooShortGuestFirstNameTest();
            });

            //Test 016n -> invalid guest check out confirmation test (shipping address) - too short guest shipping last name (1 char) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - Too Short Guest Shipping Last Name", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - too short guest shipping last name (1 char)
                await testMethods.invalidOrderCheckoutShipAddressTooShortGuestLastNameTest();
            });

            //Test 016o -> invalid guest check out confirmation test (shipping address) - too short guest shipping address (4 chars) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - Too Short Guest Shipping Address", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - too short guest shipping address (4 chars)
                await testMethods.invalidOrderCheckoutShipAddressTooShortGuestAddressTest();
            });

            //Test 016p -> invalid guest check out confirmation test (shipping address) - too short guest shipping post code (4 digits) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - Too Short Guest Shipping Post Code", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - too short guest shipping post code (4 digits)
                await testMethods.invalidOrderCheckoutShipAddressTooShortGuestPostCodeTest();
            });

            //Test 016q -> invalid guest check out confirmation test (shipping address) - too short guest shipping city (1 char) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - Too Short Guest Shipping City", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - too short guest shipping city (1 char)
                await testMethods.invalidOrderCheckoutShipAddressTooShortGuestCityTest();
            });

            //Test 016r -> invalid guest check out confirmation test (shipping address) - too short guest shipping company (1 char) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - Too Short Guest Shipping Company", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - too short guest shipping company (1 char)
                await testMethods.invalidOrderCheckoutShipAddressTooShortGuestCompanyTest();
            });

            //Test 016s -> invalid guest check out confirmation test (billing address) - too short guest billing first name (1 char) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Billing Address) Test - Too Short Guest Billing First Name", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (billing address) - too short guest billing first name (1 char)
                await testMethods.invalidOrderCheckoutBillAddressTooShortGuestFirstNameTest();
            });

            //Test 016t -> invalid guest check out confirmation test (billing address) - too short guest billing last name (1 char) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Billing Address) Test - Too Short Guest Billing Last Name", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (billing address) - too short guest billing last name (1 char)
                await testMethods.invalidOrderCheckoutBillAddressTooShortGuestLastNameTest();
            });

            //Test 016u -> invalid guest check out confirmation test (billing address) - too short guest billing address (4 chars) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Billing Address) Test - Too Short Guest Billing Address", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (billing address) - too short guest billing address (4 chars)
                await testMethods.invalidOrderCheckoutBillAddressTooShortGuestAddressTest();
            });

            //Test 016v -> invalid guest check out confirmation test (billing address) - too short guest billing post code (4 digits) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Billing Address) Test - Too Short Guest Billing Post Code", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (billing address) - too short guest billing post code (4 digits)
                await testMethods.invalidOrderCheckoutBillAddressTooShortGuestPostCodeTest();
            });

            //Test 016w -> invalid guest check out confirmation test (billing address) - too short guest billing city (1 char) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Billing Address) Test - Too Short Guest Billing City", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (billing address) - too short guest billing city (1 char)
                await testMethods.invalidOrderCheckoutBillAddressTooShortGuestCityTest();
            });

            //Test 016x -> invalid guest check out confirmation test (billing address) - too short guest billing company (1 char) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Billing Address) Test - Too Short Guest Billing Company", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (billing address) - too short guest billing company (1 char)
                await testMethods.invalidOrderCheckoutBillAddressTooShortGuestCompanyTest();
            });

        });

        describe("Invalid Guest Checkout Confirmation Tests - Too Long Singular Input", () => {

            //Test 016y -> invalid guest check out confirmation test (shipping address) - too long guest shipping first name (100 chars) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - Too Long Guest Shipping First Name", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - too long guest shipping first name (100 chars)
                await testMethods.invalidOrderCheckoutShipAddressTooLongGuestFirstNameTest();
            });

            //Test 016z -> invalid guest check out confirmation test (shipping address) - too long guest shipping last name (100 chars) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - Too Long Guest Shipping Last Name", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - too long guest shipping last name (100 chars)
                await testMethods.invalidOrderCheckoutShipAddressTooLongGuestLastNameTest();
            });

            //Test 016aa -> invalid guest check out confirmation test (shipping address) - too long guest shipping address (100 chars) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - Too Long Guest Shipping Address", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - too long guest shipping address (100 chars)
                await testMethods.invalidOrderCheckoutShipAddressTooLongGuestAddressTest();
            });

            //Test 016ab -> invalid guest check out confirmation test (shipping address) - too long guest shipping post code (25 digits) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - Too Long Guest Shipping Post Code", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - too long guest shipping post code (25 digits)
                await testMethods.invalidOrderCheckoutShipAddressTooLongGuestPostCodeTest();
            });

            //Test 016ac -> invalid guest check out confirmation test (shipping address) - too long guest shipping city (100 chars) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - Too Long Guest Shipping City", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - too long guest shipping city (100 chars)
                await testMethods.invalidOrderCheckoutShipAddressTooLongGuestCityTest();
            });

            //Test 016ad -> invalid guest check out confirmation test (shipping address) - too long guest shipping company (100 chars) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Shipping Address) Test - Too Long Guest Shipping Company", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (shipping address) - too long guest shipping company (100 chars)
                await testMethods.invalidOrderCheckoutShipAddressTooLongGuestCompanyTest();
            });

            //Test 016ae -> invalid guest check out confirmation test (billing address) - too long guest billing first name (100 chars) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Billing Address) Test - Too Long Guest Billing First Name", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (billing address) - too long guest billing first name (100 chars)
                await testMethods.invalidOrderCheckoutBillAddressTooLongGuestFirstNameTest();
            });

            //Test 016af -> invalid guest check out confirmation test (billing address) - too long guest billing last name (100 chars) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Billing Address) Test - Too Long Guest Billing Last Name", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (billing address) - too long guest billing last name (100 chars)
                await testMethods.invalidOrderCheckoutBillAddressTooLongGuestLastNameTest();
            });

            //Test 016ag -> invalid guest check out confirmation test (billing address) - too long guest billing address (100 chars) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Billing Address) Test - Too Long Guest Billing Address", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (billing address) - too long guest billing address (100 chars)
                await testMethods.invalidOrderCheckoutBillAddressTooLongGuestAddressTest();
            });

            //Test 016ah -> invalid guest check out confirmation test (billing address) - too long guest billing post code (25 digits) (the order gets submitted, test has failed)
            test("Invalid Guest Checkout Confirmation (Billing Address) Test - Too Long Guest Billing Post Code", async function () {
                //home page product ('The Grand Grotsby') addition to cart test (as a guest)
                await testMethods.addHomePageGrandGrotsbyBookToCart();
                //home page product ('The Grand Grotsby') addition to check out test (as a guest)
                await testMethods.addProductToCheckoutTest();
                //invalid guest check out confirmation test (billing address) - too long guest billing post code (25 digits)
                await testMethods.invalidOrderCheckoutBillAddressTooLongGuestPostCodeTest();
            });

        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});