a = +prompt('Введите число a');
b = +prompt('Введите число b');
c = +prompt('Введите число c');



if (a > b && a > c) {
    document.write('Число a = ', a, ' максимальное');

} else if (b > c && b > a) {
    document.write('Число b = ', b, ' максимальное');

} else if (c > b && c > a) {
    document.write('Число b = ', c, ' максимальное');

} else {
    document.write('Все числа равны друг другу и одинаковые');
}