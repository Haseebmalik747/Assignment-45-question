"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(`the Great ${magicians[i]}`);
    }
    return greatMagicians;
}
const magicianNames = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];
showMagicians(makeGreat(magicianNames));
