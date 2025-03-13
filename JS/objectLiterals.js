/*
JS Object Literals: used to store keyed collections and complex entities.
    syntax: property => (key, value)pair
    -objects are a collection of properties
    -object can be made constant but elements can be altered

Thread I Twitter Post: Create an object literal for the properties of threadl twitter post which includes -
    • username
    • content
    • likes
    • reposts
    • tags

    Get values: object["key"] or object.key
        -Get Values JS automatically converts to strings.
            Even if we made the number as a key, the number will be converted to string.

    Delete key-value pair: delete obj.key;

Objects of objects: collection of objects
Array of objects can also be created

Math Object:
-Properties: Math.PI, Math.E
-Methods: 
    Math.abs( n )
    Math.pow( a, b )
    Math.floor( n )
    Math.ceil( n )
    Math.random( )

To create random integers: Math.floor(Math.random()*10) + 1;
*/

console.log("Welcome to number guessing game!");
const range = prompt("Enter a range: ");
const random = Math.floor(Math.random()*range)+1;

let guess = prompt("Guess the number between the range 1-"+ range + "\nor enter quit to quit");

while(true) {
    if(guess == "quit") {
        console.log("User quit.")
        break;
    }
    
    if(guess == random) {
        alert("Congrats! You are right. The number was "+random);
        break;
    } else if(guess > random) {
        guess = prompt("Your guess was too large. Try again.")
    } else {
        guess = prompt("Your guess was too small. Try again.")
    }
}