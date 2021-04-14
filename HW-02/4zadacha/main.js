a = prompt('Введите значение');

if (a == '') {
    document.write('Вы ничего не ввели');

} else if (a == +a ) {
    document.write('Данное значение число');

} else {
    document.write('Данное значение не число');
}