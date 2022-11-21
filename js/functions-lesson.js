(() => {
    "use strict";
    // let userName = prompt("Please enter your name:");

    const myFunction = (name) => {
        return "Thank You, " + name + ". You ran myFunction!";
    };

    // let message = myFunction(userName);
    let message = myFunction("Johnny");
    //
    // console.log(message);
    //
    // const fight = (person1, person2) => {
    //     console.log(person1 + " punched " + person2 + " right in the kisser.");
    // };
    //
    // fight("Billy", "Bob");

    const userNumber = () => {
        for (let i = 0; i < 5; i++) {
            const isEven = (num) => {
                let number = num;
                let answer = num % 2 === 0;
                return (answer);
            };
            let enteredNumber = prompt("Enter a different number five times to see if it is an even number:");
            alert(isEven(enteredNumber));
            console.log(enteredNumber, isEven(enteredNumber));
        }
    };

    userNumber();


})();


