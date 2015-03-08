Feature: Responsive Web Design
    As a user
    I want the showitem page to adapt to the type of my device
    So that I can view it on mobile and desktop devices

    Scenario Outline: Should show the page according to the device
        Given a device <device_type>
        When I navigate to the showitem page
        Then the gallery should be approximately <size> of the browser window

        Examples:
        | device_type   | size      |
        | NEXUS_4       | SAME      |
        | NEXUS_7       | A_THIRD   |
