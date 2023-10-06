/* Objects */

const userDetails = new Object(); // Singleton Object

const user = {
    name: 'John',
    age: 21,
    isMale: true,
    greet: function() {
        console.log(`Hello ${this.name}`); // String Interpolation
    }
}

console.log(user.name); // John
console.log(user["name"]); // John
console.log(user.greet); // [Function: greet]

const newUser = user;
newUser.name = "Imran";
console.log(user); // { name: 'Imran', age: 21, isMale: true }

Object.freeze(user); // Object is freezed cannot manipulate

const obj1 = {
    name: "Imran",
    age: "22"
}

const obj2 = {
    isMale: true,
    isMarried: false
}

const obj3 = { ...obj1, ...obj2};
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj3); // { name: 'Imran', age: '22', isMale: true, isMarried: false }
console.log(obj4); // { name: 'Imran', age: '22', isMale: true, isMarried: false }

console.log(Object.keys(obj3)); // [ 'name', 'age', 'isMale', 'isMarried' ]
console.log(Object.values(obj3)); // [ 'Imran', '22', true, false ]
console.log(Object.hasOwnProperty("name")); // true

/* Object Destructuring */
const course = {
    courseName: "Complete Javascript",
    duration: "50 hours",
    author: "Imran Pasha",
    price: 1999
}

const { courseName, author: instructor } = course; // destructuring
console.log(`${instructor} is the author of the course ${courseName}`);

// JSON
// {
//     "name": "Imran",
//     "age": "21"
// }