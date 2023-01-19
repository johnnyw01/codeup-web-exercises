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



// Create a function, findAverageDogAge, that takes in a array of pet objects with age properties and returns the average age of a dog.

//     const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Pickles',
//         type: 'Dog',
//         age: 10
//     }
//
// ];

// const findAverageDogAge = (pets)=>{
//     let total = 0;
//     let dogCount = 0;
//
//     pets.forEach((pet)=>{
//         if(pet.type === 'Dog'){
//             total += pet.age;
//             dogCount++
//         }
//     });
//     //Using a forLoop:
//     // for(let i = 0; i < pets.length; i++){
//     //     if(pets[i].type === 'Dog'){
//     //         total += pets[i].age;
//     //         dogCount++
//     //     }
//     // }
//     return total/dogCount
// }
// console.log(findAverageDogAge(pets)); // returns 7.5
//
// ================================= WARM UP
//
// Create a function, returnPetsWithNoFish, that takes in a array of pet objects and returns an array of pet objects with no pets of type 'Fish'.

//     const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Beans',
//         type: 'Dog',
//         age: 3
//     },
//     {
//         name: 'Mr. Salmon',
//         type: 'Fish',
//         age: 1
//     }
// ];
//
//     const returnPetsWithNoFish = (pets) => {
//         let results;
//         pets.forEach((pet)=>{
//             results = pets.filter(pet => pet.type !== 'Fish');
//         });
//         return results;
//     }

    ///Alternative way:
    // const returnPetsWithNoFish = (pets) => {
    //     const outPut = [];
    //     pets.forEach((pet)=>{
    //         if(pet.type !=== 'Fish'){
    //             outPut.push(pet)
    //         }
    //     });
    //     return outPut;
    // }

// console.log(returnPetsWithNoFish(pets)) // returns...

    // [
    // {
    //     name: 'Mr. Pig',
    //     type: 'Cat',
    //     age: 4
    // },
    //     {
    //         name: 'Bubba',
    //         type: 'Dog',
    //         age: 5
    //     },
    //     {
    //         name: 'Beans',
    //         type: 'Dog',
    //         age: 3
    //     }
    // ]


// ================================= WARM UP
//
// Create a function, returnLongestPetName, that takes in a array of pet objects and returns a string of the longest name for a pet.
//
//     const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Beans',
//         type: 'Dog',
//         age: 3
//     },
//         {
//             name: 'Mr. Salmon',
//             type: 'Fish',
//             age: 1
//         }
// ];
//
// let longestName = "" ;
// const returnLongestPetName = (pets) => {
//     pets.forEach((pet) => {
//         if(longestName.length < pet.name.length){
//             longestName = pet.name;
//         }
//     });
//     return longestName;
// }
//
// console.log(returnLongestPetName(pets)); // returns 'Mr. Salmon'

// ================================= WARM UP
// Write a function, returnLastTwoChars that returns the last two characters of an input string. Assume a string input of at least two characters.
// returnLastTwoChars(‘cat’) // returns ‘at’
// returnLastTwoChars(‘hello’) // returns ‘lo’
// returnLastTwoChars(‘hi’) // returns ‘hi’


// const returnLastTwoChars= (input)=>{
//     if(input.length >= 2){
//         return input.slice(-2);
//     }else{
//         return 'Input needs to be at least 2 characters long.'
//     }
// }
//
// console.log(returnLastTwoChars('cat'));
// console.log(returnLastTwoChars('hello'));
// console.log(returnLastTwoChars('hi'));



// EXTRA CHALLENGE
// Create a function, returnLastCharsReversed that takes in two arguments:
// 1. a string of characters
// 2. an integer that represents how many characters should be returned

// The function should return a string of characters, equal to the number specified
// by the second argument, in reverse order. If 0 is passed as a second argument,
// return an empty string. Assume only valid inputs and that the second argument
// will NOT exceed the length of the input string.


// const returnLastCharsReversed = (input1, input2) =>{
//     if(typeof input1 !== 'string' && typeof input2 !== 'number'){
//         return false;
//     }else {
//         let reversedInput = input1.split("").reverse().slice(0, input2).join("");
//         return reversedInput
//
//     }
// }
//
// console.log(returnLastCharsReversed('cat', 0));
// console.log(returnLastCharsReversed('cat', 1));
// console.log(returnLastCharsReversed('cat', 2));
// console.log(returnLastCharsReversed('cat', 3));


//     Examples:
// returnLastCharsReversed(‘cat’, 0) // returns ‘’
// returnLastCharsReversed(‘cat’, 1) // returns ‘t’
// returnLastCharsReversed(‘cat’, 2) // returns ‘ta’
// returnLastCharsReversed(‘cat’, 3) // returns ‘tac’
// returnLastCharsReversed(‘codeup’, 1) // returns ‘p’
// returnLastCharsReversed(‘codeup’, 3) // returns ‘pue’
// returnLastCharsReversed(‘codeup’, 4) // returns ‘pued’

// Write a function, iBeforeE that takes in a string and returns the string with any ‘ei’ characters replaced with ‘ie’.

// const iBeforeE = (str) => {
//     if(str.includes('ei')){
//         let newStr = str.replaceAll('ei','ie');
//         return newStr;
//     }
// }
//
// console.log(iBeforeE('ei'));
// console.log(iBeforeE('height'));
// console.log(iBeforeE('heist'));
// console.log(iBeforeE('their'));
// console.log(iBeforeE('theirtheir'));


// iBeforeE(‘ei’) // returns ‘ie’
// iBeforeE(‘height’) // returns ‘hieght’
// iBeforeE(‘heist’) // returns ‘hiest’
// iBeforeE(‘their’) // returns ‘thier’
// iBeforeE(‘theirtheir’) // returns ‘thierthier’

