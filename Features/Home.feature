Feature: Home feature

  @home
  Scenario: Login scenario test
    Given user is on TT Homepage
    When user click on user icon and signin button
    When user enter username and password
    And user click on login button
    Then verify login popup
   # And close browser

  @home
  Scenario: Family section display scenario
    Given user is on TT Homepage
    When  verify title
    Then verify family section display
   # And close browser

  @home
  Scenario: Search scenario test
    Given user is on TT Homepage
    When enter destination and departfrom
    When select date
    When select nights and guests
    When click on search button
    Then verify search results are displayed
  #  And close browser
