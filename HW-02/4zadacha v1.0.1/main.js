a = prompt('Введите значение');

if (+a == '' || isNaN(a)) {
    document.write('Данное значение не число');

} else {
    document.write('Данное значение число');

}