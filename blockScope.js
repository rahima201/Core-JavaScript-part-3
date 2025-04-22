// const name = "Rahima";

// function myFunc() {
//   //parent block starts here
//   let number = 10;

//   if (number === 10) {
//     const numberInChildren = 50;
//     console.log("number is from parent block", number);

//     if (true) {
//       console.log("number in nested block", numberInChildren);
//     }
//   }
//   console.log(name); //global scope: you can access from any where
//   //   console.log("Number from the children", number);
// }

// myFunc();

// 2. More hands-on for Global Scope
// This variable is declared outside of any function or block
// So it's in the global scope
let weather = "It's sunny today!";

function checkWeather() {
  // We can access the global variable inside this function
  console.log(weather); // ✅ Output: It's sunny today!
}

// Calling the function
checkWeather();

// We can also access the global variable here, outside the function
console.log(weather); // ✅ Output: It's sunny today!

// <!-- git add . -->
// <!-- git commit -m "I added" -->
// <!-- git push  -->

//<!-- //to open file: cmd //
//to open new terminal: ctrl j
//to save codes in github: 1. git add . 2. git commit -m "version1" 3. git push...
//to see vs code in github: . enter
//to get something many times use: div*3 enter : .section*3

const newArrow = () => {};
