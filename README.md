# JS211_AddressBook

Whiteboard your app
Make a code plan
Pseudo code and then translate to JavaScript




DONE Create a new repo (name it descriptively well), clone it to your local machine and share it with your partner
DONE Open the directory and create an index.html and main.js file to fetch a user and display them one at at time

fetch a user and display them one at a time

Use the API: https://randomuser.me/api/ to fetch a user now
    function to perform a basic fetch



Fetch a new user multiple times and store them in an array
Function:
    variable for the fetches
    call fetch n number of times
    add results to variable
    fetch/add, fetch/add, ...

Then list out all the users in your address book array by name and picture
    Function
    map()
    loop


Figure out how to fetch multiple users in one fetch request
    Main Fetch Function
    /?results=10

Fetch multiple users on window load
    I want to run the main fetch function when the HTML loads in the window

window.load( mainFunction())

DOM
window -- browser
document -- webpage
elements -- stuff on the webpage

Add a button to each user that when clicked displays the rest of their information like DOB, address and so forth

in js,
create a button element
create event listener to change the button class to show/hide extra info.


Once you have the functionality working, feel free to style and structure your address book with CSS and HTML