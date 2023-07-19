var friendlist = ['Hasnat', 'Waleed', "Haris"];
for (var k = 0; k < friendlist.length; ++k) {
    console.log('Hello ' + friendlist[k] + ',You are invited for dinner at Monal Restrauant.');
}
console.log('\n');
console.log(friendlist[0] + ' said, He will not be abled to attend.\n');
friendlist.splice(0, 1, 'Osama');
for (var k = 0; k < friendlist.length; ++k) {
    console.log('Hello ' + friendlist[k] + ',You are invited for dinner at Monal Restrauant.');
}
console.log('\nI have found aa biggger table, so more friends are invited\n');
friendlist.splice(0, 0, 'Saim');
friendlist.splice(3, 0, 'Awais');
friendlist.push('Usman');
for (var k = 0; k < friendlist.length; ++k) {
    console.log('Hello ' + friendlist[k] + ',You are invited for dinner at Monal Restrauant.');
}
console.log('\nSorry Guys, due to table issue only two person will be invited to the dinner\n');
for (var k = 0; k <= friendlist.length; ++k) {
    if (friendlist.length > 2) {
        console.log(friendlist[friendlist.length - 1] + ', I’m sorry you I can’t invite you to dinner');
        friendlist.pop();
    }
    else
        break;
}
console.log('\n');
for (var k = 0; k < friendlist.length; ++k) {
    console.log('Hello ' + friendlist[k] + ',You are invited for dinner at Monal Restrauant.');
}
for (var k = 0; k < friendlist.length; ++k) {
    if (friendlist.length <= 2) {
        friendlist.pop();
    }
    else
        break;
}
console.log("There is no one on the list");
