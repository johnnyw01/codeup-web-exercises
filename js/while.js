//Exercise 1:

let number;
let i = 0;
while(i <= 15){
    i++;
   number = 2 ** i;
   console.log(number);
}


// Exercise 2:


let needToSell = Math.floor(Math.random() * 50) + 50;
console.log(`I have ${needToSell} cones I need to sell today!`)

do{

    let numberSold = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    if (needToSell < numberSold) {
        if (needToSell < numberSold) {
            console.log(`I cannot sell you ${numberSold} because I only have ${needToSell}`);
        }
    } else {
        console.log(`Sure, I'll sell you ${numberSold} cones.`)
        needToSell -= numberSold;
        if(needToSell !== 0){
            console.log(`I now have ${needToSell} cones I need to sell`);
        }
    }
}
while(needToSell > 0 );

if(needToSell === 0){
    console.log(`Yay! I have ${needToSell} left. I can finally  go home now.`);
}



