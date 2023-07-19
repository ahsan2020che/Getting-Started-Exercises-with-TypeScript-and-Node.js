var magician_name = ['David Seth Kotkin', 'Harry Houdini', 'David Blaine', 'Dynamo'];
function make_great(name) {
    for (var i = 0; i < name.length; ++i) {
        console.log("".concat(name[i], ",The Great"));
    }
}
make_great(magician_name);
