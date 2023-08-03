"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
function subjects() {
    var prompt = promptSync();
    var marks = prompt("enter your marks");
    var a = parseInt(marks);
    if (marks == 90) {
        return "Grade A";
    }
    else if (marks == 70) {
        return "Grade B";
    }
    else if (marks == 50) {
        return "Grade C";
    }
    else if (marks == 40) {
        return "Grade D";
    }
    else if (marks == 20) {
        return "Grade F";
    }
    else {
        return "Pass";
    }
}
var results = subjects();
console.log(results);
