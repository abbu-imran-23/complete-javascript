console.log(2+3); // 5 [Addition]
console.log(2-3); // -1 [Subtraction]
console.log(2*3); // 6 [Multiply]
console.log(2/3); // 0.666 [Quotient]
console.log(2%3); // 2 [Remainder]
console.log(2**3); // 8 [Power]

console.log(2 > 3) // false
console.log(2 >= 3) // false
console.log(2 < 3) // true
console.log(2 <= 3) // true

console.log(2 == 2) // true
console.log("2" == 2) // true
console.log(2 === 2) // true
console.log("2" === 2) // false

/* Note 
   1. == Checks only values, do not check data type
   2. === checks both data type and values
*/

let firstName = "Imran";
let lastName = " Pasha";
let fullName = firstName + lastName;
console.log(fullName);

console.log("2" + "3"); // 23
console.log(2 + "3"); // 23
console.log("2" + 3); // 23
console.log(2 + 3); // 5

console.log("2" + + "3"); // 23
console.log(2 + + "3"); // 5
console.log("2" + + 3); // 23
console.log(2 + + 3); // 5

console.log("2" + 1 + + "3"); // 213
console.log(2 + "1" + + "3"); // 213
console.log("2" + 1 + + 3); // 213
console.log(2 + "1" + + 3); // 213

/* Note
  1. When you use the + operator with two strings or a string and a number, it performs string concatenation.
  2. When you use the + operator with two numbers, it performs arithmetic addition.
  3. + or - operand in front of a string converts it to number.
  3. + or - operand in front of a number remains number only.
*/