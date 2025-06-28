"use strict";
let value = 3
let negvalue = -value
console.log(negvalue);
let gamecounter = 100
gamecounter++;
console.log(gamecounter);

let myYoutubename = "mychannel"
let anotherName = myYoutubename
anotherName = "not know"

console.log(anotherName);
console.log(myYoutubename);

let user = {
    email : "usermail@gmail.com"
    uip: "0000.000"
}

//Strings
const name = "John"
const repocupon = 50

console.log(name + repocupon + "Value");

console.log(`Hello my name is ${name} and I have ${repocupon} coupons`);

const GameName = new String("Wasi")
console.log(GameName[0]);

const newstring = GameName.substring(0, 3)
console.log(newstring);

const anotherstring = GameName.slice(0, 3)
console.log(anotherstring);

const url = "https://wahidur20%wahidurrahman"
console.log(url.replace('20%', '-'));
