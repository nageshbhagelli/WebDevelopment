// Write a JavaScript function that returns array elements larger than a number.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 4;
function returnLargerNumbers(arr, num) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      ans.push(arr[i]);
    }
  }
  return ans;
}

let ans = returnLargerNumbers(arr, num);
console.log(ans);

//Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

// Write a JavaScript function to count the number of vowels in a String argument.

let str = "abcdabcdefggghiinno";

function uniqueChars(str) {
  let unichars = "";
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (unichars.indexOf(currentChar) == -1) {
      unichars += currentChar;
    }
  }
  return unichars;
}

function noOfVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      count++;
    }
  }
  return count;
}

let ansStr = uniqueChars(str);
let vowels = noOfVowels(str);
console.log(`Unique characters in ${str} are ${ansStr}`);
console.log(`Number of vowels in ${str} is ${vowels}`);

//Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"

let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
  let ansIdx = 0;
  for (let i = 0; i < country.length; i++) {
    if (ansIdx < country[i].length) {
      ansIdx = i;
    }
  }
  return ansIdx;
}

let ansIdx = longestName(country);
console.log(country);
console.log(`The country with the longest name is ${country[ansIdx]}`);

//Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
let arrNums = [99, 98, 97, 96, 90];
const average = (arr) => {
  let n = arr.length;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / n;
};

let avg = average(arrNums);
console.log(arrNums);
console.log(`Average of array elements is: ${avg}`);
