"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var name = prompt("Please Enter your name:");
function titlecase(a) {
    var b = a.toLowerCase().split(' ');
    var i = 0;
    for (i = 0; i < b.length; ++i) {
        b[i] = b[i].charAt(0).toUpperCase() + b[i].slice(1).toLowerCase();
    }
    return b.join(' ');
}
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(titlecase(name));
