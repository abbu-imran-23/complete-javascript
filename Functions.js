/* Functions */
function addNumbers(num1, num2) {
    return num1 + num2;
}

const result = addNumbers(2,3);
console.log(result); // 5

function add3Numbers(num1, num2, num3 = 0) {
    return num1 + num2 + num3;
}

const answer = add3Numbers(2,3);
console.log(answer); // 10

function loginMessage(username) {
    if(!username) {
        return "Please enter the username";
    }
    return `${username} just logged in`;
}

console.log(loginMessage("Imran")); // Imran just logged in
console.log(loginMessage()); // Please enter the username

// REST Operator
function calculateCartPrice(...prices) {
    let totalPrice = 0;
    prices.forEach((price) => totalPrice += price);
    return totalPrice;
}

console.log(calculateCartPrice(200,1999,449,249,2999));

// Object in Function
const user = {
    name: "Imran",
    product: "Shirt",
    price: 1999
}

function objectInFunction(user) {
    const { name, product, price } = user;
    return `${name} bought a ${product} worth ${price.toLocaleString('en-IN')}`
}

console.log(objectInFunction(user));

/* Arrow Functions */
const greet = () => {
    console.log("Hello Imran!");
}

console.log(greet()); // Hello Imran!