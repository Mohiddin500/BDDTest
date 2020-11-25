Feature: Fod feature

  Background: serp page display
    Given user is on TT Homepage
    When enter destination and departfrom
    When select date
    When select nights and guests
    When click on search button
    Then verify search results are displayed
    When user verify title
    When user select the hotel
   	Then verify hotel information section display

  @home
  Scenario: Hotel Information display scenario
    When user verify title
    When user verify Url
    Then verify hotel information section display
   # And close browser

  @home
  Scenario: NearBy Hotel display scenario
    When user verify title
    When user verify Url
    Then verify nearby hotel section display
  #  And close browser

  @home
  Scenario: Carona text display scenario
    When user verify title
    When user verify Url
    Then verify Carona text section display
   # And close browser
