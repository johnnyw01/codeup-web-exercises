//
// ========== Creating Objects (dog, user, forecast, dictionaryEntry, movie, post, etc.)

// New Object Instance

// const dog = new Object();
// console.log(typeof dog);


// Object Literal Notation

// const cat = {};
// console.log(typeof cat);

// const cat = {
//     name: 'Garfield',
//     age: 7
// };
//
// // console.log(cat);
// console.log(cat.name);
// console.log(cat.age);
//
//
// cat.color = 'orange';
//
// cat.age = 8;
// console.log(cat);

// console.log(cat['age']);

// ========== Accessing Properties on an Object

// console.log(pet.givenName);
// console.log(pet2.givenName);
// console.log(pet2['givenName']);
//
// pet.givenName = "Sabrina";

// console.log(pet.givenName);

// ========== Setting Properties on an Object

// const pet = {};

// pet.givenName = 'Sparkles';
// pet.age = 12;
// pet.species = 'turtle';
// pet.hasOffspring = true;
// pet['value-in-dollars'] = 400; // alternative syntax for assigning properties

// ========== Peeking into an Object (can result in inaccurate property values if your script mutates an array/object)

// console.log(pet);


// Nested Values

// const pets = [
//
//   {
//     name: 'Bowser',
//     age: 6,
//     species: 'Pug',
//     hasOffspring: false,
//     valueInDollars: 'priceless',
//     altNames: [
//       'Bowser Boy',
//       'Bowser Man',
//       'Bowser Buddy',
//       'Puggle Wuggle Boy'
//     ],
//     vitals: [
//       {
//         averageTempDegF: 101,
//         averageRestingHeartRate: 80,
//         isHungry: true,
//         date: '2022-12-01'
//       },
//       {
//         averageTempDegF: 99,
//         averageRestingHeartRate: 70,
//         isHungry: true,
//         date: '2022-12-02'
//       },
//       {
//         averageTempDegF: 98,
//         averageRestingHeartRate: 100,
//         isHungry: false,
//         date: '2022-12-03'
//       },
//       {
//         averageTempDegF: 101,
//         averageRestingHeartRate: 80,
//         isHungry: true,
//         date: '2022-12-04'
//       }
//     ]
//   },
//   {
//     name: 'Pickles',
//     age: 6,
//     species: 'Pug',
//     hasOffspring: false,
//     valueInDollars: 'priceless',
//     altNames: [
//       'Bowser Boy',
//       'Bowser Man',
//       'Bowser Buddy',
//       'Puggle Wuggle Boy'
//     ],
//     vitals: [
//       {
//         averageTempDegF: 101,
//         averageRestingHeartRate: 80,
//         isHungry: true,
//         date: '2022-12-01'
//       },
//       {
//         averageTempDegF: 99,
//         averageRestingHeartRate: 70,
//         isHungry: true,
//         date: '2022-12-02'
//       },
//       {
//         averageTempDegF: 98,
//         averageRestingHeartRate: 100,
//         isHungry: false,
//         date: '2022-12-03'
//       },
//       {
//         averageTempDegF: 101,
//         averageRestingHeartRate: 80,
//         isHungry: true,
//         date: '2022-12-04'
//       }
//     ]
//   }
//
// ]

// const pet = { // pet.vitals[1].averageTempDegF
//     name: 'Bowser',
//     age: 6,
//     species: 'Pug',
//     hasOffspring: false,
//     valueInDollars: 'priceless',
//     altNames: [
//         'Bowser Boy',
//         'Bowser Man',
//         'Bowser Buddy',
//         'Puggle Wuggle Boy'
//     ],
//     vitals: [
//       {
//         averageTempDegF: 101,
//         averageRestingHeartRate: 80,
//         isHungry: true,
//         date: '2022-12-01'
//       },
//       {
//         averageTempDegF: 99,
//         averageRestingHeartRate: 70,
//         isHungry: true,
//         date: '2022-12-02'
//       },
//       {
//         averageTempDegF: 98,
//         averageRestingHeartRate: 100,
//         isHungry: false,
//         date: '2022-12-03'
//       },
//       {
//         averageTempDegF: 101,
//         averageRestingHeartRate: 80,
//         isHungry: true,
//         date: '2022-12-04'
//       }
//     ]
// };
// console.log(pet.vitals.averageTempDegF);
//
// console.log(pet.vitals['isHungry']);
// console.log(pet.altNames[1]);

// log and change various property values on the pet object


// ========== Working with Arrays of Objects

// const pets = [
//     {
//         givenName: 'Spot',
//         isDog: true,
//         toys: ['rope', 'bone', 'ball']
//     },
//     {
//         givenName: 'Max',
//         isDog: false,
//         toys: ['scratch post', 'catnip', 'laser']
//     },
//     {
//         givenName: 'Goldy',
//         isDog: false,
//         toys: ['algae', 'bubbles']
//     }
// ];

// for (let i = 0; i < pets.length; i += 1) {
//   pets[i].givenName = 'Smith';
// }

// pets.forEach(function(pet) {
//     pet.givenName = 'Bob';
// });
//
// console.log(pets);


// log every pet's name (manually, forEach, for loops)

// for (let i = 0; i < pets.length; i += 1) {
//   console.log(pets[i].givenName);
// }
//
// pets.forEach(function(pet) {
//   console.log(pet.givenName);
// })

// pets.forEach(function(pet) {
//   console.log(pet.toys.join(' '));
// pet.toys.forEach(function(toy) {
//   console.log(toy);
// });
// })


