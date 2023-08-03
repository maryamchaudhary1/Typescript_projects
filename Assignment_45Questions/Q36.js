"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = ' i love typescript'; }
    console.log("This t shirt ".concat('size', ",").concat('message', " is print on it"));
}
make_shirt('large');
make_shirt('medium');
make_shirt('small', 'you are brave');
