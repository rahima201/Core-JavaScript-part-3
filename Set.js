//creating the set
const mySet = new Set([1, 2, 3, 4, 5, 4]); //this is how you create set

//set a value /and assign value
mySet.add("10");

//how to remove the value
// mySet.clear();

const isExist = mySet.has("2"); //this has method return only boolean value
// console.log(isExist);

// how to see the size of the set
// console.log(mySet.size);

mySet.delete(5);

// console.log(mySet);

for (let myVal of mySet) {
  console.log(myVal);
}
