//1. First example for mapProblem

const bookPrices = new Map();

// Set book names and their prices
bookPrices.set("The Great Gatsby", 15);
bookPrices.set("1984", 12);
bookPrices.set("Moby D", 18);

// Retrieve and display a specific book's price
console.log(bookPrices.get("1984")); // Output: 12

//

//

//2. Second example for mapProblem
const foodPrices = new Map();

// Set food items and their prices
foodPrices.set("Pizza", 10);
foodPrices.set("Burger", 5);
foodPrices.set("Pasta", 8);

// Remove the "Burger" entry
foodPrices.delete("Burger");

// Check if the entry was removed
console.log(foodPrices.has("Burger")); // Output: false

//

//

//.3.third example for mapProblem

const fruitColors = new Map();

// Set fruit names and their colors
fruitColors.set("Apple", "red");
fruitColors.set("Cherry", "maroon");
fruitColors.set("Papaya", "green");

//remove the "papaya" entry
fruitColors.delete("Papaya");

//check if the entry was removed
console.log(fruitColors.has("Papaya")); //otput: false

//

//

//4. fourth example for mapProblem

const electronicPrices = new Map();

//set the electronics names and their prices
electronicPrices.set("Laptop", 600);
electronicPrices.set("Computer", 400);
electronicPrices.set("Iphone", 1200);
electronicPrices.set("PC", 50);

//remove the "PC" entry
electronicPrices.delete("PC");

//check is the entry was removed
console.log(electronicPrices.has("PC")); //output: false
