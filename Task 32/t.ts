let current_user=['ahsan2020che','waleed123','hasnat131','osama23','saqib21']
let new_user=['saim123','HASNAT131','Waleed123','ahsan2020che','saqib21']
for(let i=0;i<new_user.length;++i){
    if(current_user.includes(new_user[i])){
        console.log("You will need to enter a new username.")}
    else if(!(current_user.includes(new_user[i]))){
        console.log("username is available.")
    }
}