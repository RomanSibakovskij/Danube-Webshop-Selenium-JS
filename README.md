# DanubeWebshopSeleniumJS

Selenium test suite on basic e-commerce web app functionality (various product addition to / quantity update / removal from shopping cart / order checkout) The test suite captures screenshots at the end of test case run (for logging purposes).

#Tech Requirements:
 1.Java JDK 8 or higher 
 
 2.Node.js

 3.Jest
 
 4.IntelliJ IDEA (or another IDE that supports Java and Maven)

#Setup

1. Clone this repository into IntelliJ(or other IDE) workspace folder (or wherever the project can be launched by IDE)
2. Open the IDE and open the project folder
3. Install Node.js
4. Make sure JavaScript/TypeScript plugins are enabled in the IDE.
5. Install and configure Jest (enter in IDE terminal: npm install --save-dev jest)
6. Run the test suite on the IDE

## Test Case List

//Navigate to 'Sign Up' Form Test

1.	//Test 001 -> Navigate to 'Sign up' form test

//Valid User Account Creation Tests

1.	//Test 002 -> valid user account creation test
2.	//Test 002a -> valid user business account creation test

//Invalid User Account Creation Tests

//Invalid User Account Creation Tests - No Singular Input

1.	//Test 002b -> invalid user account creation test - no user first name
2.	//Test 002c -> invalid user account creation test - no user last name
3.	//Test 002d -> invalid user account creation test - no user email
4.	//Test 002e -> invalid user account creation test - no user password
5.	//Test 002f -> invalid user account creation test - no user account usage statement
6.	//Test 002g -> invalid user account creation test - no user agreement with privacy policy

//Invalid User Account Creation Tests - Too Short Singular Input

1.	//Test 002h -> invalid user account creation test - too short user first name (1 char)
2.	//Test 002i -> invalid user account creation test - too short user last name (1 char)
3.	//Test 002j -> invalid user account creation test - too short user email (1 char -> name, domain)
4.	//Test 002k -> invalid user account creation test - too short user password (4 chars)

//Invalid User Account Creation Tests - Too Long Singular Input

1.	//Test 002l -> invalid user account creation test - too long user first name (100 chars)
2.	//Test 002m -> invalid user account creation test - too long user last name (100 chars)
3.	//Test 002n -> invalid user account creation test - too long user email (100 chars -> name, domain)
4.	//Test 002o -> invalid user account creation test - too long user password (21 chars)

//Invalid User Account Creation Tests - Invalid Singular Input Format

1.	//Test 002p -> invalid user account creation test - invalid user first name format (special symbols only)
2.	//Test 002q -> invalid user account creation test - invalid user last name format (special symbols only)
3.	//Test 002r -> invalid user account creation test - invalid user email format (missing '@')
4.	//Test 002s -> invalid user account creation test - pre-existing user email (used beforehand in account creation)

//Valid User Account Edit Test

1.	//Test 003 -> valid edit user account edit test

//Invalid User Account Edit Tests

//Invalid User Account Edit Tests - No Singular Input

1.	//Test 003a -> invalid edit user account edit test - no user first name
2.	//Test 003b -> invalid edit user account edit test - no user last name
3.	//Test 003c -> invalid edit user account edit test - no user address
4.	//Test 003d -> invalid edit user account edit test - no user post code
5.	//Test 003e -> invalid edit user account edit test - no user city

//Invalid User Account Edit Tests - Too Short Singular Input

1.	//Test 003f -> invalid edit user account edit test - too short user first name (1 char)
2.	//Test 003g -> invalid edit user account edit test - too short user last name (1 char)
3.	//Test 003h -> invalid edit user account edit test - too short user address (5 chars)
4.	//Test 003i -> invalid edit user account edit test - too short user post code (4 digits)
5.	//Test 003j -> invalid edit user account edit test - too short user city (2 chars)

//Invalid User Account Edit Tests - Too Long Singular Input

1.	//Test 003k -> invalid edit user account edit test - too long user first name (100 chars)
2.	//Test 003l -> invalid edit user account edit test - too long user last name (100 chars)
3.	//Test 003m -> invalid edit user account edit test - too long user address (100 chars)
4.	//Test 003n -> invalid edit user account edit test - too long user post code (25 digits)
5.	//Test 003o -> invalid edit user account edit test - too long user city (75 chars)

//Invalid User Account Edit Tests - Invalid Singular Input Format

1.	//Test 003p -> invalid edit user account edit test - invalid user first name format (special symbols only)
2.	//Test 003q -> invalid edit user account edit test - invalid user last name format (special symbols only)
3.	//Test 003r -> invalid edit user account edit test - invalid user address format (special symbols only)
4.	//Test 003s -> invalid edit user account edit test - invalid user post code format (special symbols only)
5.	//Test 003t -> invalid edit user account edit test - invalid user city format (special symbols only)

