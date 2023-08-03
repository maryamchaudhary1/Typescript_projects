"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magicians = ['tom', 'jerry', 'bhoot'];
function show_magicians(magician) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1);
    }
}
function make_great(magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] += "The greate";
    }
}
make_great(magicians);
show_magicians(magicians);
console.log(magicians);
