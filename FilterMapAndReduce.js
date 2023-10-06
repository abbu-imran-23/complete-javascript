const numbers = [1,2,3,4,5,6,7,8,9,10];

/* FILTER */
const filteredNumbers1 = numbers.filter((num) => (num%2) == 0);

// If curly braces are used then return should be mandatory
const filteredNumbers2 = numbers.filter((num) => {
    return num%2 == 0;
})

console.log(filteredNumbers1); // [ 2, 4, 6, 8, 10 ]

/* MAP */
const mappedNumbers = numbers.map((num) => {
    return num * 10; 
})

console.log(mappedNumbers) // [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

/* REDUCE */
const cart = [
    {
        product: "Shirt",
        price: 1999
    },
    {
        product: "Hoodie",
        price: 2999
    },
    {
        product: "Jacket",
        price: 1999
    }
]

let totalPrice = 0;
const totalCartPrice = cart.reduce(
    (accumulator, item) => accumulator + item.price,
    totalPrice
)

console.log(totalCartPrice); // 6997