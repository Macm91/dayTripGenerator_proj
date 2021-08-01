"use strict";
//array & function for location. Location chosen. 
let arrLocations = ["Fishkill","Monroe", "New York City", "Princeton"];


function randomizerLocation(anArray){
    let decimalNum = Math.random()* anArray.length;
    let wholeNum = Math.floor(decimalNum);
    return anArray[wholeNum];
}


let randomLocation = randomizerLocation (arrLocations);
console.log (randomLocation)

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
console.log (arrWhichRestList);

function randomizerRestaurant(location){
    let decimalNum = Math.random()*location.length;
    let wholeNum=Math.floor(decimalNum);
    return location[wholeNum];
}

let randomRestaurant = randomizerRestaurant (arrWhichRestList);
console.log (randomRestaurant);

//random transportation generator. list, function & function called.

let arrTransport = ["car", "bike", "uber"]

function transportation (type){
    let randomIndexDecimal= Math.random() * type.length;
    let randomIndexWholeNum= Math.floor(randomIndexDecimal);
    return type[randomIndexWholeNum];
}

let resultRandomTransportation = transportation(arrTransport);
console.log (resultRandomTransportation);


//Entertainment function, location array of entertainment. function called/ent randomly chosen. 

function locationEntertainment (location){
    location = randomLocation
    let arrEntNYC = ["broadway", "bar crawl", "central park", " carraige ride"];
    let arrEntMonroe =["Target", "Woodbury Commons", "Bear Mountain Zoo", "Starbucks"];
    let arrEntFishkill =["Playground", "Duck Pond", "Ice Cream Parlor", "Train Station"];
    let arrEntPrinceton =[ "University Tour", "Hiking","BBQ","Playground"];
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

let yourLocationEnt = locationEntertainment(randomLocation);
console.log (yourLocationEnt);

function genEntertainment (location){
     let decIndex = Math.random()*location.length;
     let wholeIndex = Math.floor(decIndex);   
    return location[wholeIndex];
}

let yourEntertainment = genEntertainment(yourLocationEnt);
console.log (yourEntertainment);

// function to print entire trip to console. 
function tripInfo (){
console.log ("Location:"+ randomLocation);
console.log ("Restaurant:"+ randomRestaurant);
console.log ("Transportation:"+ resultRandomTransportation);
console.log ("Entertainment:"+ yourEntertainment);
}

console.log (tripInfo);

//I want a function that prompts user to ask if theyre happy with their choice.
//       if yes, function to show entire trip & console.log

//I want a function to rechoose a section. 

let questionChange = prompt ("Congratulations! You will be going to " + randomLocation+ " for your trip." + " You will be dining at "+ randomRestaurant+ " ."+ " You will be using "+ resultRandomTransportation+ " to get around. "+ "While in "+randomLocation+" you will be enjoying " + yourEntertainment +". Are you happy with your trip? Enter yes or no.");
//if (questionOfChange = "yes"){
    //print trip details to console
// }
// else if (questionOfChange = "no"){
    //choose from buttons whic part they want to choose 
// }

