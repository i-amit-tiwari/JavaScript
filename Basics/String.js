const name = "Amit Tiwari";//declaration

const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

/*Another way to declare string, 
it gives various properties and method ,
 its a good practice to write string 
 in this format*/
const gameName = new String('Amit Tiwari')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

//refer mdn for more methods of string