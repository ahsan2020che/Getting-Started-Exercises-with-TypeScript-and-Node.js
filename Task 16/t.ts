let friend_list = ['Hasnat','Waleed',"Haris"]
for (let k=0;k<friend_list.length;++k){
console.log('Hello '+friend_list[k]+',You are invited for dinner at Monal Restrauant.')
}
console.log('\n')
console.log(friend_list[0]+' said, He will not be abled to attend.\n');  
friend_list.splice(0,1,'Osama')
for (let k=0;k<friend_list.length;++k){
console.log('Hello '+friend_list[k]+',You are invited for dinner at Monal Restrauant.')
}
console.log('\nI have found aa biggger table, so more friends are invited\n')
friend_list.splice(0,0,'Saim')
friend_list.splice(3,0,'Awais')
friend_list.push('Usman')

for (let k=0;k<friend_list.length;++k){
    console.log('Hello '+friend_list[k]+',You are invited for dinner at Monal Restrauant.')}

