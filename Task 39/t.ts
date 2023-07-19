let nam=['karachi','Islamabad','Lahore']
let country="Pakistan"
function city_country(City:string,country:string){
   return console.log(`"${City},${country}"`);}
    for(let i=0;i<nam.length;++i){
           city_country(nam[i],country)
    }