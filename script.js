"use strict";
let arrAnArray = ["random","things", "I", "think"];

function randomizer (anArray){
    let decimalNum = Math.random()* anArray.length;
    let wholeNum = Math.floor(decimalNum);
    return anArray[wholeNum];
}

let randomAnswerOfArray = randomizer (arrAnArray);
console.log (randomAnswerOfArray);
