// Map is a built-in data structure that allows you to store key-value pairs, where
//  each key can be of any data type (including objects and functions), and the values can also be of any data type.

// 1. first example for map
// Create a new Map object and store it in 'myMap'
// const myMap = new Map();

// // Add key-value pairs to the map
// myMap.set("name", "Rahima Begum"); // Set key "name" with value "Rahima Begum"
// myMap.set("age", 22); // Set key "age" with value 22

// // Get the value for a specific key using get()
// console.log(myMap.get("name")); // ✅ Output: Rahima Begum

// // Check if a key exists in the map using has()
// console.log(myMap.has("name")); // ✅ Output: true

// // Delete a key-value pair using delete()
// myMap.delete("age"); // Deletes the key "age"

// // Print the final map
// console.log(myMap); // ✅ Output: Map(1) { 'name' => 'Rahima Begum' }

//

//

//2. second example for map
const numbers = new Map();

numbers.set(1, "one");
numbers.set(2, "two");
numbers.set(3, "three");

console.log(numbers.get(2)); // ✅ Output: two
console.log(numbers.has(4)); // ✅ Output: false

numbers.delete(1); // Delete the key 1
console.log(numbers); // ✅ Output: Map(2) { 2 => 'two', 3 => 'three' }

//

//

// 3. third example for map
const statusMap = new Map();

statusMap.set(true, "Active"); // Boolean key: true
statusMap.set(false, "Inactive"); // Boolean key: false

console.log(statusMap.get(true)); // ✅ Output: Active
console.log(statusMap.get(false)); // ✅ Output: Inactive

//

//

// 4. fourth example for map
// Create a new Map object and store it in 'myMap'
const fruitMap = new Map();

// Add key-value pairs to the map
// Create the Map and set key-value pairs
fruitMap.set("fruit", "Mango");
fruitMap.set("color", "Red");
fruitMap.set("number", 7);
fruitMap.set("isSweet", true);

// Get the value for a specific key
console.log(fruitMap.get("fruit")); // Output: Mango

// Check if a key exists in the map
console.log(fruitMap.has("color")); // Output: true
console.log(fruitMap.has("price")); // Output: false

// Delete a key-value pair
fruitMap.delete("number"); // Removes the "number" key and its value

// Show the updated map
console.log(fruitMap); // Output: Map(3) { 'fruit' => 'Mango', 'color' => 'Red', 'isSweet' => true }

//

//

// 5. fifth example for map
const nameMap = new Map();

nameMap.set("name", "Rahima");
console.log(nameMap.get("name"));
console.log(nameMap.has("name"));
console.log(nameMap.has("age"));

nameMap.delete("name");
console.log(nameMap.has("name")); // Output: false

//

// set() → adds items

// get() → retrieves a value by key

// has() → checks if a key exists

// delete() → removes a key

// console.log(myMap) → shows the full map
