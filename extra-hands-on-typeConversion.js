// // 1. first example for typeConversion:

// // const isActive = true;
// // const result = String(isActive); // Explicit conversion of boolean to string

// // console.log(result); // Output: "true"
// // console.log(typeof result); // Output: string

// //

// //

// //2. second example for typeConversion:

// const num = 100;

// // const result = String(num); // Explicit conversion of number to string
// console.log(result); // Output: "100"
// console.log(typeof result); // Output: string

// //

// //

// //3. third example for typeConversion

// // Declared variables for implicit conversion
// const num1 = 10; // number
// const num2 = "20"; // string

// // Implicit conversion happens here when adding a number and a string
// // const result = num1 + num2;

// console.log(result); // Output: "1020" (The number 10 is converted to a string and then concatenated with "20")
// console.log(typeof result); // Output: "string" (The result is a string)

//

//

//4. fourth example for typeConversion

// //// Declared variables for explicit conversion
// const str = "100"; // string
// const number = 50; // number

// const result = str + number; // Implicit conversion happens: number is converted to a string, then concatenated

// console.log(result); // Output: "10050" (string, because the number is converted to a string and concatenated)
// console.log(typeof result); // Output: "string" (the result is a string after the concatenation)

//

//

//5. fifth example for typeConversion

// Declared variables for explicit conversion
const strValue = "123.45"; // string (representing a decimal number)
const boolValue = true; // boolean

const result = strValue + boolValue;

console.log(result);
console.log(typeof result);
