"use strict";

function parsePartCode(partCode) {

    let partCode = parsePartCode(partCode);

    console.log("Supplier: " + partCode.supplierCode +
    " Product Number: " + partCode.productNumber +
    " Size: " + partCode.size);


}

function getSupplierCode() {

    let acmeSupplier = acme.substring(0, 4);
    let diSupplier = di.substring(0, 2);
    let aceSupplier = ace.substring(0, 3);

    let supplier = (acmeSupplier + ", " + diSupplier + ", " + aceSupplier);

    console.log("Suppliers: " + supplier);

}

getSupplierCode();


function getProductNumber() {


    let acmeNumber= acme.substring(5, 8);
    let diNumber = di.substring(3, 8);
    let aceNumber= ace.substring(4, 5);

    let code = (acmeNumber  + ", " + diNumber+ ", " + aceNumber);

    console.log("Product number: " + code);


}

getProductNumber();


function getSize() {

    let acmeSize = acme.substring(9,10);
    let diSize = di.substring(9,10);
    let aceSize = ace.substring(6,7);

    let size = (acmeSize  + ", " + diSize + " , " + aceSize);

    console.log("Size: " + size);

}

getSize();



function getCodes(){


    let codes = (acme + " , " +  di + " , "  + ace);
    console.log("Codes: " + codes);
}

getCodes();



let acme = "ACME:123-L";
let di = "DI:12345-M";
let ace = "ACE:1-12";