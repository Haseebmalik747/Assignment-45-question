"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (let number of numbers) {
    // Use if-else chain to determine the proper ordinal ending
    let ordinalEnding;
    if (number === 1) {
        ordinalEnding = 'st';
    }
    else if (number === 2) {
        ordinalEnding = 'nd';
    }
    else if (number === 3) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = 'th';
    }
    // Print the result
    console.log(`${number}${ordinalEnding}`);
}
