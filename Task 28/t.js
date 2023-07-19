"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var age = Number(prompt('Please Enter your age:'));
if (age < 2) {
    console.log('You are baby');
}
else if (age >= 2 && age < 4) {
    console.log('You are toddler');
}
else if (age >= 4 && age < 13) {
    console.log('You are a kid');
}
else if (age >= 13 && age < 20) {
    console.log('You are a teenaget');
}
else if (age >= 20 && age < 65) {
    console.log('You are an adult');
}
else if (age >= 64) {
    console.log('You are an elder');
}
