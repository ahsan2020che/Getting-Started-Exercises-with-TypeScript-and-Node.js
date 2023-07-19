var nam = ['karachi', 'Islamabad', 'Lahore'];
var country = "Pakistan";
function city_country(City, country) {
    return console.log("\"".concat(City, ",").concat(country, "\""));
}
for (var i = 0; i < nam.length; ++i) {
    city_country(nam[i], country);
}
