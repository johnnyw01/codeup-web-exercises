/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

//1. TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'johnny';
const email = 'jwells@gmail.com';
const languages = ['javascript', 'python', 'java'];


//2. TODO: rewrite the object literal using object property shorthand
users.push({
    name,
    email,
    languages
});

// console.log(users);

//3. TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

//4. TODO: rewrite the following using arrow functions
users.forEach((user) => {
    return emails.push(user.email);
});

//5. TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(({name, email, languages}) => {
    // TODO: 6. rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition

    //     const name = user.name;
    //     const email = user.email;
    //     const languages = user.languages;

    // const {name,email, languages} = users
    //***I rewrote the destructuring assignment in the function parameter definition***

    //7. TODO: rewrite the assignment below to use template strings
    let formmatedName = name.charAt(0).toUpperCase() + name.slice(1)
    developers.push(`${formmatedName}'s email is ${email}. ${formmatedName} knows ${languages.join(', ')}.`);
});

//8. TODO: Use `let` for the following variable
let list = '<ul>';

//9. TODO: rewrite the following loop to use a for..of loop
for(let developer of developers){
    //10. TODO: rewrite the assignment below to use template strings
    list +=`
    <li> ${developer} </li>
`;
}

list += '</ul>';

console.log(list)