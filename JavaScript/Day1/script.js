// Introduction to JavaScript ::

// What is JavaScript ::
// JavaScript is a High-level Programming/Scripting Language
// Used for creating interactive and dynamic web pages
// To implement features like: Animation, Validation, Event handling
// It runs on both the client side and the server side
// --------------------------------------------

// Types of Programming Language ::
// 1. Machine language : 0s and 1s, the only thing the CPU understands
// 2. Low-level        : hard to write
// 3. High-level       : (JavaScript, Python, Java), easy to read and write

// High-level  = closer to human language
// Low-level   = closer to computer language
// --------------------------------------------

// Why is JavaScript High-Level? ::
// 1. Human-readable words (let, if, function, console.log)
// 2. A JS engine converts the code to machine code for us
// --------------------------------------------

// How JS Run ::
// Your JS code -> JS Engine (Chrome uses V8) -> Machine code -> CPU -> Output
// Every browser has a JS engine built in
// --------------------------------------------

// Client Side vs Server Side ::
// Client Side : runs in the user's browser
// Server side : runs on a server using Node.js
// --------------------------------------------

// What JavaScript Can Do in a Web Page ::
// HTML = structure (skeleton)
// CSS  = style (design)
// JS   = behavior (action)
// --------------------------------------------


// Variables ::
// What is Variables ::
// A variable is a named container that stores a value in memory.

// Syntax: keyword variableName = value;
// Example:
// let name = "Saran"
// let age = 50
// console.log(name)
// console.log(age)

// Variable Naming Rules ::
// 1. Must start with a letter
// 2. Names are case-sensitive
// 3. Cannot use reserved words
// 4. We can use camelCase -> userName
// --------------------------------------------

// Print Statement ::
// console.log("Hello World!");

// Alert Message ::
// alert("Day 1 of JavaScript")
// --------------------------------------------

// Keywords ::
//  1.var
//  2.let
//  3.const

// 1. var ::
// Varaiable name can be reused or redeclared and reassignment allowed and Function Scoped

// var a = 10
// var a = 20
// console.log(a)

// 2. let ::
// Variable name can't be reused or redeclared but reassignment allowed and Block Scoped

// let a = 10
// let b = 10
// console.log(a+b)

// 3. const ::
// Variable name can't be reused or redeclared not reassignment allowed and Block Scoped read only

// const a = 10
// const b = 10
// console.log(a+b)
// --------------------------------------------

// What is Scoped ::
// 1. var   - Function-Scoped
// 2. let   - Block-Scoped
// 3. const - Block-Scoped

// 1.var ::

// function demo(){
//     var a = 10;

//     if(true){
//         var a = 20;
//         console.log(a)
//     }
//     console.log(a)
// }
// demo()

// 2.let ::

// function demo(){
//     let a = 10

//     if(true){
//         let a = 20
//         console.log(a)
//     }
//     console.log(a)
// }
// demo()

// 3.const ::

// function demo(){
//     const a = 10;

//     if(true){
//         const a = 20;
//         console.log(a)
//     }
//     console.log(a)
// }
// demo()
// --------------------------------------------

// What is a Data Type? ::
// A data type tells JavaScript what kind of value a variable holds.
// 1. Primitive DataType
// 2. Non-Primitive DataType

// Primitive DataType:
// 1. String ("Hello")
// 2. Number (1,2.0)
// 3. Boolean (true,false)
// 4. Undefined (Variable declared but not assigned)
// 5. Null (No declared and assigned)

// 1.String :
// let a = "Saran"
// console.log(a)

// 2.Number :
// let age = 24.5
// console.log(age)

// Boolean :
// let isActive = false
// console.log(isActive)

// Undefined :
// let b
// console.log(b)

// null :
// let c = null
// console.log(c)

// Non-Primitive DataTypes ::
// 1. Object (key:value pairs)
// 2. Array (Ordered list of values)
// 3. Function (Reusable block of code)

// 1.Object :
// let data = {
//     name: "Saran",
//     age: 24,
//     address: "Namakkal"
// }
// console.log(data)

// 2.Array :
// let fruits = ["Apple", "Banana", "Mango"]
// console.log(fruits)
// console.log(fruits[1])

// 3.Function :
// function demo(){
    //code to write
// }
// demo()