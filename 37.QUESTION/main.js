"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the make_shirt function with default values
function make_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`T-Shirt Summary: Size ${size}, Message: "${message}"`);
}
// Call the function to make a large shirt with the default message
make_shirt();
// Call the function to make a medium shirt with the default message
make_shirt('Medium');
// Call the function to make a shirt of any size with a different message
make_shirt('Small', 'TypeScript is awesome!');
