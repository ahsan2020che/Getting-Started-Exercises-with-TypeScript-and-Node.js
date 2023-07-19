import PromptSync from 'prompt-sync'
const prompt=PromptSync()
console.log('Please Enter 5 Different Countries:\n')
let list:string[]=[]
for(let i=0;i<5;++i){
list[i] = prompt('Please Enter Country name;')
}
console.log('You have enetered the following countries:');
for(let i=0;i<5;++i){
    console.log(list[i])
    }
