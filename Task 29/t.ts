import PromptSync= require('prompt-sync');
const prompt = PromptSync();
let favourite_fruit=['banana','apple','orange']
for(let i=0;i<5;++i){
    let com =prompt('Please eneter the name of fruit:')
    if(favourite_fruit.includes(com)){
        console.log('You like ',com)}
}






