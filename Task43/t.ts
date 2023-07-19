export {}
let magician_nam=['David Seth Kotkin','Harry Houdini','David Blaine','Dynamo']
function make_great(name){
    let u:string[]=[]
    for(let j=0;j<name.length;++j){
        u[j]=`${name[j]},The Great`
}
return u;
}
function show_magicians(name){
    for(let i=0;i<name.length;++i){
      console.log(name[i]);}
}
let new_array=make_great(magician_nam);
show_magicians(new_array);
show_magicians(magician_nam);