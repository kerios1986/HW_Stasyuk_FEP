
function fillingMass(arr, size) {
    var arr = arr || [];
    var size = size || 3;

    for (var i = 0; i < size; i++) {
        arr[i] = Math.round(Math.random() * 10);
    }

    return arr;
}

var mass1 = [];
var mass2 = [];

mass1 = fillingMass(mass1, 5);
mass2 = fillingMass(mass2, 5);
console.log(mass1, 'Первый заполненный массив');
console.log(mass2, 'Второй заполненный массив');


function whoLarger(arr1, arr2) {

    var sum1 = 0;
    var sum2 = 0;

    for (var i = 0, size = arr1.length; i < size; i++ ) {
        sum1 += arr1[i];
    }

    for (var j = 0, size = arr2.length; j < size; j++ ) {
        sum2 += arr2[j];
    }

    if (sum1 > sum2) {
        console.log(sum1, "Сумма первого массива больше")
        return arr1;
    } else {
        console.log(sum2, "Сумма второго массива больше")
        return arr2;
    }   

}

summa = whoLarger(mass1, mass2);
console.log(summa);