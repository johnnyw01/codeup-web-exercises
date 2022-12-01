// Exercise 1:

let userInput = prompt("Please enter an odd number between 1 and 50.");
let userValue;

while (true) {
    if (userInput % 2 === 0) {
        userInput = prompt("You did not enter an odd number. Please try again");
    } else {
        userValue = userInput;
        console.log("Number to skip is: " + userValue);
        for (let i = 1; i <= 50; i++) {
            if(userValue == i) {
                console.log("Yikes! Skipping number: " + userValue);
                continue;
            }
            if(i % 2 === 1){
                console.log("Here is an odd number " + i);
            }
        }
        break;
    }
}

// *****************OR**********************



// while(true){
//     let userNum = prompt("Please enter an odd number between 1 and 50.");
//     userNum = parseFloat(userNum);
//     if(userNum % 2 ===1 && userNum <= 50 && userNum >= 1){
//         for(let i = 1; i <= 50; i+=2){
//             if(i === userNum){
//                 console.log(`Yikes! Skipping number ${i}`);
//                 continue;
//             }
//                 console.log(`Here is an odd number ${i}`)
//         }break;
//     }
// }