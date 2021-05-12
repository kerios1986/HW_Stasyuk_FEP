
var counRow = +prompt('Введите размерность масива');;
var countColum = counRow;
var mass = new Array(counRow);

for(var i = 0; i < counRow; i++) {
    mass[i] = new Array(counRow);
    for(var j = 0, row = mass[i]; j < countColum; j++){
        mass[i][j] = Math.round(Math.random() * 10);
    }
}

console.log(mass, 'Случайный массив');

var maxRowIndex = 0;
var minRowIndex = 0;

var maxSum = 0;
var minSum = 0;

for(var k = 0; k < mass.length; k++) {
    for(var f = 0, sum = 0; f < mass[0].length; f++) {

        sum += mass[f][k];
    }

    if (k === 0) {
        maxSum = sum;
        minSum = sum;
    }

    if (sum >= maxSum) {
        maxSum = sum;
        maxRowIndex = k;
    }

    if (sum <= minSum) {
        minSum = sum;
        minRowIndex = k;
    }  

    console.log('Колонка = ', k, 'Сумма =', sum);
}

console.log('Колонка, где сумма элементов наименьшая -> ', minRowIndex);
console.log('Колонка, где сумма элементов найбольшая -> ', maxRowIndex);