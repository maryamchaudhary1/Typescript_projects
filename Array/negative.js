"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list = [1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, 18, 20];
var number = function (element) {
    return element < 0;
};
var negativenumber = list.filter(number);
console.log(negativenumber);
var sum = 0;
negativenumber.forEach(function (n) { sum += n; });
console.log(sum);
