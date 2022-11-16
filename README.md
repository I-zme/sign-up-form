# sign-up-form

Sign up form for the Odin Project

Required: create a basic form with names, email, password and basic accessability. recognise if possible if the confirm password is equal to the password. use regex.

in this website:
- password validation displayed to user for its different components for better ux
- validation of input displayed for user visually and with aria-label
- password is hidden using * but can be toggled to show the text
- additional instructions for phone available when input is invalid
- regex for all inputs (except email)
- created the logo design personally
- optional entry slider (not in use but can be)


ISSUES:
    browser support issues:
FIREFOX: use of :has() which is not yet compatible in Firefox, as such form not functional in Firefox (form works but the validation isn't displayed). => will not be addressed
INTERNET EXPLORER:

SAFARI: 
- ::marker only changes size and color, not the content, so the check and x don't show. issue for color blind people.
-  

    phone:
    - flexible number of characters, easy to enter an invalid number.
>> no fix in this version. plus is that it can take different phone numbers.
- doesn't specify whether international or national number format. A recognized choice because this isn't a real form and i apparently don't care.
-rigid structure, doesn't accept spacing, hyphens, parenthesis etc.
>> to improve experience added instruction with pattern example that is displayed if user made mistake entering the pattern.
- does not help the customer fill in (no mask)

