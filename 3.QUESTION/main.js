"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personName = " maya khurshid";
// console.log("Lowercase: " + personName.toLowerCase())
// console.log("Uppercase: " + personName.toUpperCase())
console.log("TitleCase: " + personName.replace(/\w\S*/g, word => word.charAt(0).toUpperCase() + personName.substr(1).toLowerCase()));
