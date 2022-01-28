// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]

// Output: Even numbers: [2, 4, 16]
// 	  Odd Numbers: [7, 11, 15]


const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const odds = [];

numb.forEach(number => {
    if (number % 2 !== 0) {
        odds.push(number);
    }
});

console.log(`Odd numbers ${odds}`);

const evens = []

numb.forEach(number => {
    if (number % 2 == 0) {
        evens.push(number);
    }
});

console.log(`Even Numbers: ${evens}`);


