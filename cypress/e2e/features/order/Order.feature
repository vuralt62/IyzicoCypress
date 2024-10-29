@Order @Smoke
Feature: Order

    Background:
    Given I open fullscreen browser
    Given I open 'https://www.iyzico.com/demo' page

    @SuccesfullOrder
    Scenario: Succesfull Order
    Then I see "order" page
    When I click "products"
    When I click "addToCart"
    When I click "showBasket"
    When I click "goToPaymentPage"
    When I click "debitCard"
    When I click "payWithDebitOrCreditCard"
    Then I registered "order" user
    When I type "Vural Top" in "cardHolderName"
    When I type "cardNumber" in "cardNumber" variables
    When I type "1027" in "expireDate"
    When I type "456" in "cvc"
    When I click "pay"
    When I save text "smsCodeText" in "smsCode"
    When I split "smsCode" variable with "(" text and get 1 index
    When I split "smsCode" variable with ")" text and get 0 index
    When I type "smsCode" in "smsCode" variables
    When I click "submitBtn"
    When I see "SiparisAlindi" element