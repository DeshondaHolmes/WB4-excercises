"use strict ";

//product list 2-23

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },

];

products.sort()

let productsCount = products.length;

for (let i = 0; i < productsCount; i++) {
    console.log(products[i].product);
}
console.log("-------------");

let price = productsCount;
let a = products;
let b = price;
products.sort(function (a, b) {
    if (a.price > b.price) return -1;
    else if (a.price == b.price) return 0;
    else return 1;

});
let numProducts = products.length;
for (let i = 0; i < numProducts; i++) {
    console.log(products[i].product + " $ " + products[i].price.toFixed(2));
}

