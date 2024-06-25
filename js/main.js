//*! Data types:
//* string:
//* Letters and data inside of quotes. (shown as white in the console) ex "Hello World", "1", "one"

//* integer:
//* whole numbers. (shown as blue in the console). ex: 1,2,3,4,5,6,

//* float:
//* numbers with decimals. (also shown as blue in the console) ex 1.5, 75.2

//* bigInt: BIG numbers. (more than 15 digits)

//* boolean: true or false.

//* array: data structure type. ex ["kiwi", "apple", "pear"]

//* object: data stucture type. ex {firstName: "name", lastName: "nameName", age: "543"}


console.log("Hello World");
// first you need to initialize a variable to use it further;
let a=3
console.log(a);
// a let variable can be changed later;
a=4
console.log(a);

// a const variable can not be changed;
const b = 5
console.log(b);

let sum = a + b
console.log(sum)

let updatedSum = (a+1000) + b
console.log(updatedSum)
console.log()

let num1 = 10;
let num2 = 5;
console.log(num1 % num2)


//camel-casing: first letter small 
let greetingType = "hello";
let userName = "Bob";

// "double quotes" 'single quotes' `backtics`

// standard concatination;
let greeting = greetingType + " " + userName;
// how to write a string literal;
let altGreeting = `${greetingType} ${userName}`

console.log(greeting)
console.log(altGreeting)

console.log(1+2+3+4)
console.log(1.543453445)

let bobIsTheName = true

if (bobIsTheName) {
    console.log('user has a name')
} else { 
    console.log ('user does not have a name')
} 

let fruitsArray = ["kiwi", "apple", "pear"]

console.log(fruitsArray)
console.log(fruitsArray.length)
console.log(fruitsArray[0])
console.log(fruitsArray[1])
console.log(fruitsArray[2])

const person = {
    firstName: "Name",
    lastName: "nameName",
    age: 954,
    hobbies: ["Gaming", "Breathing", "Not dying"]
}

console.log(person)
console.log(person.firstName)
console.log(person.hobbies[2])

const randomRandom = Math.random()

// console.log(randomNumber)

const diceThrow = Math.floor(Math.random() * 6)

console.log(diceThrow)

const diceResults = ["One", "Two", "Three", "Four", "Five", "Six"]
const stringResult = diceResults[diceThrow]

console.log(stringResult)

const randomNumber = Math.round(Math.random() * 1000)

console.log(randomNumber)