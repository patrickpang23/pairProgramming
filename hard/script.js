// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value
// Example 1:
// Input: str = “{hello world}” brackets(srt)
// Output: True

// Example 2:
// Input: str = “{hello world]” brackets(srt)
// Output: False

// const matching = (input) => {
//     input = input;
// const unMatch = new Boolean (true);
// }

// const determine = ()
// console.log()

const matching = (input) => {
    return input.includes("{") && input.includes("}") || input.includes("(") && input.includes(")") || input.includes("[") && input.includes("]")
}

console.log(matching("{Hello]"));