var current_users = ["Ali", "Maryam", "Maham", "Saba", "Muskan"];
var new_users = ["Ali", "Maryam", "Asad", "Zara", "ISha"];
var lower_current_users = [];
for (var _i = 0, current_users_1 = current_users; _i < current_users_1.length; _i++) {
    var element = current_users_1[_i];
    lower_current_users.push(element.toLowerCase());
}
console.log(lower_current_users);
var lower_new_users = [];
for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
    var element = new_users_1[_a];
    lower_new_users.push(element.toLowerCase());
}
console.log(lower_new_users);
for (var i = 0; i < new_users.length; i++) {
    if (lower_new_users.includes(lower_new_users[i])) {
        console.log("The username: ".concat(new_users[i], " already exsist.enter new username"));
    }
    else {
        console.log("$ new user[i] is available.");
    }
}
