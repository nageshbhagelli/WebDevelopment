/*
String Methods: (strings are immutable in js)
    str.trim() : trims the whitespaces from both ends of string and returns a new one.
    str.toUpperCase() : changes all string characters to uppercase
    str.toLowerCase() : changes all string characters to lowercase
    str.indexOf(argument) : returns the indext of argument
    str.slice(index or range of index) : returns a part of original string as a new string
        if negative number is passed as an argument it is converted to (length-num) value
    str.replace(oldValue, newValue) : searches a value in the string and returns a new string with value replaced
    str.repeat(number): returns a string with the number of copies of a string

Method chaining: str.toUpperCase().trim();

*/

// let msg = " Hello World! ";
// console.log(msg);
// console.log(msg.trim());
// console.log(msg.toUpperCase());
// console.log(msg.toLowerCase());
// console.log("Index of e is:", msg.indexOf("e"));
// console.log("Sliced string is:", msg.slice(3));
// console.log("Sliced string is:", msg.slice(7, 13));
// console.log("Replaced string: ", msg.replace("Hello", "Namaste"));
// console.log("Repeated string: ", msg.repeat(4));


/*
Arrays: (linear collection of things)
  syntax: let arrayName = ["elements", "elements",...]
    -typeof arrays is object
    -arrays of mixed data types can be created
    -arrays are mutable.
    -method chaining is possible for array methods
    -constant arrays can be created using const keyword

    arr.length = returns the length of an array

    Array methods: 
        arr.push(element): add to end
        arr.pop(): delete from end and return it 
        arr.unshift(element): add to start
        arr.shift(): delete from start and return it
        arr.indexOf(element): returns index of given element if present else -1
        arr.includes(element): search for a given value (true or false)
        firstArr.concat(secondArr): merges two arrays
        arr.reverse(): reverses an array(original array gets reversed)
        arr.slice(start, end): copies a portion of an array
        arr.splice(start, deleteCount, item0...itmeN): removes/replaces/adds elements in place
        arr.sort(): sorts an array(cannot be used to sort numbers)

    Nested array or multi-dimensional array:
        let nums = [ [2,4], [3,6], [4,8]]


*/

let students = ["arya", "surya", "maurya", "suma"];
console.log(students);
console.log("Length of array is: ", students.length);
students.push("sudha");
console.log(students);
students.pop();
console.log(students);
students.unshift("sudha");
console.log(students);
students.shift();
console.log(students);
console.log("Index of suma is:", students.indexOf("suma"));
console.log("Reversed array is:", students.reverse());
students.sort();
console.log(students);
