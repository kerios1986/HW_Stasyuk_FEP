
function fillingMass(arr, size) {
    var arr = arr || [];
    var size = size || 3;

    for (var i = 0; i < size; i++) {
        arr[i] = Math.round(Math.random() * 10);
    }

    console.log(arr, 'Внутренний заполненный массив');
    return arr;
}

var mass = [];

mass = fillingMass(mass, +prompt('Введите размерность масива'));
console.log(mass, 'Заполненный массив');