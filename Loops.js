let numbers = [1,2,3,4,5];

/* For Loop */
for(let i=0;i<numbers.length;i++)
{
    console.log(numbers[i]);
}

/* ForEach Loop */
numbers.forEach((number) => {
    console.log(number);
})

/* While Loop */
let i = 0;
while(i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

/* Do While Loop */
let value = 1;
do {
    console.log(value);
    value++;
} while(value <= numbers.length);