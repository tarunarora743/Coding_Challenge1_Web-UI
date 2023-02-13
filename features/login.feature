Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the belong page
    When I verify that element "nbnPlanIcon" is displayed
    And I verify that element "checkYourAddress" is displayed
    #Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
