/* Date */
const myDate = new Date();
console.log(myDate); // 2023-10-05T16:20:06.360Z
console.log(myDate.toString()); // Thu Oct 05 2023 21:51:05 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Thu Oct 05 2023
console.log(myDate.toISOString()); // 2023-10-05T16:23:00.835Z
console.log(myDate.toLocaleString()); // 5/10/2023, 9:53:00 pm

console.log(myDate.getDay());
console.log(myDate.getMonth());

const createdDate = new Date(2023, 0, 23);
console.log(createdDate.toDateString()); // Mon Jan 23 2023

const timeStamp = Date.now();
console.log(timeStamp); // 1696523296246 - in ms
console.log(Math.floor(timeStamp / 1000)); // 1696523296246 - in s