// console.log(pets[1].givenName);
// console.log(pets[2].givenName);

// change every pet's name to 'Bowser' (manually, forEach, for loops)

// ========== Additional Example Working with Arrays of Objects

// create a pet object that has the following properties...
// givenName
// ageInYears
// species

// const pet1 = {
//     givenName: 'Freckles',
//     ageInYears: 4,
//     species: 'Dog'
// };
//
// const pet2 = {
//     givenName: 'Spot',
//     ageInYears: 2,
//     species: 'Fish'
// };
//
// const pet3 = {
//     givenName: 'Dog',
//     ageInYears: 10,
//     species: 'Cat'
// }
// const pets = [pet1, pet2, pet3];

// const users = [
//     {
//         givenName: 'Sam',
//         age: 21
//     },
//     {
//         givenName: 'Cathy',
//         age: 34
//     },
//     {
//         givenName: 'Karen',
//         age: 43
//     }
// ]

// 0. Log each given name

// for(let i =0; i<users.length; i+=1){
//     console.log(users[i].givenName)
// }
//
// users.forEach((user)=>{
//     console.log(user.givenName);
// });

// 1. Log the names of all users in a single console log separated by spaces. // output = “Sam Cathy Karen”

// let outPut = '';
// users.forEach((user)=>{
//     outPut += user.givenName + " ";
// });
// console.log(outPut.trim()); //.trim() removes the extra whitespace created by the "+ ' '".

// 2. Change the names of all users to “John Doe”

// users.forEach((user)=>{
//     user.givenName = "John Doe"
//     console.log(user.givenName);
// });

// 3. Increase the current age of all users by 1

// users.forEach((user)=>{
//     user.age +=1;
//     console.log(user.age);
// });

// Extras...

// log the total of all the ages

//     let totalAges = 0;
//     users.forEach((user)=>{
//         totalAges += user.age
//     });
//     console.log(totalAges);

// log the average age of all users

// let totalAges = 0;
// users.forEach((user)=>{
//     totalAges += user.age
// });
// console.log(totalAges/users.length);

// log all the user information in the following format...

// users.forEach((user)=>{
//     console.log(`user: ${user.givenName} | age: ${user.age}`)
// });


/*
    user: Sam | age: 21
    user: Cathy | age: 34
    user: Karen | age: 43
 */

//print each user's name if they are older than 30

// users.forEach((user)=>{
//     if(user.age > 30){
//         console.log(user.givenName)
//     }else{
//         console.log(`Hello younger person...${user.givenName}`)
//     }
// });

// log the name of the longest given name of a user


// let longestName = '';
//
// users.forEach((user)=>{
//     if(user.givenName.length > longestName.length){
//         longestName = user.givenName;
//     }
// });
// console.log(longestName)

// ========== Getting a List of Object Keys as an Array

const pet1 = {
    givenName: 'Freckles',
    ageInYears: 4,
    species: 'Dog'
};

console.log(Object.keys(pet1));


// ========== Assigning Functionality to an Object

// const dog1 = {
//     petName: 'Sparky',
//     age: 4,
//     bark: function() {
//         console.log("Woof woof!");
//     },
//     eat: function(food) {
//         console.log('Dog is eating...' + food);
//     },
//     agePet: function() {
//         this.age += 1;
//     }
// }
// dog1.agePet()
// console.log(dog1)
//
// const dog2 = {
//     petName: 'Rex',
//     age: 2,
//     bark: function() {
//         console.log("Woof woof!");
//     },
//     eat: function(food) {
//         console.log('Dog is eating...' + food);
//     },
//     agePet: function() {
//         this.age += 1;
//     }
// }
//
// const dog3 = {
//     petName: 'Dino',
//     age: 10,
//     bark: function() {
//         console.log("Woof woof!");
//     },
//     eat: function(food) {
//         console.log('Dog is eating...' + food);
//     },
//     agePet: function() {
//         this.age += 1;
//     }
// }
//
// const dogs = [dog1, dog2, dog3];
//
// console.log(dogs[0].age);
// console.log(dogs[1].age);
// console.log(dogs[2].age);
//
// dogs.forEach(function(dog) {
//     dog.agePet();
// });
//
// console.log(dogs[0].age);
// console.log(dogs[1].age);
// console.log(dogs[2].age);
//
//
// console.log(dog.age);
// dog.agePet();
// console.log(dog.age);
//
// dog.bark();
// dog.eat('steak');
// dog.eat('a bone');
// dog.eat();
//
// dog.sayHello = function() {
//     console.log('Wagging tail and barking lightly.');
// }
//
// dog.sayHello();


// const user = {
//     givenName: 'Justin',
//     age: 25,
//     sayHello: function(input) {
//         console.log(input);
//     },
//     logAge: function() {
//         console.log(this.age);
//     },
//     getYounger: function() {
//         this.age = this.age - 1;
//     },
//     setAge: function(age) {
//         this.age = age;
//     }
//     // addProp: function(name, value) {
//     //     this.name = value;
//     // }
// }

// console.log(user);

// user.sayHello('Hello, Go!');
// user.logAge();
// user.getYounger();
// user.logAge();
// user.setAge(100);
// user.logAge();
// user.getYounger();
// user.logAge();


// console.log(user);




// ========== The this Keyword

// const pet6 = {
//     name: "Sparky",
//     age: 3,
//     getOlder: function() {
//         console.log(this.age);
//         this.age += 1;
//     }
// };
//
// console.log(pet6.age);
// pet6.getOlder();
// console.log(pet6.age);
