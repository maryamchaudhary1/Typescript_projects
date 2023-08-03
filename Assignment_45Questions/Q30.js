var user = [];
if (user.length = 0) {
    console.log('we need to find some user');
}
else {
    for (var i = 0; i < user.length; i++) {
        if (user[i] == 'Admin') {
            console.log('Hello admin would you to see status report');
        }
        else {
            console.log('Hello $(user[i]), thankyou for loggin in');
        }
    }
}
