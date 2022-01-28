// Create a function that checks an array for prime numbers then inserts any primes into a new array.                               
// Example 1:                                                                                                                                       Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:												Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
// Output: primeArray = [19 ,29 ,47 , 83]


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = [];

// return either true or false
function checkPrime(num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) return false;

  return num > 1;
}

array.forEach(function (element) {
  const prime = checkPrime(element);
  if (prime) {
    primeNumbers.push(element);
  }
});

console.info(primeNumbers);