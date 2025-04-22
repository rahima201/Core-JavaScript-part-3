//implicit conversion
const num = 10;
const strNum = "50";

const result = num + strNum;

// console.log(result);   //1050
console.log(typeof result); //converted into string

//explicit conversion
const age = "25";
const convertedAge = parseInt(age);
console.log(typeof convertedAge); //converted into number

const age2 = 25;
const convertedAge2 = age2.toString();
console.log(typeof convertedAge2); //converted into string

const isMarried = true;
console.log(+isMarried);
