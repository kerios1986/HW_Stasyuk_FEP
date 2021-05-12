oneMass = [1, 2, 3, 4, 5, 6, 7,];
console.log(oneMass, 'Одномерный масив');

for (var j = 0, size = oneMass.length, n = 0; j < size; j++) {

    if (j == 0 || j % 2 == 0) {
        n = oneMass[j];
    } else {
        oneMass[j - 1] = oneMass[j];
        oneMass[j] = n;
        n = 0;
    }    
}
   
console.log(oneMass, 'Произведена замена');