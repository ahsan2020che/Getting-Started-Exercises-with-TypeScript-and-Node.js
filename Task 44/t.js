"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function sandwhich(a, b) {
    var g = 'you ordered a sandwhich with following items ';
    for (var i = 0; i < b.length; ++i) {
        if (b[i] != b[b.length - 1]) {
            g = "".concat(g).concat(b[i], ",");
        }
        else {
            g = "".concat(g, " and ").concat(b[i], ".");
        }
    }
    return console.log(g);
}
for (var i = 0; i < 3; ++i) {
    var number_items = Number(prompt('How mny items you want on you sandwhich='));
    var items = [];
    for (var j = 0; j < number_items; ++j) {
        items[j] = prompt('Enter the item you like to be in sandwhich:');
    }
    sandwhich(number_items, items);
}
