var city = ['karachi', 'Islamabad', 'Dehli'];
function describe_cities(City, country) {
    if (country === void 0) { country = 'Pakistan'; }
    return console.log("".concat(City, " is in ").concat(country));
}
for (var i = 0; i < city.length; ++i) {
    if (city[i] == 'karachi' || city[i] == 'Islamabad') {
        describe_cities(city[i]);
    }
    else if (city[i] == 'Dehli') {
        console.log("".concat(city[i], " is not in Pakistan"));
    }
}
