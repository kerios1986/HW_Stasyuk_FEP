var arrA = [];
var arrB = [];

n = +prompt('Введите размер массива');

for (var i = 0, size = n; i < size; i++) {
    arrA[i] = Math.round(Math.random() * 99);
     
}

console.log(arrA, 'Рандомный массив');

min = arrA[0], minIndex = 0;
max = arrA[0], maxIndex = 0;

for (var j =0; j < arrA.length; j++) {

    if (arrA[j] < min) {
        min = arrA[j];
        minIndex = j;
    }

    if (arrA[j] > max) {
        max = arrA[j];
        maxIndex = j;
    }
}

if (minIndex < maxIndex) {
    arrB = arrA.slice(minIndex, maxIndex + 1);
} else {
    arrB = arrA.slice(maxIndex, minIndex + 1);
}

console.log(min, 'Минимальное число в массиве');
console.log(max, 'Максимальное число в массиве');
console.log(minIndex, 'Индекс мнимального числа');
console.log(maxIndex, 'Индекс максимального числа');
console.log('-----------------');
console.log(arrB, 'Элементы массива между min -- max');