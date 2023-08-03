"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animals = ["dog", "cat", "horse"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animals);
}
for (var i = 0; i < animals.length; i++) {
    if (animals[i] === "dog") {
        console.log("A dog is great for security");
    }
    else if (animals[i] === "cat") {
        console.log("A cat is petful.");
    }
    else if (animals[i] === "horse") {
        console.log("A horse is powerful ");
    }
}
