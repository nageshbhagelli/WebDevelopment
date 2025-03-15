//Square and sum the array elements using the arrow function and then find the average of the array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
const square = arr.map((num) => num * num);
console.log(square);

let sum = square.reduce((acc, cur) => acc + cur);

let avg = sum / arr.length;
console.log(`Average of squared array is: ${avg}`);

//Create a new array using the map function whose each element is equal to the original element plus 5

let newArr = arr.map((num) => num + 5);
console.log(`The new array is: ${newArr}`);

//Create a new array whose elements are in upper case of words present in the original array

let strings = ["aditya", "bhrajesh", "charan", "dhanu"];
let newStrings = strings.map((str) => str.toUpperCase());
console.log(`Array of elements in uppercase are: ${newStrings}`);

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
//The function should return a new array with the original array values and all of the additional arguments doubled.
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];
let answer = doubleAndReturnArgs([1, 2, 3, 4, 5, 6], 4, 4);
console.log(answer);

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

let mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
let final = mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
console.log(final);
