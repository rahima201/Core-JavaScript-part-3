// 1. first example for setProblem

// Function to remove duplicate names from an array
function getUniqueNames(names) {
  // Create a Set from the array (Sets automatically remove duplicates)
  const uniqueSet = new Set(names);

  // Convert the Set back to an array using Array.from()
  const uniqueArray = Array.from(uniqueSet);

  // Return the array with only unique names
  return uniqueArray;
}

// Call the function with an array of names that has duplicates
const result = getUniqueNames(["Rahima", "Asha", "Asha", "Sabita"]);

// Output the result
console.log("Unique Names:", result); // Output: ['Rahima', 'Asha', 'Sabita']

//

//

//2. second example for setProblem

// Function to remove duplicates from an array with different types of values
function removeDuplicates(arr) {
  // Create a Set from the array (removes duplicate values automatically)
  const uniqueSet = new Set(arr);

  // Convert the Set back to an array using Array.from()
  return Array.from(uniqueSet);
}

// Array with numbers, strings, and duplicates
const mixedArr = [1, "1", 2, 2, "Rahima", "Rahima"];

// Call the function and output the result
console.log("Unique Mixed Values:", removeDuplicates(mixedArr));
// Output: [1, '1', 2, 'Rahima']

//

//

//3. third example for setProblem

// Function to remove duplicate boolean values from an array
function uniqueBooleans(values) {
  // Create a Set from the array (automatically removes duplicate booleans)
  const uniqueSet = new Set(values);

  // Convert the Set back to an array and return it
  return Array.from(uniqueSet);
}

// Array of boolean values with duplicates
const boolArr = [true, false, true, false, true];

// Call the function and output the result
console.log("Unique Booleans:", uniqueBooleans(boolArr));
// Output: [true, false]

//

//

//4. fourth example for setProblem

// Create a Set to store unique values from an array
const numberSet = new Set([1, 2, 3, 4, 5, 5, 3, 2]);

// Convert the Set back to an array to get unique values
const uniqueArray = [...numberSet];

// Output the unique array
console.log("Unique Values:", uniqueArray); // Output: [1, 2, 3, 4, 5]

//

//

//5. fifth example for setProblem
// Create a Set to store unique string values
// Create a Set to store unique string values
// const stringSet = new Set();
const stringSet = new Set(["Rahima", "Sabita", "Sagor", "Rahima", "Sagor"]);

//convert the set back to an array to get unique values
const uniqueString = [...stringSet];

//output the unique value
console.log("Unique Values:", uniqueString); //output: [ 'Rahima', 'Sabita', 'Sagor' ]

//

//

//6. sixth example for setProblem
// Declare the boolean variables
let isRaining = true;
let isMarried = false;
let isCrazy = true;
let isSunny = false;
let isCloudy = true;

// Create a Set to store unique boolean values
const booleanSet = new Set([isRaining, isMarried, isCrazy, isSunny, isCloudy]);

// Convert the Set back to an array to get unique values
const uniqueBoolean = [...booleanSet];

// Output the unique values
console.log("Unique Values:", uniqueBoolean); // Output: [true, false]

//

//

//7. seventh example for setproblem
// Declare a Set to store unique objects based on a specific property, like 'id'
// Declare an array of objects
const objectArray = [
  { name: "Rahima", age: 20, Id: 1, isStudent: true },
  { name: "Sabita", age: 22, Id: 2, isStudent: false },
  { name: "Rahima", age: 20, Id: 1, isStudent: true }, // Duplicate object
];

// Declare a Set to store unique objects based on the 'Id' property
const objectSet = new Set();

// Add objects to the Set by stringifying them to check for duplicates
objectArray.forEach((obj) => {
  objectSet.add(
    JSON.stringify({
      Id: obj.Id,
      name: obj.name,
      age: obj.age,
      isStudent: obj.isStudent,
    })
  );
});

// Convert the Set back to an array and parse back to objects
const uniqueObject = [...objectSet].map((objStr) => JSON.parse(objStr));

// Output the unique objects
console.log("Unique Values:", uniqueObject);
