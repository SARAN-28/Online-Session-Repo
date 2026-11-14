// let input = document.getElementById("name")
// input.addEventListener("focus", () => (input.style.backgroundColor = "lightgreen"))
// input.addEventListener("blur", ()=> (input.style.backgroundColor = ""))

// document.getElementById("course").addEventListener("change", (event)=>{
//     document.body.style.backgroundColor = event.target.value
// })

// let dragItem = document.getElementById("dragitem");
// dragItem.addEventListener("dragstart", ()=> console.log("Draging Started..."))
// dragItem.addEventListener("dragend", ()=> console.log("Draging Ended..."))

// window.addEventListener("load", ()=>{
//     console.log("Page Loaded")
// })

// window.addEventListener("resize", ()=>{
//     console.log("Resizing...")
// })

// window.addEventListener("scroll", ()=>{
//     console.log("Scrolling...")
// })


// OOPS ::

// 1. Whats is OOPS ::
// OOP - Object-Oriented Programming
// Its is a way of writing programs by organizing code around object

// Eg:

// class Student {

//     // Properties - name, age, address
//     name = "Saran";
//     age = 24;
//     address = "Namakkal"

//     // Behaviour - stud(), attendClass()
//     study(){
//         console.log("Student is Studying")
//     }
//     attendClass(){
//         console.log("Student is attending class")
//     }

// }

// 2. Object ::
// Object is an actual instance created from a class

// class Student{

//     name = "Saran";

//     study(){
//         console.log("Studying")
//     }

// }

// let Student1 = new Student()

// console.log(Student1.name)
// Student1.study()

// 3. Class ::
// Class is Blueprint/template for creating Object.

// Syntax:
// class Student{

// }

// let Student1 = new Student()
// let Student2 = new Student()

// 4. Properties ::
// Property stores data/information about an object

// Eg:
// class Student {

//     name = "Saran";
//     age = 24;
//     address = "Nmakkal"

// }

// let Student1 = new Student()
// console.log(Student1.name)
// console.log(Student1.age)
// console.log(Student1.address)

// 5. Method ::
// Method is a function inside a class/object that represent Behaviour or action

// Eg:

// class Student{

//     name = "Saran"

//     study(){
//         console.log("Studying...")
//     }

// }

// let Student1 = new Student()
// Student1.study()


// Property    - What the object has
// Method      - What the object does

// 6. Constructor ::
// Its a special method that automatically runs when an object in created.

// Syntax:

// class Student{

//     constructor(){
//         console.log("Student Object Created")
//     }

// }

// let Student1 = new Student()

// Eg:

// class Student {

//     constructor(name, address){
//         this.name = name
//         this.address = address
//     }

// }

// let Student1 = new Student("Saran", "Namakkal")

// console.log(Student1.name)
// console.log(Student1.address)

// 7. new ::
// new is used to create an object from a class

// Syntax:
// class Student{

// }

// let Student1 = new Student()

// Without new:
// let Student1 = Student()

// you cannot normally call a class like a regular function

// 8. this ::
// this refers to the current object in a class method/constructor

// Eg:

// class Student{

//     constructor(name, address){
//         this.name = name
//         this.address = address
//     }
// }

// let Student1 = new Student("Saran", "Namakkal")


// Eg:

// class Student{

//     constructor(name, age, address){
//         this.name = name
//         this.age = age
//         this.address = address
//     }

//     study(){
//         console.log(this.name + " is Studying...")
//     }

// }

// let Student1 = new Student("Saran", 24, "Namakkal")
// console.log(Student1.name)
// console.log(Student1.age)
// console.log(Student1.address)
// Student1.study()


// 4 Pillars ::
// 1. Inheritance.
// 2. Abstraction.
// 3. Encapsulation.
// 4. Polymorphism.

// 1. Inheritance ::
// one class can use properties and method from another class

// Single Inheritance
// Multilevel Inheritance
// Hirerchical Inheritance
// Multiple Inheritance

// Single Inheritance :
// One child class inherit from one parent class

// Eg:
// class parent{
//     father(){
//         console.log("Working...")
//     }
// }
// class child extends parent{
//     son(){
//         console.log("Playing...")
//     }
// }

// let obj = new child()
// obj.son()
// obj.father()

// MultiLevel Inheritance :
// One child class inherit from more than one parent class.

// Eg:

// class grandfather{
//     gfather(){
//         console.log("Resting...")
//     }
// }
// class father extends grandfather{
//     fath(){
//         console.log("Working...")
//     }
// }
// class child extends father{
//     son(){
//         console.log("Playing...")
//     }
// }
// let obj = new child()
// obj.son()
// obj.fath()
// obj.gfather()

// Hirerchical Inheritance  :
// Multiple child classes inherit from the same parent class.

// Eg:

// class father{
//     work(){
//         console.log("Age: 40")
//     }
// }
// class child1 extends father{
//     study(){
//         console.log("Age: 25")
//     }
// }
// class child2 extends father{
//     play(){
//         console.log("Age: 05")
//     }
// }
// let obj1 = new child1()
// obj1.study()
// obj1.work()
// let obj2 = new child2()
// obj2.play()
// obj2.work()

// Multiple Inheritance :
// Combining features from multiple parent sources in one child

class base{
    greets(){
        console.log("Hello")
    }
}
const father = (base) => class extends base{
    work1(){
        console.log("Working in TCS");
    }
}
const mother = (base) => class extends base{
    work2(){
        console.log("Working in Zoho")
    }
}
class child extends father(mother(base)){
    play(){
        console.log("Playing...")
    }
}
let obj = new child();
obj.play()
obj.work1()
obj.work2()
obj.greets()