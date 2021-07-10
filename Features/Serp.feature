Feature: serp feature

  Background: serp page display
    Given user is on TT Homepage
    When enter destination and departfrom
    When select date
    When select nights and guests
    When click on search button
    Then verify search results are displayed

  @home
  Scenario: Search results section display scenario
    When user verify title
    When user verify Url
    Then verify search results section display
 #   And close browser

  @home
  Scenario: Sort by price scenario
    When user verify sortbyprice tab display
    Then user click on sortbyprice tab
  #  And close browser

  @home
  Scenario: Filter section display scenario
    Then user verify filters section display
  #  And close browser

    
    @home
  Scenario: Select a hotel scenario
    When user select the hotel
    Then verify hotel information section display
    #And close browser