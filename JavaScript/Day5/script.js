// Function ::

// Syntax:

// function functionName(){
//     // code to run
// }
// functionName()

// let a = "Hello"
// function demo(){
//     console.log(a)
// }
// demo()

// function add(c,d){
//     return c+d
// }

// function work1(){
//     let a = 50;
//     let b = 50;

//     console.log(add(a,b))
// }

// work1()

// function work2(){
//     let a = 100;
//     let b = 100;

//     console.log(add(a,b))
// }

// work2()


// function greet(name){
//     return "Welcome " + name
// }
// console.log(greet("Saran"))

// function greeting(name = "Saran"){
//     return "Hello " + name
// }
// console.log(greeting())


// Arrow Functions ::
// const greet =()=>{
//     console.log("Saran")
// }
// greet()

// or

// const greet = ()=>console.log("Saran")
// greet()

// const greet = (name = "Saran")=>{
//     console.log("Welcome " + name)
// }
// greet()


// Closure Function ::
// Inner function can access the outer function variable.

// function counter() {
//     let count = 0

//     return function () {
//         count++
//         return count
//     }
// }

// const increment = counter()
// console.log(increment())
// console.log(increment())
// console.log(increment())
// console.log(increment())
// console.log(increment())


// Callback Function ::
// Passed a argument to another function and execute inside that function
//  - One function is created
//  - We pass another function as an argument 

// function hello(callback){
//     console.log("Hello")

//    callback()
// }
// function welcome(){
//     console.log("Welcome to JavaScript")
// }

// hello(welcome)


// Rest Parameter ::
// Pass multiple arguments to a function and collect into a single array

// Syntax:
// function functionName(...Parameter){

// }

// Eg:
// function hello(...e){
//     console.log(e)
// }
// hello(10,20,30,40,50)


// Reduce() Method ::
// It is array method that reduce all array Element into single value

// Suntax:
// array.reduce((accumulator, currentvalue) => {
//     return accumulator + currentvalue
// }, initialValue)

// accumulator   - Store the result
// currentvalue  - Current array Element
// initialValue  - starting value

// Eg:
// let a = [1,2,3,4,5];

// let result = a.reduce((total, num)=> {
//     return total + num
// },10)

// console.log(result)


// Til Symbol use ::
// let a = "Saran"
// console.log(`Welcome you ${a}`)


// Itteration in Array ::
// 1. forEach();
// 2. map();
// 3. filter();

// 1. forEach():
// let arr = [1,2,3,4,5]
// arr.forEach((value,index) => console.log(index," ",value ))

// 2. map():
// let arr = [1,2,3,4,5].map((value) => (value * 2))
// console.log(arr)

// 3. filter();
// let arr = [1,2,3,4,5].filter((value) => (value %2 === 0))
// console.log(arr)


// Timers ::
// 1. setTimeout()
// 2. setInterval()

// 1. setTimeout():
// It runs a function once after a specified time.

// Syntax:
// setTimeout(function(){
//     //code
// }, millieseconds)

// Eg:
// setTimeout(function(){
//     console.log("Hello Saran");
// }, 3000)

// Cancelling Timeout();
// let timer = setTimeout(function(){
//     console.log("Hello Saran")
// }, 1000)

// clearTimeout(timer)

// 2. setInterval():
// Run a function again and again at a specified time

// Syntax:
// setInterval(function(){
//     //code 
// }, milliesecond)

// Eg:
// setInterval(function(){
//     console.log("Hello World!")
// }, 3000)

// Cancelling setInterval():
// let timer = setInterval(function(){
//     console.log("Hello World!")
// },3000)

// clearInterval(timer)

// Eg:
// let count = 1;

// let interval = setInterval(function(){
//     console.log(count);
//     count++

//     if(count == 5){
//         clearInterval(interval)
//     }
// },2000)


// Error Handling ::
// Used to prevent the program from crashing when the error occurs:

// JavaScripts provides:
// 1. try
// 2. catch
// 3. finally
// 4. throw

// 1,2,4. try...catch with throw:
// Syntax:
// try{
//     // code that may error occurs
// }
// catch(error){

// }

// Eg:
// try {

//     throw new Error("Error Message");

// }
// catch (err){
//     console.log("Error Occured: ", err.message)
// }


// 3. finally:
// try{

//     console.log("Trying Something...")

//     throw new Error("Something went wrong")

// }
// catch(err){
//     console.log(err.message)
// }
// finally{
//     console.log("Program Executed")
// }