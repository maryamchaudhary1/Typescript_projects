var Names1 = ["Mryam", "Saba", "Muskan", "Isha"];
for (var i = 0; i < Names1.length; i++) {
    console.log("Good morning", Names1[i] + ".", "i would like to invite you make a dinner on july 15, 2023.");
}
console.log("isha could not make a dinner she is buy.");
Names1[3] = "Maham";
for (var i = 0; i < Names1.length; i++) {
    console.log("good morning", Names1[i] + ".", "i would like to invite you to make a dinner on july 15, 2023");
}
console.log("Hello.it is inform that we have found a bigger table for dinner we will adding more guest.");
console.log("we will invite Ali, Haider, and zara to the dinner");
Names1.unshift("Ali");
Names1.splice(2, 0, "Haider");
Names1.push("zara");
for (var i = 0; i < Names1.length; i++) {
    console.log("Good morning", Names1[i] + ".", "i would like to invite you make a dinner on july 15, 2023.");
}
