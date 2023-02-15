Feature: The Belong homepage address servicibilty check

  Scenario: As a user, I can check if my address is servicible for NBN

    Given I am on the belong homePage
    When I verify that element "nbnPlanIcon" is displayed
    And I verify that element "checkYourAddress" is displayed
    And I click on "checkYourAddress" button 
    And I verify that element "addressSearchBar" is displayed
    And I verify that URL contains "go/internet#address-check" text
    And I enter "1/297 Jells Road Wheelers Hill" value in the "addressSearchBar" box
    And I verify that element "addressQueryList" is displayed
    And I verify that the top result in "addressQueryList" matches the text "Unit 1 297 Jells Road, WHEELERS HILL VIC 3150"
    And I select the top result from "addressQueryList"
    And I verify that element "reviewYourAddress" is displayed
    And I click on "checkAddress" button 
    And I verify that element "fistBumpImage" is displayed
    And I verify that the "servicibilityHeader" matches the text "Great! We can connect you to NBN internet"


