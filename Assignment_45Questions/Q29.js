var user_list = ['Maryam', 'Saba', 'Muskan', 'Isha'];
for (var i = 0; i < user_list.length; i++) {
    if (user_list[i] == 'Admin') {
        console.log('Hello Admin would you like to see a status report');
    }
    else {
        console.log('hello ${uers_list[i]},thank you for logging inagain');
    }
}
