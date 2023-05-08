"use strict";

let label = {
    name: "Pursalane Faye",
    address: "121 Main Street",
    city: "Candyland",
    state: "Florida",
    zip: 45632
};

console.log(label);


function printContact(label) {
    console.log(label.name);
    console.log(label.address);
    console.log(label.city + " , " + label.state + " " +label.zip);


}
let myInfo2 = {
    name: "Pursalane Faye",
    address: "121 Main Street",
    city: "Benbrook",
    state: "Texas",
    zip: 76126

   
};
let myInfo3 = {
    name: "Kasity Faye",
    address: "563 Main Street",
    city: "Candyland",
    state: "Florida",
    zip: 45612,

};


printContact(label);
printContact(myInfo2);
printContact(myInfo3);