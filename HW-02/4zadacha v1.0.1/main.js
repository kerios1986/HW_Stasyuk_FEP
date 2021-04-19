a = prompt('Введите значение');

if (a === '0') {
    document.write('Данное значение число');

} else if (+a == '' || isNaN(a)) {
    document.write('Данное значение не число');

} else {
    document.write('Данное значение число');

}