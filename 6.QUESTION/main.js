"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personNameWhiteSpaces = "\t malik abdul haseeb \n";
console.log("Name with Whitespace: `" + personNameWhiteSpaces + "`");
let strippedName = personNameWhiteSpaces.trim();
console.log("Stripped Name: ` " + strippedName + " ` ");