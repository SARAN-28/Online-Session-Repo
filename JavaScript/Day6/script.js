// Storage ::
// 1. LocalStorage
// 2. Session Storage

// 1. LocalStorage :
// Stores a data in the browser as key-value pairs

// Data remains even after:
// Page Refresh
// Browser restart
// until manually removed

//Store Data:
// localStorage.setItem("name", "Saran");

// Get Data:
// let name = localStorage.getItem("name")
// console.log(name)

// Remove Data:
// localStorage.removeItem("name");


// Session Storage :
// Stores a data in the browser as key-value pairs

// When close the tab it will removed

// Store Data:
// sessionStorage.setItem("name", "Saran")

// Get Data:
// let name = sessionStorage.getItem("name");
// console.log(name)

// Remove Data:
// sessionStorage.removeItem("name")

// Clear All Data:
// localStorage.clear()
// sessionStorage.clear()



// DOM - Document Object Model ::

// 1. What is DOM?
// It allows javascript to access, read, modify, add and remove HTML element and their content.

// HTML is used to create the structure of the webpage
// CSS is used to design the webpage
// JavaScript is used to make the webpage interactive.
// DOM act as a connection between HTML and JavaScript

// 2. How does DOM work?
// When a browser load the HTML Element, it read the HTML and create the DOM tree

// Document    - Represent the entire HTML document
// html        - Root Element
// head        - Contain page information
// title       - Contain webpage title
// body        - Contain visible webpage content
// h1          - Heading Element
// p           - Paragraph Element


// console.log(document.title)
// console.log(document.URL)

// let a = document.getElementById("head")
// console.log(a)
// console.log(a.textContent)
// console.log(a.innerHTML)
// console.log(a.innerText)

// let a = document.getElementsByTagName("h1")
// console.log(a)
// console.log(a[0].textContent)
// console.log(a[1].innerHTML)
// console.log(a[1].innerText)

// let a = document.getElementsByClassName("span1");
// console.log(a)
// console.log(a[0].textContent)
// console.log(a[0].innerHTML)
// console.log(a[0].innerText)

// let a = document.querySelector(".span");
// console.log(a)
// console.log(a.textContent)
// console.log(a.innerHTML)
// console.log(a.innerText)

// let a = document.querySelectorAll(".span")
// console.log(a)
// console.log(a[0].textContent)
// console.log(a[1].innerHTML)
// console.log(a[2].innerText)

// let a = document.createElement("div");
// a.setAttribute("id", "my-div");
// a.textContent = "Create a Element, Set an Attribute, Type the content and Append to body"
// document.body.append(a)
// console.log(a)

// let a = document.getElementById("head")
// a.remove()

// let a = document.querySelector("h1");
// let att = a.getAttribute("id")
// a.removeAttribute("id")
// console.log(att)

// let a = document.getElementById("head");
// let p = document.createElement("h1");
// p.textContent = "This is Replacing Element"
// document.body.replaceChild(p, a)

// let a = document.getElementById("head")
// a.style.backgroundColor = "Red"
// a.style.color = "White"

// let a = document.querySelector(".hello")
// console.log(a)
// a.classList.add("Welcome");
// a.classList.remove("hello");

// function demo(){
//     let a = document.getElementById("head");
//     a.textContent = "My name is Saran";
//     a.style.backgroundColor = "Black";
//     a.style.color = "white"
// }