//User Logout Tests

1.	//Test 004 -> user account logout test
2.	//Test 004a -> user business account logout test

//Valid User Account Login Tests

1.	//Test 005 -> valid user account login test
2.	//Test 005a -> valid user business account login test

//Invalid User Account Login Tests

//Invalid User Account Login Tests - No Singular Input

1.	//Test 005b -> invalid user account login test - no user login email
2.	//Test 005c -> invalid user account login test - no user login password

//Invalid User Account Login Tests - Invalid Singular Input

1.	//Test 005d -> invalid user account login test - invalid user login email
2.	//Test 005e -> invalid user account login test - invalid user login password

//Home Page Product/s Addition To Cart Tests (guest)

1.	//Test 006 -> home page product ('The Grand Grotsby') addition to cart test (as a guest)
2.	//Test 006a -> home page multiple products ('The Grand Grotsby', 'The Pickled Lynx') addition to cart test (as a guest)

//Searched Product/s Addition To Cart Tests (guest)

1.	//Test 007 -> searched product ('The Fjord of the Lies') addition to cart test (as a guest)
2.	//Test 007a -> multiple searched products ('The Fjord of the Lies','Mostly on the Road') addition to cart test (as a guest)

//Single Product Category Product Addition To Cart Tests (guest)

1.	//Test 008 -> single category product page product ('The Insiders') addition to cart test (as a guest)
2.	//Test 008a -> single category product page multiple products ('The Insiders','Does the Sun Also Rise?') addition to cart test (as a guest)

//Home Page Product/s Addition To Checkout Tests (guest)

1.	//Test 009 -> home page product ('The Grand Grotsby') addition to check out test (as a guest)
2.	//Test 009a -> home page multiple products ('The Grand Grotsby', 'The Pickled Lynx') addition to check out test (as a guest)

//Searched Product/s Addition To Checkout Tests (guest)

1.	//Test 010 -> searched product ('The Fjord of the Lies') addition to check out test (as a guest)
2.	//Test 010a -> multiple searched products ('The Fjord of the Lies','Mostly on the Road') addition to check out test (as a guest)

//Single Product Category Product Addition To Checkout Tests (guest)

1.	//Test 011 -> single category product page product ('The Insiders') addition to check out test (as a guest)
2.	//Test 011a -> single category product page multiple products ('The Insiders','Does the Sun Also Rise?') addition to check out test (as a guest)

//Product Removal From Shopping Cart Test

1.	//Test 012 -> product removal from cart test

//Valid Guest Order Checkout Tests (guest)

//Home Page Product/s Checkout Confirmation Tests (guest)

1.	//Test 013 -> home page product ('The Grand Grotsby') check out confirmation test (as a guest)
2.	//Test 013a -> home page multiple products ('The Grand Grotsby', 'The Pickled Lynx') check out confirmation test (as a guest)

//Searched Product/s Checkout Confirmation Tests (guest)

1.	//Test 014 -> searched product ('The Fjord of the Lies') check out confirmation test (as a guest) (shipping address and billing address -> as soon as possible shipping)
2.	//Test 014a -> multiple searched products ('The Fjord of the Lies','Mostly on the Road') check out confirmation test (as a guest) (shipping address and billing address -> single package shipping)

//Single Product Category Product/s Checkout Confirmation Tests (guest)

1.	//Test 015 -> single category product page product ('The Insiders') check out confirmation test (as a guest) (shipping address and billing address -> as soon as possible shipping)
2.	//Test 015a -> single category product page multiple products ('The Insiders','Does the Sun Also Rise?') check out confirmation test (as a guest) (shipping address and billing address -> single package shipping)

//Invalid Guest Order Checkout Tests

//Invalid Guest Checkout Confirmation Tests - No Singular Input

1.	//Test 016 -> invalid guest check out confirmation test (shipping address) - no guest shipping first name
2.	//Test 016a -> invalid guest check out confirmation test (shipping address) - no guest shipping last name
3.	//Test 016b -> invalid guest check out confirmation test (shipping address) - no guest shipping address
4.	//Test 016c -> invalid guest check out confirmation test (shipping address) - no guest shipping post code
5.	//Test 016d -> invalid guest check out confirmation test (shipping address) - no guest shipping city
6.	//Test 016e -> invalid guest check out confirmation test (shipping address) - no guest shipping company
7.	//Test 016f -> invalid guest check out confirmation test (shipping address) - no guest shipping method selection
8.	//Test 016g -> invalid guest check out confirmation test (billing address) - no guest billing first name
9.	//Test 016h -> invalid guest check out confirmation test (billing address) - no guest billing last name
10.	//Test 016i -> invalid guest check out confirmation test (billing address) - no guest billing address
11.	//Test 016j -> invalid guest check out confirmation test (billing address) - no guest billing post code
12.	//Test 016k -> invalid guest check out confirmation test (billing address) - no guest billing city
13.	//Test 016l -> invalid guest check out confirmation test (billing address) - no guest billing company

