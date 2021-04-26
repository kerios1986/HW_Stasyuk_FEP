var arr = [];
n = +prompt('Введите размерность масива');

for (i = 0, size = n; i < size; i++ ) {
    a = prompt('Введите значение');
    
    if (a > 0 && a && !isNaN(a)) {
        arr[i] = a;

    } else {
        alert('Вы ввели не число или отрицательное число');
        i = i - 1;
    }
}

console.log(arr);