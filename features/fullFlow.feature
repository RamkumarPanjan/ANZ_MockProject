Feature: ANZ Mock Project Scenario

  Scenario Outline: Register a new User and add item to Cart

    Given user opens automation practice page in a new browser
    Then verifies pratice page is loaded sucessfully
    Then user click on Sign-In link
    When new account creation option is available
    Then a unique email id is used to create a new account
    When new registration page is displayed
    Then enter all required details with password as <password> and create a new account
    When main page is loaded sucessfully
    Then verify username <username> is displayed
    Then add item <productToAdd> to kart
    Then cart is displayed with <productToAdd> item successfully
    When shopping-cart summary page is displayed
    Then proceed till payment page
    Then verify if added item <productToAdd> is available in cart

    Examples:
      | email_id                 | password             | username  | productToAdd         |
      | mock_demo123@gmail.com   | Mockdemo123          | Mock Demo | Printed Summer Dress |

