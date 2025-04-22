// A Set is a built-in data structure in JavaScript that allows you to store unique values of any data type. A Set object is similar to an array, but with some important differences.
// Unlike an array, a Set does not have an index.
// Its values are stored in no particular order.
// Set can only contain unique values
// Duplicate values that are added to the Set will be ignored.

//

//1. first example for set

// Create a new Set with some numbers
const numberSet = new Set([1, 2, 3]);

// Add a new number
numberSet.add(4); // Adds 4 to the set

// Check if number 2 exists
console.log(numberSet.has(3)); // true

// Delete number 3
numberSet.delete(3); // Removes 3

// Print the Set
console.log(numberSet); // Set(3) {1, 2, 4}

//

//

//2. second example for Set

// Create a new Set with names
const nameSet = new Set(["Alice", "Bob", "Alice"]); // Duplicates will be removed

// Add a new name
nameSet.add("Charlie");

// Check if a name exists
console.log(nameSet.has("Bob")); // true

// Print the size of the Set
console.log(nameSet.size); // 3

// Loop through the Set
for (let name of nameSet) {
  console.log(name); // Alice, Bob, Charlie
}

//

//

//3. third example for Set

// Create an empty Set
const fruitSet = new Set();

// Add fruits
fruitSet.add("Apple");
fruitSet.add("Banana");
fruitSet.add("Orange");

// Print the Set before clearing
console.log(fruitSet); // Set(3) {'Apple', 'Banana', 'Orange'}

// Clear all values
fruitSet.clear();

// Check the size after clearing
console.log(fruitSet.size); // 0

//

//

//4. fourth example for Set

// Create a new Set to store your favorite animals
const animalSet = new Set();

//add animals
animalSet.add("Horse");
animalSet.add("Elephant");
animalSet.add("Monkey");
animalSet.add("Panda");

//print the Set before clearing
console.log(animalSet); //set(4) {"Horse", "Elephant", "Monkey", "Panda"}

//clear all values
animalSet.clear();

//check the size after clearing
console.log(animalSet.size); //output: 0

//

//

//5. fifth example for Set

// Create a Set to store days
const daySet = new Set();

//add days
daySet.add("Monday");
daySet.add("Tuesday");
daySet.add("Wednesday");
daySet.add("Thursday");

//print the Set before clearing
console.log(daySet); //outcome: Set(4) { 'Monday', 'Tuesday', 'Wednesday', 'Thursday' }

//clear all the values
daySet.clear();

//check the size after clearing
console.log(daySet.size); //outcome: 0
