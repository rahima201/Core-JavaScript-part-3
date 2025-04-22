const myMap = new Map();

myMap.set("name", "Rahima Begum");
myMap.set("Age", 22);

// console.log(myMap);
console.log(myMap.get("name"));

console.log(myMap.has("name"));

myMap.delete("Age");
console.log(myMap);
