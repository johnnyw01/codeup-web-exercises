// console.log("Connected!");

// Exercise 2:

const showMultiplicationTable = (num) => {
    for(let i = 1; i <= 10 ; i ++){
        let result;
        result = i * num;
        console.log(`${num} * ${i} = ${result}`);
    }
}
showMultiplicationTable(7)
// showMultiplicationTable(2)
// showMultiplicationTable(9)


// Exercise 3:

const randomInteger = () => {
    for (let i = 1; i <= 10; i++) {
        let count = 0;
        let randInt = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
        for (let j = 1; j < randInt; j++) {
            count++;
        }
        if (count % 2 === 0) {
            console.log(count + " is even.")
        }else if(count % 2 === 1){
            console.log(count + " is odd.")
        }
    }
}
randomInteger();


//Exercise 4:

const pyramidLoopOutput = () => {
    let numOfRows = 9;
    let num = "";
    for (let i = 1; i <= numOfRows; i++){
        for(let j = 1; j <= i; j++){
            num += i ;
        }
        num += "\n";
    }
    console.log(num)
}

pyramidLoopOutput();


//Exercise 5:

const decrementByFive = () => {
    for(let i = 100; i >= 5; i-=5){
        console.log(i)
    }
}

decrementByFive();

