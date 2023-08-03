let current_users : string [] = ["Ali","Maryam","Maham","Saba","Muskan"];
let new_users : string [] = ["Ali","Maryam","Asad","Zara","ISha"];
let lower_current_users : string [] = [];
for (let element of current_users) {
    lower_current_users.push(element.toLowerCase());

}
console.log(lower_current_users);

let lower_new_users : string [] = [];
for(let element of new_users ) {
    lower_new_users.push(element.toLowerCase());
}
console.log(lower_new_users);

for(let i = 0; i < new_users.length; i++) {
    if (lower_new_users.includes(lower_new_users[i])) {
        console.log(`The username: ${new_users[i]} already exsist.enter new username`)
    }else {
        console.log(`$ new user[i] is available.`)
    }
}