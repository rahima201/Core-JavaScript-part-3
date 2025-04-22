// // 1. Find the unique elements in an array, remove any duplicates, and classify the unique elements
// // into two arrays:one containing even numbers and the other containing odd numbers.

// function classifyEvenOdd(arr) {
//   // Step 1: Find unique elements by converting the array to a Set and then back to an array
//   let uniqueArr = [...new Set(arr)];

//   // Step 2: Create empty arrays to store even and odd numbers
//   let evenArr = [];
//   let oddArr = [];

//   // Step 3: Loop through each unique number and classify it as even or odd
//   uniqueArr.forEach((num) => {
//     if (num % 2 === 0) {
//       evenArr.push(num);
//     } else {
//       oddArr.push(num);
//     }
//   });

//   // Step 4: Return an object containing the unique elements, even numbers, and odd numbers
//   return {
//     uniqueElements: uniqueArr,
//     evenNumbers: evenArr,
//     oddNumbers: oddArr,
//   };
// }

// // Step 5: Define an array with some duplicate numbers
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];

// // Step 6: Call the function and store the result
// let result = classifyEvenOdd(numbers);

// // Step 7: Print the results in the console
// console.log("Unique elements:", result.uniqueElements);
// console.log("Even Numbers:", result.evenNumbers);
// console.log("Odd Numbers:", result.oddNumbers);

// // What this code does:
// // Removes duplicate numbers from the input array.
// // Classifies numbers into even and odd.
// // Returns the results as an object.
// // Prints the results in the console.

// // 2.  Create a program to calculate the total number of hours from a given number of days using the number data type.
// function calculateHours(days) {
//   let hours = days * 24;
//   return hours;
// }

// let days = 5;
// let totalHours = calculateHours(days);
// console.log("Total hours in ${days}:", totalHours);

// 3. Find the largest number from this array [5, 2, 9, 1, 5, 6].
// function findLargestNumber(arr) {
//   let largest = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }

//   return largest;
// }

// let numbers = [5, 2, 9, 1, 5, 6];
// let largestNumber = findLargestNumber(numbers);
// console.log(largestNumber);

// // 4. Find the summation from this array elements [1, 2, 3, 4, 5].
// function calculateSum(arr) {
//   let sum = 0;

//   for (let num of arr) {
//     sum += num;
//   }

//   return sum;
// }

// let numbers = [1, 2, 3, 4, 5];
// let totalSum = calculateSum(numbers);
// console.log(totalSum);

// 5. Reverse the string 'Hello, World! '
function reverseString(str) {
  let reversed = str.split("").reverse().join("");
  return reversed;
}

let text = "Hello, World";
let reversedText = reverseString(text);
console.log(reversedText);
