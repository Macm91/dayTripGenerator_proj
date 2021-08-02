"use strict";
//array & function for location. Location chosen. 
let arrLocations = ["Fishkill","Monroe", "New York City", "Princeton"];


function randomizerLocation(anArray){
    let decimalNum = Math.random()* anArray.length;
    let wholeNum = Math.floor(decimalNum);
    return anArray[wholeNum];
}


let randomLocation = randomizerLocation (arrLocations);
console.log ("You will be visiting " + randomLocation +".")


//random transportation generator. list, function & function called.

let arrTransport = ["a car", "a bike", "uber"]

function transportation (type){
    let randomIndexDecimal= Math.random() * type.length;
    let randomIndexWholeNum= Math.floor(randomIndexDecimal);
    return type[randomIndexWholeNum];
}

let resultRandomTransportation = transportation(arrTransport);
console.log ("You will be using " +resultRandomTransportation+ " for transportatiom.");

//restaurant function & array of rest. lists for each location. function called to  randomly generate restaurant. 
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


function randomizerRestaurant(location){
    let decimalNum = Math.random()*location.length;
    let wholeNum=Math.floor(decimalNum);
    return location[wholeNum];
}

let randomRestaurant = randomizerRestaurant (arrWhichRestList);
console.log ("You will be dining at "+randomRestaurant + ".");

//Entertainment function, location array of entertainment. function called/ent randomly chosen. 

function locationEntertainment (location){
    location = randomLocation
    let arrEntNYC = ["broadway", "a bar crawl", "central park", " a carraige ride"];
    let arrEntMonroe =["Target", "Woodbury Commons", "Bear Mountain Zoo", "Starbucks"];
    let arrEntFishkill =["aPlayground", "a Duck Pond", "an Ice Cream Parlor", "a Train Station"];
    let arrEntPrinceton =[ " a University Tour", "a Hike","go to a BBQ"," a Playground"];
    if (location == "Fishkill"){
        return arrEntFishkill;
    }
    if (location == "Monroe"){
        return arrEntMonroe;
    }
    if (location == "New York City"){
        return arrEntNYC;
    }
    if (location== "Princeton"){
        return arrEntPrinceton;
    }
} 
let arrLocationEnt = locationEntertainment(randomLocation);

function genEntertainment (location){
     let decIndex = Math.random()*location.length;
     let wholeIndex = Math.floor(decIndex);   
    return location[wholeIndex];
}
let yourEntertainment = genEntertainment(arrLocationEnt);
console.log ("Your entertainment for the day will be "+yourEntertainment+".");
//
//
//
// function finalCheck(){
let question = prompt ("Congratulations! You will be going to " + randomLocation+ " for your trip." + " You will be dining at "+ randomRestaurant+ " ."+ " You will be using "+ resultRandomTransportation+ " to get around. "+ "While in "+randomLocation+" you will be enjoying " + yourEntertainment +" . Are you happy with your trip? Enter yes or no.");
let text;
if (question == null || question == "" || question == "yes"){
    text= alert ("Please enjoy your trip. ");
}
else 
    text = prompt ("What would you like to change? Options: Location, Restaurant, Transportation, or Entertainment.");

let response;
    if(text == null || text == ""){
        response = alert ("Please enjoy your trip. ")
    }
if (text == "location"){
    location.reload();
 }
else if (text == "restaurant"){
    let restaurant = randomizerRestaurant(arrWhichRestList);
    randomRestaurant = restaurant;
    console.log (randomRestaurant);
    console.log (restaurant);
}
else if (text == "transportation"){
    let newTransport = transportation(arrTransport);
    resultRandomTransportation = newTransport;
    console.log (resultRandomTransportation);
}
else if ( text == "entertainment"){
    let newEntertainment = genEntertainment(arrLocationEnt);
    yourEntertainment = newEntertainment;
    console.log (yourEntertainment);
}
// }

// let lastCheck = finalCheck();
// console.log (lastCheck);
