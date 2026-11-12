// JavaScript DOM - Event Listener ::

// 1. What is Event?
// Event is an action that happen in a web browser

// - Clicking a button
// - Movuing the mouse
// - Pressing a keyboard key
// - Submiting a form
// - Typing inside an input field

// 2. Event Listener?
// Used to listen for a particular event on the HTML element and execute it.

// Syntax:
// Element.addEventListener("event", function)

// element             - HTML element we want to target
// addEventListener    - Method used to attach the event
// event               - Event name
// function            - Code that execute when the event occurs

// Eg:

// let btn = document.getElementById("btn")
// btn.addEventListener("click", ()=>{
//     let a = document.getElementById("head")
//     a.style.background = "black"
//     a.style.color = "green"
//     a.textContent = "Good Morning"
// })

// Eg:

// function press(event){
//     console.log(event.key)
// }


// Form Validation ::

// function formValidate(name){
    
//     const user = /^[A-Za-z ]{2,7}$/;

//     if(name === ""){
//         alert("Type the User name")
//     }
//     else if (!user.test(name)){
//         alert("Name in invalid formate")
//     }
//     else{
//         alert("Success")
//     }

//     console.log(name)

// }

// document.getElementById("formclick").addEventListener("submit", (event)=>{

//     event.preventDefault()

//     let username = document.getElementById("username").value.trim()

//     formValidate(username)

// })


// Fetch ::

// fetch("https://fakestoreapi.com/products")
// .then((products)=>{

//     console.log(products)

//     if(!products.ok){
//         throw new Error("Product not found");  
//     }
//     else{
//         return products.json()  //javascript object notation
//     }

// })
// .then((value)=>{
//     value.map((value, index)=> {
//         console.log(value.title)
//     })
// })
// .catch((error)=>{
//     console.log("error: ", error.message)
// })


//  async function demo(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")

//         console.log(response)

//         const data = await response.json()

//         console.log(data)

//         data.map((value, index)=>{
//             console.log(value.name)
//         })
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// demo()


// Promise ::

// What is Promise?
// It is JS object used to handle the asynchronous operation

// Three States :
// 1. Pending       - Waiting for the result
// 2. Fulfilled     - Success
// 3. Rejected      - Failed

// Syntax:

// function functionName(){
//     return new Promise((resolve, reject) => {
        
//     })
// }

// Eg:

// let a = false;

// function order(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{

//             if(a){
//                 resolve("Your order is ready")
//             }
//             else{
//                 reject("Cancelled")
//             }
//         }, 5000)
//     })
// }
// function demo(){
//     order().then((message)=>{
//         console.log(message)
//     })
//     .catch((err)=>{
//         console.log("Error:", err)
//     })
// }

// demo()