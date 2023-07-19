var ordi = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordi.length; ++i) {
    if (ordi[i] == 1) {
        console.log(ordi[i] + 'st');
    }
    else if (ordi[i] == 2) {
        console.log(ordi[i] + 'nd');
    }
    else if (ordi[i] == 3) {
        console.log(ordi[i] + 'rd');
    }
    else if (ordi[i] > 3 && ordi[i] <= 9) {
        console.log(ordi[i] + 'th');
    }
}
