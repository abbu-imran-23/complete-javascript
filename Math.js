const score = 100;
console.log(score) // 100

const balance = new Number(200);
console.log(balance); // [Number: 200] - Number Guaranteed

const amount = 100000;

/* Math Methods */
console.log(typeof(score.toString())); // Converts to String
console.log(balance.toFixed(2)); // 200.00
console.log(amount.toLocaleString()); // 1,00,000 - US 
console.log(amount.toLocaleString('en-IN')); // 1,00,000 -IN

console.log(Math.abs(-5)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.6)); // 5

console.log(Math.ceil(7.2)); // 8
console.log(Math.floor(7.8)); // 7
console.log(Math.sqrt(16)); // 4

console.log(Math.min(20,10,40)); // 10
console.log(Math.max(20,10,40)); // 40

/* Generate Random Number Between 1 - 10 */
console.log(Math.floor(Math.random() * 10 + 1));

/* Generate Random Number Between Range*/
const minRange = 20;
const maxRange = 40;
const randomValue = Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
console.log(randomValue); 
