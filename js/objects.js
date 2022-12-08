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
    console.log('================================================');

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

        return `Hello from ${person.firstName} ${person.lastName}!`;
    }

    console.log(person.sayHello());

    // person.middleName = 'James';
    // console.log(person);

    // console.log('================================================');
    //
    // let arr = ['jason','adam',4,2,{firstName: "Jason", lastName: "Merrell"}]
    //
    // console.log(arr);

    console.log('================================================');


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

    // shoppers.forEach((shopper)=>{
    //     if(shopper.amount > 200){
    //         console.log(`Since ${shopper.name}'s total amount due is over $200, ${shopper.name} gets a 12% discount!`);
    //         //Shoppers that get a discount
    //         let savings = parseFloat(shopper.amount) * .12;
    //         let total = parseFloat(shopper.amount ) - (savings);
    //         console.log(`${shopper.name} has a bill of ${shopper.amount.toLocaleString('en-US', {style:'currency', currency:'USD'})}, and received a 12% discount.\n${shopper.name}'s discounted total is ${total.toLocaleString('en-US', {style:'currency', currency:'USD'})}, with a savings of ${savings.toLocaleString('en-US', {style:'currency', currency:'USD'})}.`);
    //     }else{
    //         let remaining = (200 - parseFloat(shopper.amount)).toLocaleString('en-US', {style:'currency', currency:'USD'});
    //         console.log(`${shopper.name} has a bill of ${shopper.amount}, and did not receive a discount.\n${shopper.name} will have to spend ${remaining} to receive a 12% discount`)
    //     }
    // })

    console.log('================================================');

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

    console.log('================================================');
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

    // let oneConsoleLog='';
    // books.forEach((book, index)=>{
    //     let bookNumber = index + 1;
    //     let fullName = `${book.author.firstName} ${book.author.lastName}`
    //     let message = `Book # ${bookNumber} \nTitle: ${book.title} \nAuthor: ${fullName} \n--\n`
    //     oneConsoleLog += message;
    // })
    // console.log(oneConsoleLog);

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
    // let myAuthor ="Jason Merrell";

    const createBook = (title, author) => {
        let authorArray = author.split(' '); //['Jason','Merrell']
        let bookObject = {
            title: title,
            author:{
                firstname: authorArray[0],
                lastname: authorArray[1],
            }
        }
        return bookObject;
    }

    // let jasonsBook = createBook("Coding Is For Awesome People", "Jason Merrell")


    // console.log(jasonsBook);

    // console.log(createBook("It", "Stephen","King"))


    console.log('================================================');


    let books2 = [
        createBook("Felicia's Journey","William Trevor"),
        createBook("The Artamonov Business ","Maxim Gorky"),
        createBook("American Spy","Lauren Wilkinson"),
        createBook("Shuggie Bain","Douglas Stuart"),
        createBook("The Immortalists","Chloe Benjamin ")
    ];

    console.log(books2);

    console.log('================================================');


    const showBookInfo = (book, index) =>{
        let bookNumber = index + 1;
            let fullName = `${book.author.firstName} ${book.author.lastName}`
            let message = `Book # ${bookNumber} \nTitle: ${book.title} \nAuthor: ${fullName} \n--\n`
            console.log(message)
    }

    books2.forEach((book, index)=>{
        showBookInfo(book,index)
    });

})();
