"use strict";
//array of locations 
let arrLocations = ["Fishkill","Monroe", "New York City", "Princeton"];

//make function for location 
function randomizerLocation(anArray){
    let decimalNum = Math.random()* anArray.length;
    let wholeNum = Math.floor(decimalNum);
    return anArray[wholeNum];
}

//verify function for location works
let randomLocation = randomizerLocation (arrLocations);
console.log (randomLocation)


// //I need a function to choose an array of restaurant based on each location 
function locationrestaurantoptions (theLocation){
    theLocation = randomLocation
    let arrFishkillRestaurants = ["Satano", "Jade China", "The Dutchess Biercafe"];
    let arrMonroeRestaurants = ["La Vera Cucina", "Scalia & Co Craft Kitchen& Bar","Mina's Spanish Kitchen"];
    let arrNycRestaurants = ["The Modern", "Frevo", "Farra"];
    let arrPrinctonRestaurants = ["Hoagie Haven", "Elements", "Thai Garden"];
    if (theLocation == "Fishkill"){
        return arrFishkillRestaurants;
    }
    if (theLocation == "Monroe"){
        return arrMonroeRestaurants;
    }
    if (theLocation == "New York City"){
        return arrNycRestaurants;
    }
    if (theLocation== "Princeton"){
        return arrPrinctonRestaurants;
    }
}

let arrWhichRestList = locationrestaurantoptions (randomLocation);
console.log (arrWhichRestList);

function randomizerRestaurant(location){
    let decimalNum = Math.random()*location.length;
    let wholeNum=Math.floor(decimalNum);
    return location[wholeNum];
}

let randomRestaurant = randomizerRestaurant (arrWhichRestList);
console.log (randomRestaurant);

//random transportation generator 

let arrTransport = ["car", "bike", "uber"]

function transportation (type){
    let randomIndexDecimal= Math.random() * type.length;
    let randomIndexWholeNum= Math.floor(randomIndexDecimal);
    return type[randomIndexWholeNum];
}

let resultRandomTransportation = transportation(arrTransport);
console.log (resultRandomTransportation);


//Entertainment 

// let arrEntNYC = ["broadway", "bar crawl", "central park", " carraige ride"];
// let 