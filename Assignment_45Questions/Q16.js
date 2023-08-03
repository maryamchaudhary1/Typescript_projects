var Names2 = ["Maryam", "Saba", "Muskan", "Isha"];
for (i = 0; i < Names2.length; i++) {
    console.log("Good morning", Names2[i] + ".", "i would like to invite you make a dinner on july 15, 2023.");
}
console.log("Isha would not make a dinner she is busy.");
Names2[3] = 'Maham';
for (i = 0; i < Names2.length; i++) {
    console.log("Good morning", Names2[i] + ".", "i would like to invite you to make a dinner on july 15, 2023.");
}
console.log("Hello all.it will inform that we will find bigger table for dinner we will be adding more guest.");
console.log("we will invite", "Ali", "Asad", "zara");
Names2.unshift("Ali");
Names2.splice(2, 0, "Asad");
Names2.push("zara");
for (i = 0; i < Names2.length; i++) {
    console.log("Good morning", Names2[i] + ".", "i would like to invite you to make dinner on july 15, 2023.");
}
console.log("sorry guys!the big table that we reserved was cancaled due to unknown reason so we will invited only two guest.");
console.log(Names2[Names2.length - 1], "sorry we could not invite you on dinner due to unavalibiity of table.");
Names2.pop();
console.log(Names2[Names2.length - 1], "sorry we could not invite youon the dinner due to unavalibity of tale.");
Names2.pop();
console.log(Names2[Names2.length - 1], "sorry we could not invite you on dinner due to unavalibity of table.");
Names2.pop();
console.log(Names2[Names2.length - 1], "sorry we could not invite you on dinner due to unavalibilty of table.");
Names2.pop();
console.log(Names2[Names2.length - 1], "sorry we could not invite you on dinner due to unavalibility of table.");
Names2.pop();
console.log(Names2);
for (var i = 0; i < Names2.length; i++) {
    console.log("good moring", Names2[i] + ".", "you are still inviting on dinner.");
}
Names2.pop();
Names2.pop();
console.log(Names2);
