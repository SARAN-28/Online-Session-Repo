// Encapsulation ::
// It involves controlling access to the data inside a class.

// - public        ->  default     - access to anywhere
// - private       ->  using #     - access only inside the class
// - protector     ->  using _     - js does not support the protector

// public :

// class test{
//     name = "Saran"

//     son(){
//         console.log(this.name)
//     }
// }
// class child extends test{

//     son2(){
//         console.log(this.name)
//     }
// }
// let obj = new child()
// obj.son()
// obj.son2()

// private :

// class test{
//     #name = "Saran"

//     son(){
//         console.log(this.#name)
//     }
// }
// class child extends test{

//     son2(){
//         console.log(this.name)
//     }
// }
// let obj = new child()
// obj.son()
// obj.son2()

// protector

// class test{

//     _name = "Saran"

//     son(){
//         console.log(this._name)
//     }
// }
// class child extends test{

//     son2(){
//         console.log(this._name)
//     }
// }
// let obj = new child()
// obj.son()
// obj.son2()


// Abstraction - Data Hiding ::
// Hiding the internal implementation and showing only the functionality to the user

// class car{
//     start(){
//         this.#startEngine();
//         console.log("Car Started")
//     }
//     #startEngine(){
//         console.log("Engine is Strting...")
//     }
// }
// let obj = new car()
// obj. start()

// Polymrphism ::
// Polymorphism means - " one name, many forms"

// - MethodOverRiding      - Same method name, but different implementation in parent and child classes
// - MethodOverLoading     - Same method name, but different parameters list

// MethodOverRiding :

// class base1{
//     disply(){
//         console.log("meow meow")
//     }
// }
// class base2 extends base1{
//     disply(){
//         console.log("bark bark")
//     }
// }
// class base3 extends base2{
//     disply(){
//         console.log("roar roar")
//     }
// }
// class base4 extends base3{
//     disply(){
//         console.log("maa maa")
//     }
// }

// let obj1 = new base1()
// let obj2 = new base2()
// let obj3 = new base3()
// let obj4 = new base4()

// obj1.disply()
// obj2.disply()
// obj3.disply()
// obj4.disply()

// MethodOverLoading ::

// class base{
//     display(a){
//         return a
//     }
//     display(a,b){
//         return a+b
//     }
//     display(a,b,c){
//         return a+b+c
//     }
// }

// let obj = new base()
// console.log(obj.display(10))
// console.log(obj.display(10,20))
// console.log(obj.display(10,20,30))

class base{
    add(a,b,c,d){
        if(arguments.length === 1){
            return a
        }
        else if (arguments.length === 2){
            return a+b
        }
        else if (arguments.length === 3){
            return a+b+c
        }
        else{
            return a+b+c+d
        }
    }
}
let obj = new base()
console.log(obj.add(10));
console.log(obj.add(10,20));
console.log(obj.add(10,20,30));
console.log(obj.add(10,20,30,40));