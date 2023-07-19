"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var alien_colour = prompt('Please enter the colour of Alien from green, yellow aand red=');
if (alien_colour == "green") {
    console.log('You just earned 5 points.');
}
else if (alien_colour == 'yellow') {
    console.log('You just earned 10 points.');
}
else if (alien_colour == 'red') {
    console.log('You just earned 15 points.');
}
else {
    console.log('Nil');
}
