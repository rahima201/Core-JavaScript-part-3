// 1. first example for global scope
// 'color' is declared outside of any block or function
// So, it's a global variable that can be accessed anywhere in the code
let color = "Red";

// We can use the global variable here, outside the block
console.log(color); // ✅ Output: Red

function showColor() {
  // We can also access the global variable inside the function
  console.log(color); // ✅ Output: Red
}

showColor(); // Calling

//

//

//2. second example for global scope
// 'name' is declared globally
const name = "Rahima";

// We can use the global variable inside functions too
function greet() {
  console.log("Hello, " + name); // ✅ Output: Hello, Rahima
}

function bye() {
  console.log("Goodbye, " + name); // ✅ Output: Goodbye, Rahima
}

greet(); // Calling greet() function
bye(); // Calling bye() function

console.log("Hello, " + name);
console.log("Goodbye, " + name);

//

//

//3. third example for global scope
// 'city' is a global variable
let city = "Warren";

if (true) {
  // Global variables can be accessed inside blocks too
  console.log("I live in " + city); // ✅ Output: I live in Warren
}

// The global variable is still accessible outside the block
console.log("City: " + city); // ✅ Output: City: Warren

//

//

// 4. fourth example for global scope
//'state' is a global variable
let state = "Michigan";

if (true) {
  //global variable can be access anywhere inside or outside of blocks
  console.log("I live in " + state);
}

//this global variable is still accessible outside the block
console.log("City: " + state);

//

//

//5. fifth example for global scope
// A JavaScript object
let person = {
  name: "Tom",
  age: 28,
  hobbies: ["reading", "gaming"],
  isMarried: false,
};

// Convert the JS object into a JSON string
let jsonData = JSON.stringify(person);

// Now it's in string format, useful for saving/sending
console.log(jsonData);
// ✅ Output: {"name":"Tom","age":28,"hobbies":["reading","gaming"],"isMarried":false}

//

//

// 6. sixth example for global scope
// Declaring a global variable
let miniAge = 30; // Global variable 'miniAge' with a value of 30

// A function that uses the global 'miniAge' variable
function checkAge() {
  console.log("MiniAge is: " + miniAge); // ✅ Accessing global variable inside the function
}

checkAge(); // Calling the function to check the global 'miniAge'

// Outside the function, we can still access the global variable
console.log("Outside function, MiniAge is: " + miniAge); // ✅ Output: 30
