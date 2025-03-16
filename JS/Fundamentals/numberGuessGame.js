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