// ================================= WARM UP
// Create a function, filterList, that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// const filterList = (lst)=>{
//    return lst.filter((num) => typeof num !== 'string');
// }
// console.log(filterList([1,2,'a','b']));
// console.log(filterList([1,'a','b', 0, 15]));
// console.log(filterList([1,2,'aasf','1','123',123]));

// filterList([1,2,‘a’,‘b’]) // returns [1,2]
// filterList([1,‘a’,‘b’,0,15]) // returns [1,0,15]
// filterList([1,2,‘aasf’,‘1’,‘123’,123]) // returns [1,2,123]


// Create a function, zipArrays, that takes two array inputs of the same length and returns an array with the elements of both arrays alternating in the order of first[0], second[0], first[1], second[1], etc. If both arrays are empty, return an empty array.


 // const zipArrays = (arr1, arr2)=>{
 //    let emptyArray = []
 //    if(arr1.length === 0 && arr2.length === 0){
 //        return emptyArray;
 //    }else{
 //        for(let i = 0; i < arr1.length; i+=1){
 //            emptyArray.push(arr1[i]);
 //            emptyArray.push(arr2[i]);
 //        }
 //        return emptyArray
 //    }
 // }

// console.log(zipArrays([], [])) // returns []
// console.log(zipArrays([1], [2])) // returns [1, 2]
// console.log(zipArrays(['a', 'b'], ['c', 'd'])) // returns... ['a', 'c', 'b', 'd']
// console.log(zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25]) )// returns...
//
//     [
//     1,
//         'bob',
//         2,
//         null,
//         'a',
//         'sally',
//         'b',
//         25
//     ]
//
// ================================= WARM UP

// Write a function, getUserCredentials, that takes in a list of user objects and returns a list of user objects with only the username and password properties. Assume at least an array of one user object.


    const users = [
    {
        firstName: 'Justin',
        lastName: 'Reich',
        dob: '1923-01-01',
        username: 'jreich',
        password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
    },
    {
        firstName: 'Sally',
        lastName: 'Smith',
        dob: '1935-03-11',
        username: 'ssmith',
        password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
    },
    {
        firstName: 'Fred',
        lastName: 'Smith',
        dob: '1999-01-21',
        username: 'fsmith',
        password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
    },
]

const getUserCredentials = (input) =>{
    let newList = []
    input.forEach((item)=>{
        newList.push({
            username: item.username,
            password: item.password
        });
    });
    return newList
}

// console.log(getUserCredentials(users)) // returns...

/*

[
  {
    username: 'jreich',
    password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
  },
  {
    username: 'ssmith',
    password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
  },
  {
    username: 'fsmith',
    password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
  }
]

*/

// This loop should print the numbers from 0 through 9 in the console

// for (let i = 0; i < 10; i++) {
//     console.log("The value of i is " + i);
//     // i++;
// }

// desired output : 0, 1 ,2,  3, 4, 5, 6, 7, 8, 9

// Create a function, shiftElementsOver, that takes in an array and returns the array with all elements moved one index further into the array. The final element should be moved to the front. Assume the input array will have three or more elements.

const shiftElementsOver = (input) => {
    input.unshift(input.pop());
    return input;
}

// console.log(shiftElementsOver([1, 2, 3, 4, 5])); // returns [5, 1, 2, 3, 4]
// console.log(shiftElementsOver(['bob', 'sally', 'mary'])); // returns ['mary', 'bob', 'sally']
// console.log(shiftElementsOver([null, 123, 'hello world', true])); // returns [true, null, 123, 'hello world']


// ================================= WARM UP

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

// example data...

const neighborhood1 = {
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 6},
        {name: "High School", rating: 8}
    ]
};

const neighborhood2 = {
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "high",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 8},
        {name: "High School", rating: 8}
    ]
}

const neighborhood3 = {
    neighborhood: "Oak Mountain",
    medianHomePrice: 290000,
    pool: false,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 8},
        {name: "High School", rating: 8}
    ]
}

const neighborhood4 = {
    neighborhood: "Ginormous Acres",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 9},
        {name: "Middle School", rating: 9},
        {name: "High School", rating: 9}
    ]
}

// const schoolRating =(obj) => {
//     let score = 0;
//     for(let i =0; i< obj.schools.length; i++){
//         // console.log(obj.schools[i].rating);
//         score += obj.schools[i].rating
//     }
//     return score;
// }

// console.log(schoolRating(neighborhood4));
const isDesirable = (obj) => {
        let score = 0;
        for(let i =0; i < obj.schools.length; i++) {
            // console.log(obj.schools[i].rating);
            score += obj.schools[i].rating
        }
    if(obj.medianHomePrice < 300000 && obj.crimeRate === 'low' && score >= 24){
        return true;
    }else{
        return false;
    }
}

// console.log(isDesirable(neighborhood1)) // returns false due to school rating
// console.log(isDesirable(neighborhood2)) // returns false due to crime rate
// console.log(isDesirable(neighborhood3)) // returns true
// console.log(isDesirable(neighborhood4)) // returns false due to median home price


// / Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:
//     const convertLetter = (str) =>{
//         if(typeof str === 'number'){
//             str.toString();
//             return str;
//         }
// //     }
//     console.log(convertLetter("1"));
    const encodeStr = (str) => {
        return str
            .replace(/a/gi, "@")
            .replace(/s/gi,"$")
            .replace(/i/gi,"1");
    }

// ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomes ‘$’

    // console.log(encodeStr('apple'));
    // console.log(encodeStr('codeup'));
    // console.log(encodeStr('SASS'));
    // console.log(encodeStr('bike'));

