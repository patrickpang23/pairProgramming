// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean. 
// Example:
// Input: String 1: So dark the con of man
//  String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
// 	  String 2: Dogs eat ants
// Output: False

let isAnagram = function (string1, string2) {
        let sorted1 = string1.split( '' ).sort().join( '' ).toLowerCase();
        let sorted2 = string2.split( '' ).sort().join( '' ).toLowerCase();
        return (sorted1 === sorted2);
};


console.log(isAnagram('abc', 'cba'));
console.log(isAnagram('dcl', 'acl'));