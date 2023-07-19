var animallist = ['dog', 'cat', 'horse'];
for (var i = 0; i < animallist.length; ++i) {
    console.log(animallist[i]);
}
for (var i = 0; i < animallist.length; ++i) {
    console.log("A ".concat(animallist[i], " could be a great pet.\n"));
}
console.log("A ".concat(animallist[0], ",").concat(animallist[1], " and ").concat(animallist[2], " each have four legs."));
