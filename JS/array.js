//Write a JavaScript program to get the first n elements of an array.[n can be any positive number].
// For example: for array[7,9,0,-2] and n=3 Print, [7,9,0]

// Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [9, 0, -2]

//Write a JavaScript program to check if an element exists in an array or not.

//Find the largest number in an array with only positive numbers.

let arr = [7, 9, 0, -2];
let n = 3;

console.log("Array is:" + arr);
let ans = arr.slice(0, n);
console.log("The first n elements of an array: " + ans);
let ans1 = arr.slice(arr.length - n);
console.log("The first n elements of an array: " + ans1);

let item = 8;
if (arr.indexOf(item) != -1) {
  console.log(`${item} exists in array.`);
} else {
  console.log(`${item} doesn't exists in array.`);
}

let largest = arr[0];

for (let i = 0; i <= arr.length; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}
console.log(`${largest} is the largest element in the array.`);

//Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

let array = [1, 2, 3, 4, 5, 6, 2, 3];
console.log("Original array is: " + array);
let number = 2;

for (let i = 0; i < array.length; i++) {
  if (array[i] == number) {
    array.splice(i, 1);
  }
}
console.log("Array after deletion is: " + array);

// Write a JavaScript program to check whether a string is blank or not.

let str = prompt("Enter a string:");
if (str.length == 0) {
  console.log("String is empty.");
} else {
  console.log("String is not empty.");
}

// Write a JavaScript program to test whether the character at the given (character) index is lower case.

let str1 = "Hello World!";
console.log(str1);
let indx = 6;

if (str1[indx] == str1[indx].toLowerCase()) {
  console.log(`Character at index ${indx} is in lower case`);
} else {
  console.log(`Character at index ${indx} is not in lower case`);
}

//Write a JS program to find the no of digits in a number. Example : if number = 287152, count = 6

//Write a JS program to find the sum of digits in a number. Example : if number = 287152, sum = 25

let num1 = 287152;
let copy = num1;
let count = 0;
while (copy > 0) {
  count++;
  copy = Math.floor(copy / 10);
}
console.log(`Number of digits in ${num1} is ${count}`);

let sum = 0;
let copy1 = num1;
while (copy1 > 0) {
  digit = copy1 % 10;
  sum = sum + digit;
  copy1 = Math.floor(copy1 / 10);
}
console.log(`Sum of digits of ${num1} is ${sum}`);

//Create a program that generates a random number representing a dice roll. [The number should be between 1 and 6].

let diceNum = Math.floor(Math.random() * 6) + 1;
console.log(`Dice rolled: ${diceNum}`);
