// Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder. 

// Example 1:
// Input: gdc_two_numbers(336,360)
// Output: 24

// Example 2:
// Input: gdc_two_numbers(78,126)
// Output: 6

const gdc_two_numbers = (num1, num2) => {
    const smallerNum = Math.min(num1, num2);

    let largest = 0;

    for (let i = 1; i <= smallerNum; i++) {
        if (num1 % i === 0 && num2 % i === 0) largest = i;
    }

    console.log(largest);
    return largest;
}

gdc_two_numbers(336, 360);
gdc_two_numbers(78, 126);