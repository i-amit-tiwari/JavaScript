//Primitive

//7 types : String, Number, Boolean , null, undefined, Symbol,BigInt

const score =100;

const scoreValue = 100.3

const isLoggedIn = false;

const outsideTemp = null;
let userEmail;

const id= Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId)

const bigNumber = 45788646546544546465465465465465n;//bigInt
console.log(typeof bigNumber)

//Reference (Non primitive)

const heros =["shaktiman","naagraj","doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(heros)

const myFunction =function(){
    console.log("hello worlds");
}
console.log(myFunction)