//Invalid Guest Checkout Confirmation Tests - Too Short Singular Input

1.	//Test 016m -> invalid guest check out confirmation test (shipping address) - too short guest shipping first name (1 char)
2.	//Test 016n -> invalid guest check out confirmation test (shipping address) - too short guest shipping last name (1 char)
3.	//Test 016o -> invalid guest check out confirmation test (shipping address) - too short guest shipping address (4 chars)
4.	//Test 016p -> invalid guest check out confirmation test (shipping address) - too short guest shipping post code (4 digits)
5.	//Test 016q -> invalid guest check out confirmation test (shipping address) - too short guest shipping city (1 char)
6.	//Test 016r -> invalid guest check out confirmation test (shipping address) - too short guest shipping company (1 char)
7.	//Test 016s -> invalid guest check out confirmation test (billing address) - too short guest billing first name (1 char)
8.	//Test 016t -> invalid guest check out confirmation test (billing address) - too short guest billing last name (1 char)
9.	//Test 016u -> invalid guest check out confirmation test (billing address) - too short guest billing address (4 chars)
10.	//Test 016v -> invalid guest check out confirmation test (billing address) - too short guest billing post code (4 digits)
11.	//Test 016w -> invalid guest check out confirmation test (billing address) - too short guest billing city (1 char)
12.	//Test 016x -> invalid guest check out confirmation test (billing address) - too short guest billing company (1 char)

//Invalid Guest Checkout Confirmation Tests - Too Long Singular Input

1.	//Test 016y -> invalid guest check out confirmation test (shipping address) - too long guest shipping first name (100 chars)
2.	//Test 016z -> invalid guest check out confirmation test (shipping address) - too long guest shipping last name (100 chars)
3.	//Test 016aa -> invalid guest check out confirmation test (shipping address) - too long guest shipping address (100 chars)
4.	//Test 016ab -> invalid guest check out confirmation test (shipping address) - too long guest shipping post code (25 digits)
5.	//Test 016ac -> invalid guest check out confirmation test (shipping address) - too long guest shipping city (100 chars)
6.	//Test 016ad -> invalid guest check out confirmation test (shipping address) - too long guest shipping company (100 chars)
7.	//Test 016ae -> invalid guest check out confirmation test (billing address) - too long guest billing first name (100 chars)
8.	//Test 016af -> invalid guest check out confirmation test (billing address) - too long guest billing last name (100 chars)
9.	//Test 016ag -> invalid guest check out confirmation test (billing address) - too long guest billing address (100 chars)
10.	//Test 016ah -> invalid guest check out confirmation test (billing address) - too long guest billing post code (25 digits)
11.	//Test 016ai -> invalid guest check out confirmation test (billing address) - too long guest billing city (100 chars)
12.	//Test 016aj -> invalid guest check out confirmation test (billing address) - too long guest billing company (100 chars)

//Invalid Guest Checkout Confirmation Tests - Invalid Singular Input Format

1.	//Test 016ak -> invalid guest check out confirmation test (shipping address) - invalid guest shipping first name format (special symbols only)
2.	//Test 016al -> invalid guest check out confirmation test (shipping address) - invalid guest shipping last name format (special symbols only)
3.	//Test 016am -> invalid guest check out confirmation test (shipping address) - invalid guest shipping address format (special symbols only)
4.	//Test 016an -> invalid guest check out confirmation test (shipping address) - invalid guest shipping post code format (special symbols only)
5.	//Test 016ao -> invalid guest check out confirmation test (shipping address) - invalid guest shipping city format (special symbols only)
6.	//Test 016ap -> invalid guest check out confirmation test (shipping address) - invalid guest shipping company format (special symbols only)
7.	//Test 016aq -> invalid guest check out confirmation test (billing address) - invalid guest billing first name format (special symbols only)
8.	//Test 016ar -> invalid guest check out confirmation test (billing address) - invalid guest billing last name format (special symbols only)
9.	//Test 016as -> invalid guest check out confirmation test (billing address) - invalid guest billing address format (special symbols only)
10.	//Test 016at -> invalid guest check out confirmation test (billing address) - invalid guest billing post code format (special symbols only)
11.	//Test 016au -> invalid guest check out confirmation test (billing address) - invalid guest billing city format (special symbols only)
12.	//Test 016av -> invalid guest check out confirmation test (billing address) - invalid guest billing company format (special symbols only)
