"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promptsync = require("prompt-sync");
var prompt = Promptsync();
console.log('Please Enter 5 Different Countries:\n');
var list = [];
for (var i = 0; i < 5; ++i) {
    list[i] = prompt('Please Enter Country name;');
}
console.log('You have enetered the following countries:');
for (var i = 0; i < 5; ++i) {
    console.log(list[i]);
}
