// Conditional Statement (Decision Making Statement) ::
// 1. if Statement             - Execute code when a conditions is true
// 2. if-else Statement        - Chooses between two blocks
// 3. if-else if-else Ladder   - Check the multiple condition in sequence
// 4. Nested if Statement      - if statement inside another if statement
// 5. Switch Statement         - Select a block based on matching values

// 1. if Statement ::

// let age = 11;

// if(age >= 18){
//     console.log("Eligible to vote")
// }


// 2. if-else Statement ::

// let number = 6;

// if(number % 2 === 0){
//     console.log("Even Number")
// }
// else{
//     console.log("Odd Number")
// }


// 3. if-else if-else ladder ::

// let mark = 45;

// if(mark >=90){
//     console.log("Grade A")
// }
// else if(mark >=70){
//     console.log("Grade B")
// }
// else if (mark >=50){
//     console.log("Grade C")
// }
// else{
//     console.log("Fail")
// }


// 4. Nested if Statement ::

// let age = 12;
// let id = true

// if (age >= 18) {
//     if (id === true) {
//         console.log("You can enter")
//     }
//     else {
//         console.log("Bring your ID")
//     }
// }
// else {
//     console.log("Not eligible to vote")
// }


// 5. Switch Statement ::

// let day = 5

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:
//         console.log("Invalid Day")
// }


// Loop ::
// 1. for-loop
// 2. while-loop
// 3. do-while loop

// 1. for-loop ::

// Syntax:
// for(initialization; condition; increment/decrement){
//     // code to run
// }

// for(let i = 1; i <= 5; i++){
//     console.log(i)
// }

// let number = [10,20,30,40,50]
// let sum = 0

// for (let i = 0; i < number.length; i++ ){
//     sum += number[i]
// }

// console.log(sum)


// While-loop ::

// Syntax:
// while(condition){
//     //code to run
// }

// let count = 1;

// while (count <=5 ){
//     console.log("Count is: ", count);
//     count++
// }


// do-while ::

// Syntax:
// do{
//     // code to run
// } while(condition)

// let num = 1;

// do{
//     console.log(num)
//     num++
// }while( num <=5)