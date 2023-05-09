"use strict";

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
];


function getLunchCost(lunch) {
    let sum = 0;
    for (let i = 0; i < lunch.length; i++) {
        sum += lunch;
        console.log(sum);
    }
    return sum;
}

let lunchCost = getLunchCost(lunch);
let totalWithTax = lunchCost * 0.08;
let totalWithTip = lunchCost * 0.18;

let tax = 0.08;

console.log(`Tax ${totalWithTax.toFixed(2)}  `);
console.log(`Tax ${tax.toFixed(2)}  `);
console.log(`Total Due ${totalWithTip.toFixed(2)} `); 