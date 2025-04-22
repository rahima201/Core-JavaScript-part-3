//1. first example for json:

// // A simple JSON string (like data we get from an API or database)
let jsonString = '{"name": "Alice", "city": "Wonderland"}';

// // Using JSON.parse() to turn the string into a JavaScript object
let jsObject = JSON.parse(jsonString);

// Now we can use the object like a normal JavaScript object
console.log(jsObject.name); // ✅ Output: Alice
console.log(jsObject.city); // ✅ Output: Wonderland

//

// 2. second example for json

// A simple JavaScript object
// let jsObject = { name: "Bob", age: 25 };

// // Using JSON.stringify() to turn the object into a JSON string
// let jsonString = JSON.stringify(jsObject);

// // Now the object is in JSON string format
// console.log(jsonString); // ✅ Output: {"name":"Bob","age":25}

//

//

//3. third example for json

// let jsObject = { name: "Minixx", age: 30, isMarried: true };

// //using JSON.stringify( to turn the object into a JSON string)
// let jsonString = JSON.stringify(jsObject);

// //now the object is in JSON string format
// console.log(jsonString);

//

//

// 4. fourth example for json

// This is a JSON string (text form)
// let jsonString = '{"name": "Dudu Fudu", "age": 30, "isMarried": true }';

// // Convert the JSON string to a JavaScript object
// let jsObject = JSON.parse(jsonString);

// // Now we can use it like a normal object
// console.log(jsObject.name);
// console.log(jsObject.age);
// console.log(jsObject.isMarried);

//

//

// JSON.parse() takes a JSON string and turns it into a JavaScript object.
// JSON.stringify() takes a JavaScript object and turns it into a JSON string.
