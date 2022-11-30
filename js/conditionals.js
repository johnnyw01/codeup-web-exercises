(() =>{

"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
const analyzeColor = (input) => {
    let makeLowerCase = input.toLowerCase()
    if(makeLowerCase == "red"){
        let redMessage = "Strawberries are " + makeLowerCase;
        return redMessage;
    }else if (makeLowerCase == "blue"){
        let blueMessage = makeLowerCase + " is the color of the sky.";
        return blueMessage;
    } else if (makeLowerCase == "green"){
        let greenMessage = "Grass is " + makeLowerCase + ".";
        return greenMessage;
    }
    else if (makeLowerCase == "indigo"){
        let indigoMessage = makeLowerCase + " is a color in the rainbow .";
        return indigoMessage;
    }
    else if (makeLowerCase == "violet"){
        let violetMessage = "Wisteria blooms are " + makeLowerCase + ".";
        return violetMessage;
    }
    else if (makeLowerCase == "orange") {
        let orangeMessage = "Only oranges are the color " + makeLowerCase +".";
        return orangeMessage;
    }
    else if (makeLowerCase == "yellow") {
        let orangeMessage = makeLowerCase + " is the color of the Sun.";
        return orangeMessage;
    }
    else{
        let error = "I dont recognize " + makeLowerCase + " as an available option. Please try again."
        return error;
    }
}

// console.log(analyzeColor("pink"));
// console.log(analyzeColor("yellow"));
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("green"));
// console.log(analyzeColor("Red"));
// console.log(analyzeColor("oragne"));
// console.log(analyzeColor("Orange"));
// console.log(analyzeColor("orange"));
// console.log(analyzeColor("white"));
// console.log(analyzeColor("indigo"));
// console.log(analyzeColor("Indigo"));
// console.log(analyzeColor("violet"));
// console.log(analyzeColor("Violet"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
switch (randomColor){
    case 'red':
        console.log("Strawberries are red");
        break;
    case 'orange':
        console.log("Oranges are orange.");
        break;
    case 'yellow':
        console.log("yellow is the color of the Sun.");
        break;
    case 'green':
        console.log("Grass is green.");
        break;
    case 'blue':
        console.log("Blue is the color of the sky.");
        break;
    case 'indigo':
        console.log("Indigo is a color in the rainbow.");
        break;
    case 'violet':
        console.log("Wisteria blooms are violet");
        break;
    default:
        console.log("I don't recognize that color. Please try again.");
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let userInput = prompt("Please enter in a color of your choice:");
let userColor = analyzeColor(userInput);
alert(userColor);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
const randomNumber = Math.floor(Math.random() * 6);

const calculateTotal = (randomNumber, totalAmount) => {
    if(randomNumber === 0){
        let zero = "Your lucky number is 0, you have no discount. Your total is ";
        return zero + totalAmount;
    }else if (randomNumber === 1){
        let one = "Your lucky number is 1, you get a 10% discount  Your new total is ";
        let oneDiscount = totalAmount - (totalAmount * .1).toFixed(2);
        return one + oneDiscount;
    }else if (randomNumber === 2){
        let two = "Your lucky number is 2, you get a 25% discount. Your new total is ";
        let twoDiscount = totalAmount - (totalAmount * .25).toFixed(2);
        return two + twoDiscount;
    }else if (randomNumber === 3){
        let three = "Your lucky number is 3, you get a 35% discount. Your new total is ";
        let threeDiscount = totalAmount - (totalAmount * .35).toFixed(2);
        return three + threeDiscount;
    }else if (randomNumber === 4){
        let four = "Your lucky number is 4, you get a 50% discount. Your new total is ";
        let fourDiscount = totalAmount - (totalAmount * .50).toFixed(2);
        return four + fourDiscount;
    } else if (randomNumber === 5){
        let five = "Your lucky number is 5, you get a everything for free! Your new total is ";
        let fiveDiscount = totalAmount * 0;
        return five + fiveDiscount;
    }
    else{
        let error = "Something went wrong. Please try again.";
        return error;
    }
}
// console.log(calculateTotal(randomNumber, 100));
// console.log(calculateTotal(randomNumber, 75));
// console.log(calculateTotal(randomNumber, 50));
// console.log(calculateTotal(randomNumber, 25));
// console.log(calculateTotal(randomNumber, 10));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);
let totalBillPrompt = prompt("Please enter in your bill total:")
alert(calculateTotal(randomNumber, totalBillPrompt));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

const isEvenOrOdd = userNum => {
    if (userNum % 2 === 0) {
        let evenMessage = "Your number is an even number";
        return evenMessage;
    } else if (userNum % 2 === 1 || userNum % 2 === -1) {
        let oddMessage = "Your number is an odd number";
        return oddMessage
    } else {
        let error = "Something went wrong. Please try again."
        return error;
    }
}

const plusOneHundred = userNum => {
    let newNum = parseInt(userNum) + 100;
    let notification = "Your number plus 100 is " + newNum;
    return notification;
}

const isPosOrNeg = userNum => {
    if (userNum >= 0) {
        let positive = "Your number is a positive number.";
        return positive;
    } else if (userNum < 0) {
        let negative = "Your number is a negative number.";
        return negative
    } else {
        let error = "You didn't enter a number. Please try again"
        return error;
    }
}

const questions = () => {
    let confirmed = confirm("Would you like to enter a number?");
    if (confirmed === true) {
        let userNum = prompt("Please enter your number");
        if(isNaN(userNum) ){
            alert("You didn't enter a number. Please try again");
        } else if (confirmed === true){
            alert(isEvenOrOdd(userNum));
            alert(plusOneHundred(userNum));
            alert(isPosOrNeg(userNum));
        }
    } else {
        alert("Ok. Bye.");
    }
}

questions();

})();
