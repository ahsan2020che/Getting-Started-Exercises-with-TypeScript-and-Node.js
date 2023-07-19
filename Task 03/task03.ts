import promptSync from 'prompt-sync';
const prompt = promptSync();
const name:string = prompt("Please Enter your name:");
function titlecase(a: string){
 let b=a.toLowerCase().split(' ')
var i=0
for(i=0;i<b.length;++i){
    b[i]=b[i].charAt(0).toUpperCase()+b[i].slice(1).toLowerCase()
}
return b.join(' ');
}
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(titlecase(name));


