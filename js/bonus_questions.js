// 1. Create an array of 10 foods. Write using a for loop, write logic that will log only the foods that start with a vowel. Write another solution using a forEach loop.
// 2. Write a function, addEvenNums, that takes in an array of numbers and adds up only the even numbers in the array and returns the sum of the even numbers. Assume any array inputs will only contain valid number elements and be non-empty.
// 3. Write a function, checkIfNumInArray, that takes in an array of numbers and a number and returns the string
// ‘input num in input array’ if the second argument is an element in the first argument array
// otherwise, the function should return the string ‘input num NOT in input array’ (edited)


//Question 1:
// let foods = ['pollo','carne asada','chorizo','pastor','frijoles','arroz','pico de gallo','tortilla','cebolla','cilantro'];
//
// for (let i = 0; i <= foods.length-1; i++) {
//     if(foods[i][0].match(/[aeiuoy]/i)){
//         console.log(foods[i])
//     }
// }

////*******ALTERNATE
// for (let i = 0; i < foods.length; i++){
//     let firstChar = foods[i][0];
//     let vowels = ['a','e','i','o','u'];
//     if(vowels.includes(firstChar)){
//        console.log(foods[i]); // If first char is a vowel
//     }
// }


// function logVowelKeys(keys) {
//     let vowels = [];
//     for (let i = 0; i <= keys.length-1; i++) {
//         if(keys[i][0].match(/[aeiuoy]/i)){
//             vowels.push(keys[i])
//         }
//     }
//     return vowels;
// }
//
// console.log(logVowelKeys(foods));


// foods.forEach((food) =>{
//         if (food[0].match(/[aeiuoy]/i)) {
//             console.log(food)
//         }
// })

//Question 2:

// let numbers = [1,2,3,4,5,6,7,8,9,10];
//
// function returnSum(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i+=1) {
//         if(arr[i] % 2 === 0){
//             sum += arr[i];
//         }
//     }
//     return sum
// }
//
// console.log(returnSum(numbers));
//
//  function returnSum (arr){
//     let sum = 0;
//     arr.forEach((value)=>{
//         if(value % 2 === 0){
//             sum += value;
//         }
//     });
//     console.log(sum)
// }
//
// returnSum(numbers)
//

// let months = ['April','May','June'];
//
// months.push('July');
// console.log(months);
// months.unshift("March");
// console.log(months);
// months.pop('July');
// console.log(months);


//******************************************************************************************************************//

// 1. Create a function that returns a random day of the week


    // const randomDayOfTheWeek = (input) => {
    //     let days = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
    //     return days[Math.floor(Math.random() * days.length)];
    // }

    // console.log(randomDayOfTheWeek());


// 2. Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
//         const numberOfLetter = (letter) =>{
//         let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//             return alphabet.indexOf(letter) + 1
//     }
    // console.log(numberOfLetter('j'));

// someFunction("a") // returns 1
// someFunction("z") // returns 26
//
// 3. Create a function that returns the longest string in a given array of string elements.

// const longest_str_in_array = (array) => {
//     let longestString = array[0].length;
//     let answer = array[0];
//     for (let i = 1; i < array.length; i++) {
//         let longestI = array[i].length;
//         if (longestI > longestString) {
//             answer = array[i];
//             longestString = longestI;
//         }
//     }
//     return answer;
// }
// console.log(longest_str_in_array(['a','ab','abc','abcd','abcde']));

//
// 4. Create a function that takes in two arrays of elements, including numbers. If all numbers added together in the first array are equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.
//
//     var arr1 = ['bob', 1, true, 1, 2];
// var arr2 = [2, null, undefined, 0, 2, "apple"]
// exampleFunction(arr1, arr2) // returns true


// 5. Write a program to toggle the case for all characters in a string. Special characters will not change.
//     Example input: "aBc12#""
// Example output: "AbC12#"
//
// 6. Write a program that takes a given string appended with a number at the end. The program will check the length of the string to verify the string is equal to the number appended. If the number appended equals the string length, output "Yes". if the number appended does not equal the string length, output "No".
//
//     Example Input: "geek5"
// Example Output: "Yes"
//
// Example Input: "codingchallenge25"
// Example Output: "No"
//
// 7. Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions:
//     1) add a student
// 2) delete a student
// 3) view all students in alphabetical order
// 4) view all students in reverse alphabetical

// const beverage1 = {
//     brandName: "Good Beer",
//     type: "Beer",
//     volumeInLiters: 1,
//     priceInCents: 10000,
//     expirationDate: '1JAN2025',
//     datesOfPreviousSips: ['1AUG2023','1MAR2019','1OCT2017'],
//     isOpen: false
// }
//
// const beverage2 = {}
//
// beverage2.brandName ='Good Whiskey';
// beverage2.type = 'Whiskey';
// beverage2.volumeInLiters = 0.5;
// beverage2.priceInCents = 20000;
// beverage2.expirationDate = '1JUN2050';
// beverage2.datesOfPreviousSips = ['1JUN2045','1JAN2040','1JUN2035','1JUN2030'],
// beverage2.isOpen = true
//
// console.log(beverage1);
// console.log(beverage2);



