"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magician_nam = ['David Seth Kotkin', 'Harry Houdini', 'David Blaine', 'Dynamo'];
function make_great(name) {
    var u = [];
    for (var j = 0; j < name.length; ++j) {
        u[j] = "".concat(name[j], ",The Great");
    }
    return u;
}
function show_magicians(name) {
    for (var i = 0; i < name.length; ++i) {
        console.log(name[i]);
    }
}
var new_array = make_great(magician_nam);
show_magicians(new_array);
show_magicians(magician_nam);
