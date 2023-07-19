let frnds = ['Hasnat','Waleed',"Haris"]
for (let k=0;k<frnds.length;++k){
console.log('Hello '+frnds[k]+',You are invited for dinner at Monal Restrauant.')
}
console.log('\t')
console.log(frnds[0]+' said, He will not be abled to attend.\n');  
frnds.splice(0,1,'Osama')
for (let k=0;k<frnds.length;++k){
console.log('Hello '+frnds[k]+',You are invited for dinner at Monal Restrauant.')
}
