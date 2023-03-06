window.onload = function() {
    getContacts()

}
let people = []

const container=document.getElementById("container")

// fetch a user and display them one at a time
let addressList = document.getElementById("container");

const displayInfo = (element) => {
  const el=document.getElementById(element.id+"-person")
  if(!el.style.display || el.style.display === "none") {
    return el.style.display="flex"
  }
el.style.display="none"

}

const getContacts = () => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => {
        if(!res.ok) {
          throw Error(res.statusText)
        } return res.json()
      })
      // .then(res => res.json())
      .then(data => people = data.results)
      .catch(err => console.log(`Error, ${err}`)) 
      .then(()=>{
        console.log(people)

        people.forEach((person) => {
        const content=document.createElement("div")
        // console.log(content)
        content.innerHTML=`
        <h4>${person.name.first}  ${person.name.last}</h4>
          <img src="${person.picture.large}"/>
        <button id=${person.login.uuid} onclick=displayInfo(this)> More Info </button>
        <div id=${person.login.uuid+"-person"} class="info">
          email:${person.email}
        </div>
        `
        
        console.log(content)
        container.appendChild(content);
        })
      })
      // .then(people => {  people.map((person, i) => {
      //   let html = `
      //   <h4>${person.name.first}  ${person.name.last}</h4>
      //   <img src="${person.picture.large}">
        
        
      //   `;
      
      
      // addressList.insertAdjacentHTML("afterbegin", html);
//   })
// })
}


// const assert = require('assert');
// functionshowHide() {



// }

// Display a user in your address book array by name and picture

// const displayContacts = () => {

//     getContacts();

//     for(let i = 0; i < arrayOfContacts.length; i++) {

//     let addressList = document.getElementById("container");

//         let html = `
//         <h1>${arrayOfContacts[i].name.first} ${arrayOfContacts[i].name.last}</h1>

//     `;

//     addressList.insertAdjacentHTML("afterbegin", html)

//     }
    // what to put in the container
    // if i use a loop here, i'll have to use bracket notation.
    // arrayOfContacts[i].name.first .name.last, 
    // arrayOfContacts[i].picture.medium
    // button to show more on click
    // person's address, phone, email

// array.map(each, index) => { // build your address card with dot notation each.name.first
// }