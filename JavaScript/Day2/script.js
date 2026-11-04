// Operators ::
// 1. Arithmatic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. Ternary Operators
// 7. Type Operators

// 1. Arithmatic Operators ::

// let a = 10;
// let b = 20;

// Addition:
// console.log(a+b)

// Subtraction:
// console.log(a-b)

// Multiplication:
// console.log(a*b)

// Division:
// console.log(a/b)

// Modulus:
// console.log(a%b)

// Increment:
// 1.Post Increment:
// console.log(a++)
// 2. Pre Increment:
// console.log(++a)

// Decrement:
// 1.Post Decrement:
// console.log(a--)
// 2.Pre Decrement:
// console.log(--a)


// 2. Assignment Operators ::

// let a = 10;
// let b = 20;

// Assign:
// let name = "Saran"
// console.log(name)
// console.log(b=a)

// Add and Assign:
// console.log(b+=a)

// Subtract and Assign:
// console.log(b-=a)

// Multiply and Assign:
// console.log(b*=a)

// Divide ans Assign:
// console.log(b/=a)

// Modulus and Assign:
// console.log(b%=a)


// Comparison Operator ::

// let a = 10;
// let b = 10;

// console.log(a==b)

// console.log(a===b)

// console.log(a!=b)

// console.log(a!==b)

// console.log(a>b)

// console.log(a<b)

// console.log(a>=b)

// console.log(a<=b)


// Logical Operators:

// let a = 10;
// let b = 5;
// let c = 15;

// AND:
// console.log(a>b && c>a)

// OR:
// console.log(a>b || c<a)

// NOT:
// console.log(!(a<b))


// Bitwise Operator ::
// Decima to Binary   ->   Machine Language - 0s and 1s

// Decimal   ->    Binary
//   5             0 and 1

// 5    5%2    2     1                      3     3%2    1     1
//      2%2    1     0                            1%2    0     1      =  1 1 
//      1%2    0     1     = 1 0 1

// Binary  ->    0 1 0 1                    Binary   ->   0 0 1 1

// Binary    ->     Decimal

        // 8 4 2 1 
        // 0 1 0 1
        // 0 4 0 1   +  5


// let a = 5;
// let b = 3;

// AND:
// Both bits must be 1:
     
    // 0 1 0 1      8 4 2 1 
    // 0 0 1 1      0 0 0 1    
    // 0 0 0 1      0 0 0 1     =  1

// console.log(a&b)

// OR:
// At least one bit must be 1:

    // 0 1 0 1       8 4 2 1
    // 0 0 1 1       0 1 1 1    
    // 0 1 1 1       0 4 2 1     =   7

// console.log(a|b)

// XOR:
// Bit must be different:
// console.log(a ^ b)

// NOT:
// Reverse all bits:
// console.log(~a)

// Left Shift:
// Shifts bits to left
// console.log(a<<b)

// Right Shift:
// Shift bits to right
// console.log(a>>b)


// Ternary Operators ::

// let age = 18;
// let vote = age>=18? "Allowed" : "Not Allowed"
// console.log(vote)


// Type Operator ::
// Used to identify the type of variables

// console.log(typeof "Hello")

// let a = 5;
// console.log(typeof a)

// console.log(typeof true)

// let b;
// console.log(typeof b)

// let c = null
// console.log(typeof c)