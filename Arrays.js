/* Arrays */
const numbers = [1,2,3,4,5];
const nums = new Array(1,2,3,4);
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(nums); // [1,2,3,4]

const mixedTypes = [23,"Imran",true,[1,2,3]];
console.log(mixedTypes); // [ 23, 'Imran', true, [ 1, 2, 3 ] ]
console.log(mixedTypes[3]); // [ 1, 2, 3 ]

const anotherNumbers = numbers;
anotherNumbers[0] = "Shallow Copy";
console.log(numbers); // [ 'Changed', 2, 3, 4, 5 ]

/* Arrays Methods*/
const values = [1,2,3,4,5];

values.push(6);
console.log(values); // [ 1, 2, 3, 4, 5, 6 ]

values.pop();
console.log(values); // [ 1, 2, 3, 4, 5 ]   

values.shift();
console.log(values); // [ 2, 3, 4, 5 ]

values.unshift(0);
console.log(values); // [ 0, 2, 3, 4, 5 ] 

console.log(values.includes(3)); // true

/* Slice and Splice */
const newArr = [1,2,3,4,5];
console.log(newArr);

console.log(newArr.slice(1,4));
console.log(newArr);

console.log(newArr.splice(1,4));
console.log(newArr);

/*
  1. Slice does not include range, where as splice includes range.
  2. Slice does not manipulate original array, where as splice does and returns the remaining part of the array.
*/

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const concatArr = arr1.concat(arr2);
const spreadArr = [...arr1, ...arr2];
console.log(concatArr); // [ 1, 2, 3, 4, 5, 6 ]
console.log(spreadArr); // [ 1, 2, 3, 4, 5, 6 ]

const arr3 = [1,2,3,[4,5,6],7,8,[9,10,[11,12]]];
console.log(arr3.flat(Infinity)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]