export {}
function mak_shirt(a:string,b:string='medium'){
    return console.log(`The size of the shirt is "${b}" and "${a}" will be printed on the front of the shirt`);
}
mak_shirt('"I love typescript"')
mak_shirt('"I love typescript"','"large"')
mak_shirt('"I love Pakistan"','"medium"')