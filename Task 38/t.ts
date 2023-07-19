let city=['karachi','Islamabad','Dehli']
function describe_cities(City:string,country:string='Pakistan'){
   return console.log(`${City} is in ${country}`);}
    for(let i=0;i<city.length;++i){
        if(city[i]=='karachi' || city[i]=='Islamabad'){
           describe_cities(city[i])
        }
        else if(city[i]=='Dehli'){
            console.log(`${city[i]} is not in Pakistan`)
        }   
    }
