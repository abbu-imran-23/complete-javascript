/* Best practice to use string variables in sentence */
const name = "Imran Pasha";
const repoCount = 20;
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

const user = " Imran "; 
const username = new String("Imran"); // String guaranteed

const url = "https://google.com/user/imran"

/* String Methods */
console.log(username.toUpperCase()); // IMRAN
console.log(username.toLowerCase()); // imran
console.log(username.charAt(2)); // r
console.log(username.indexOf('r')); // 2
console.log(username.length); // 5

console.log(username.substring(0,2)); // Im
console.log(user.trim()) // Imran 
console.log(url.split('/')); // [ 'https:', '', 'google.com', 'user', 'imran' ]

const lastValueInSearchParam = url.split('/').at(-1);
console.log(lastValueInSearchParam); // imran

console.log(url.includes("imran")); // true
console.log(url.endsWith("imran")); // true
