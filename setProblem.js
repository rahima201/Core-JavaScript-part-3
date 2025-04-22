//find the unique elements in an array and return them in a new array

function removeDuplicateValues(values) {
  const uniqueSet = new Set(values);

  //   console.log(uniqueSet);

  const uniqueArray = Array.from(uniqueSet);
  //   console.log(uniqueArray);

  return uniqueArray;
}

const uniqueValueArr = removeDuplicateValues([1, 2, 3, 4, 5, 5]);
console.log("uniqueValueArr", uniqueValueArr);
