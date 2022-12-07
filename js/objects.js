(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Rick",
        lastName: "Sanchez"
    }
    // console.log(person.firstName);
    // console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = ()=>{
        console.log(`Hello from ${person.firstName} ${person.lastName}!`)
    }

    person.sayHello();


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    for(let i in shoppers){
        console.log(`${shoppers[i].name}'s total amount due before discount is $${shoppers[i].amount.toFixed(2)}.`)
        if(shoppers[i].amount > 200){
            console.log(`Since ${shoppers[i].name}'s total amount due is over $200, ${shoppers[i].name} gets a 12% discount!`);
            let discount = shoppers[i].amount * .12;
            let newTotal = shoppers[i].amount - discount;
            console.log(`${shoppers[i].name}'s total amount due after discount is $${newTotal.toFixed(2)}.`);
        }else{
            console.log(`${shoppers[i].name} did not spend enough money to get a discount. ${shoppers[i].name}'s total amount due is $${shoppers[i].amount}.`)
        }
    }

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: "Felicia's Journey",
            author: {
                firstName: "William",
                lastName: "Trevor"
            }
        },
        {
            title: "The Artamonov Business",
            author: {
                firstName: "Maxim",
                lastName: "Gorky"
            }
        },
        {
            title: "American Spy",
            author: {
                firstName: "Lauren",
                lastName: "Wilkinson"
            }
        },
        {
            title: "Shuggie Bain",
            author: {
                firstName: "Douglas",
                lastName: "Stuart"
            }
        },
        {
            title: "The Immortalists",
            author: {
                firstName: "Chloe",
                lastName: "Benjamin"
            }
        }

    ];

    for(let i in books){
        console.log(`${books[i].title} by ${books[i].author.firstName} ${books[i].author.lastName}`)
    }

    // console.log(books[0].title);
    // console.log(books[0].author.firstName);
    // console.log(books[0].author.lastName) ;
    //
    // console.log(books[1].title);
    // console.log(books[1].author.firstName);
    // console.log(books[1].author.lastName) ;
    //
    // console.log(books[2].title);
    // console.log(books[2].author.firstName);
    // console.log(books[2].author.lastName) ;
    //
    // console.log(books[3].title);
    // console.log(books[3].author.firstName);
    // console.log(books[3].author.lastName) ;
    //
    // console.log(books[4].title);
    // console.log(books[4].author.firstName);
    // console.log(books[4].author.lastName) ;


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    for(let i = 0; i<books.length;i++){
        console.log(` Book # ${i+1} \n Title: ${books[i].title} \n Author: ${books[i].author.firstName} ${books[i].author.lastName} \n -- `)
    }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    const createBook = (title, author_fName, author_lName) => {
        return {
            title: title,
            author:{
                firstname: author_fName,
                lastname: author_lName,
            }
        }
    }

    console.log(createBook("The Whale", "Stephen","King"))



    const showBookInfo = (book) => {
        for(let i = 0; i<books.length;i++){
            console.log(` Book # ${i+1} \n Title: ${books[i].title} \n Author: ${books[i].author.firstName} ${books[i].author.lastName} \n -- `)
        }
    }

    showBookInfo(books)


})();
