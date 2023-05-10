"use strict";


    let numbers = [3, 27, 400, 1, 111, 5];




    console.log(numbers);



    numbers.sort()

    console.log(numbers);


    function compareAscendingNumber(a, b) {
        if (a < b) return -1; // right order
        else if (a == b) return 0; // same values
        else return 1; // swap, wrong order
    }
    //primitive
    //library and helper functions that can help 


    numbers.sort(compareAscendingNumber);


    console.log(numbers);

    numbers.sort(function (a, b) {
        if (a > b) return -1; // right order
        else if (a == b) return 0;
        else return 1; // swap, wrong order
    });



    console.log(numbers);
