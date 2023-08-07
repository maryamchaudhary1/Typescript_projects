"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list = [1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, 18, 20];
var isEven = function (list) {
    return list % 2 == 0;
};
var evennumber = list.filter(isEven);
console.log(evennumber);
