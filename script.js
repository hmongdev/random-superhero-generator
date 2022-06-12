const superheroes = require('superheroes');
const supervillains = require('supervillains');
const adjArray = require('adjectives');

let mySuperVillain = supervillains.random();
let mySuperHero = superheroes.random();
let yourAdj;

function getSuperVillain() {
    for (let i = 0; i < adjArray.length; i++) {
        let n = ~~(Math.random() * adjArray.length);
        yourAdj = adjArray[n];
    }
    const adjCapitalized = yourAdj.charAt(0).toUpperCase() + yourAdj.slice(1);
    let message = `You are ${mySuperHero}, the ${adjCapitalized} and your archnemsis is ${mySuperVillain}`
    console.log(message);
}

getSuperVillain();