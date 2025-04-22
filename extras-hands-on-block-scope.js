// hands-on for block-scope

// 1. This is a block using an if statement
if (true) {
  // This variable is declared with 'let' inside the block
  // So it's only accessible inside this block
  let snack = "Chocolate chip cookies";
  console.log(snack); // ✅ Output: Chocolate chip cookies
}

// Trying to access 'snack' outside the block will give an error
// console.log(snack); //Error: snack is not defined

//

//

// 2. Second example for block-scope
{
  // 'name' is declared inside this block only
  let name = "Rahima";
  console.log(name); // ✅ This works: Outputs "Rahima"
}

// Outside the block, 'name' is not available
// console.log(name); // ❌ Error: name is not defined

//

//

// 3. third example for block-scope
let isRaining = true;

//for loop is not a functional scope :
if (isRaining) {
  let umbrella = "Take an umbrella!";
  console.log(umbrella); // ✅ Works: Outputs "Take an umbrella!"
} else {
  let sunglasses = "Wear sunglasses!";
  console.log(sunglasses); // ✅ Would work if it's not raining
}

// console.log(umbrella); // ❌ Error: umbrella is not defined
// console.log(sunglasses); // ❌ Error: sunglasses is not defined

//

//

//4. fourth example for block-scope

{
  // 'fruit' is declared using const inside this block
  // So it only exists inside these curly braces { }
  const fruit = "Mango";

  // ✅ This works because we're still inside the block
  console.log(fruit); // Output: Mango
}

// ❌ This gives an error because we're now outside the block
// 'fruit' doesn't exist here — it's out of scope
// console.log(fruit); // Error: fruit is not defined

//

//

//5. fifth example for block-scope
{
  //age is declared using let inside this block
  //block scope only is accessable inside the block only
  let age = 20;
  console.log(age); //output: 20
}

// console.log(age);   //output: will give an error beacuse we cannot access it outside of the block
