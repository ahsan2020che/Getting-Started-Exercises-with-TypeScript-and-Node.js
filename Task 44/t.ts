import PromptSync=require('prompt-sync')
const prompt=PromptSync()

function sandwhich(a:number,b:string[]){
      let g:string='you ordered a sandwhich with following items '

for(let i=0;i<b.length;++i){
      if(b[i]!=b[b.length-1]){
         g=`${g}${b[i]},`
      }
      else {g=`${g} and ${b[i]}.`}
}   
return console.log(g);
}
for(let i=0;i<3;++i){
      let number_items=Number(prompt('How mny items you want on you sandwhich='))
      let items:string[]=[]
for(let j=0;j<number_items;++j){
   items[j]=prompt('Enter the item you like to be in sandwhich:')
  
}
sandwhich(number_items,items)
}

