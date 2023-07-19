"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var favourite_fruit = ['banana', 'apple', 'orange'];
for (var i = 0; i < 5; ++i) {
    var com = prompt('Please eneter the name of fruit:');
    if (favourite_fruit.includes(com)) {
        console.log('You like ', com);
    }
}
