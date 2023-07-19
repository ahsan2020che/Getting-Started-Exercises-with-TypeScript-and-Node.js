var usrname = ['admin', 'ahsan', 'hasnat', 'waleed'];
for (var i = 0; i < usrname.length || usrname.length > 0; ++i) {
    if (usrname.length != 0) {
        usrname.pop();
        console.log(usrname);
    }
}
if (usrname.length == 0) {
    console.log('We need to find some users!');
}
