window.onload = function() {
    displayContacts()

}


// fetch a user and display them one at a time
let arrayOfContacts = [];

const getContacts = () => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => arrayOfContacts = data)
      
      .then(data => {console.log(arrayOfContacts)}) // Remove this later
  }

// Display a user in your address book array by name and picture

const displayContacts = () => {

    getContacts();

    for(let i = 0; i < arrayOfContacts.length; i++) {

    let addressList = document.getElementById("container");

        let html = `
        <h1>${arrayOfContacts[i].name.first} ${arrayOfContacts[i].name.last}</h1>

    `;

    addressList.insertAdjacentHTML("afterbegin", html)

    }
    // what to put in the container
    // if i use a loop here, i'll have to use bracket notation.
    // arrayOfContacts[i].name.first .name.last, 
    // arrayOfContacts[i].picture.medium
    // button to show more on click
    // person's address, phone, email

// array.map(each, index) => { // build your address card with dot notation each.name.first
}