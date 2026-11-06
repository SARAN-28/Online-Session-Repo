// String Methods ::

// let a = "   Hello   "
// let b = " World"
// let c = "Hello Good Morning"

// console.log(a.charAt(1))
// Return character at specified index

// console.log(a.concat(b))
// Combine two string

// console.log(a.includes("z"))
// Check whether the value exists

// console.log(a.indexOf("l"))
// Returnt the index position

// console.log(a.toLowerCase())
// Convert to lowercase

// console.log(a.toUpperCase())
// convert to uppercase

// console.log(a.trim())
// Remove starting and ending spaces

// console.log(c.split(","))
// Split string into an array

// console.log(c.slice(2, 10))
// Extract part of a string

// console.log(c.replace("Morning", "Evening"))
// Replace specified text


// Array Methods ::

// let a = [10,20,30,40,50]
// let b = ["Hello", "Welcome"]
// let c = [3, 6 , 1 , 2, 9, 8]

// console.log(a.push(25))
// console.log(a)
// Adds element at the end of array

// console.log(a.pop())
// console.log(a)
// Removes the last element of array

// console.log(a.shift())
// console.log(a)
// Remove the first element of array

// console.log(a.unshift(70))
// console.log(a)
// Add elements at the first

// console.log(a.concat(b))
// Combines two array

// console.log(a.slice(1,2))
// console.log(a)
// Extract part of array

// console.log(a.splice(2, 5))
// console.log(a)
// Remove array element

// console.log(a.indexOf(20))
// Return index position

// console.log(a.includes(80))
// Check whether element exist

// console.log(a.join("*"))
// console.log(a.join("-"))
// Convert array into a string

// console.log(a.reverse())
// Reverse array elements

// console.log(c.sort())
// Sorts array elements


// Object Properties ::

// let person = {name: "Saran", address: "namakkal", age: 24}
// console.log(person)
// console.log(person.name)

// Object Methods :

// let person = {
//     name: "Saran",
//     greet: function(){
//         return "Hello " + this.name
//     }
// }

// console.log(person.greet())

// Object Iteration :
// 1. for...in:

// let person = {name: "Saran", address: "Namakkal"}

// for(let key in person){
//     console.log(key,person[key])
// }

// 2. Object.keys()
// let person = {name: "Saran", address: "Namakkal"}
// console.log(Object.keys(person))

// 3. Object.values()
// console.log(Object.values(person))