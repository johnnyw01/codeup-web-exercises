(function(){
    "use strict";

    let planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    planets.unshift('Sun');
    //Mutation
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    planets.push('Pluto')
    //Mutation
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);
    //Mutation
    planets.shift();
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);
    //Mutation
    planets.pop();
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);

    let earthsLocation= planets.indexOf('Earth');
    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(earthsLocation);

    planets.reverse();
    console.log("Reversing the order of the planets array.");
    console.log(planets);

    planets.sort();
    console.log("Sorting the planets array.");
    console.log(planets);
})();



// let names1 = ["Jack","Jim","John","Jake"]
// for(let i = 0; i < names1.length; i++){
//     console.log(names1[i])
// }
//
// console.log('=========================');
//
// let names2 = ["Joe","Johnny","Aaron", "Fernando","Luke"];
//
// names2.forEach((name)=>{
//     console.log(name);
// })