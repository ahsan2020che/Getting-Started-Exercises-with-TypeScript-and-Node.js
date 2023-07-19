"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mak_shirt(a, b) {
    if (b === void 0) { b = 'medium'; }
    return console.log("The size of the shirt is \"".concat(b, "\" and \"").concat(a, "\" will be printed on the front of the shirt"));
}
mak_shirt('"I love typescript"');
mak_shirt('"I love typescript"', '"large"');
mak_shirt('"I love Pakistan"', '"medium"');
