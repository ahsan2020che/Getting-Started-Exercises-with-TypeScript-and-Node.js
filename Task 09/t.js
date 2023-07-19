"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var b = 17;
var i = 0;
for (i = 0; i < 2; ++i) {
    var a = Number(prompt('Please Enter the Number:'));
    if (a == b) {
        console.log('You Guess the Number Correctly');
    }
    else
        console.log('You guess the number wrongly');
}
