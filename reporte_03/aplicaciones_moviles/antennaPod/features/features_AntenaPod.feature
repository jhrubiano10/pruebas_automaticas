Feature: Login feature

  Scenario: Add Podcast
    Given I press "Refresh"
    Then I wait for 3 seconds
    Then I press "Open menu"
    Then I wait for 2 seconds
    Then I touch the "Add Podcast" text
    Then I wait for 2 seconds
    Then I press the "Search iTunes" button    
    Then I wait for 2 seconds
    Then I press "Search"
    Then I wait for 2 seconds
    Then I enter text "Ted Talks" into field with id "search_src_text"
    Then I wait for 2 seconds
    Then I press the enter button
    Then I wait for "TED Talks Daily" to appear
    Then I touch the "TED Talks Daily" text
    Then I wait for 2 seconds
    Then I press "butSubscribe"
    Then I wait for 4 seconds

  Scenario: Listen Podcast
    Given I press "Open menu"
    Then I touch the "Episodes" text
    Then I touch the "New" text
    Then I wait for 2 seconds
    Then I touch the "All" text
    Then I wait for 2 seconds
    Then I touch the "Favorites" text
    Then I wait for 2 seconds
    Then I touch the "All" text
    Then I wait for 2 seconds
    Then I touch the "How to talk (and listen) to transgender people | Jackson Bird" text
    Then I wait for 2 seconds
    Then I press "butAction2"
    Then I wait for 2 seconds
    Then I press "Add to Favorites"
    Then I wait for 8 seconds
  
  Scenario: Delete Podcast
    Given I press "Open menu"
    Then I touch the "Subscriptions" text
    Then I press "triangleCountView"
    Then I wait for 2 seconds
    Then I press "More options"
    Then I wait for 2 seconds
    Then I touch the "Remove Podcast" text
    Then I wait for 2 seconds
    Then I press "button1"
    Then I wait for 4 seconds