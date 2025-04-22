// 1. first example for function-scope

let color = "blue"; // 🌍 Global scope: This variable is available everywhere

function showColor() {
  let shade = "light"; // 🔒 Block scope: This variable is only inside the function
  console.log(color); // ✅ Works: 'color' is global, so it's accessible here
  console.log(shade); // ✅ Works: 'shade' is declared inside this block
}

showColor(); // Call the function

console.log(color); // ✅ Works: 'color' is global

// console.log(shade);  // ❌ Error: 'shade' is not defined outside the function

//

//

// 2. second example for function-scope
let fruit = "apple"; // 🌍 Global variable

if (true) {
  let vegetable = "carrot"; // 🔒 Block scoped to this if-statement
  console.log(fruit); // ✅ Output: apple (global variable accessible)
  console.log(vegetable); // ✅ Output: carrot (inside the block)
}

console.log(fruit); // ✅ Output: apple

// console.log(vegetable);  // ❌ Error: 'vegetable' is not accessible outside the block

//

//

//3. third example for function-scope

let name = "Lina"; // 🌍 Global scope

function greet() {
  console.log("Hello " + name); // ✅ Works: 'name' is global
}

greet(); // Output: Hello Lina
console.log(name); // Output: Lina

//4. fourth example for function-scope

if (true) {
  let language = "JavaScript"; // 🔒 Block scoped to this if-block
  console.log(language); // ✅ Output: JavaScript
}

// console.log(language);       // ❌ Error: 'language' is not accessible here

//

//

//4.fourth example for function-scope
if (true) {
  let age = 20;
  console.log(age); //output: 20
}

//

//

//5. fifth example for function-scope
let animal = "horse"; // 🌍 Global variable

function showAnimal() {
  let animal = "deer"; // 🔒 Block scoped inside the function
  console.log("Inside function:", animal); //output: dog
}

showAnimal();

console.log("Outside function:", animal); //output: cat
