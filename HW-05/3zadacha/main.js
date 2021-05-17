
function doMath(x, znak, y) {

    if (znak == '+') {
        znak = x + y;
        return znak;

    } else if (znak == '-') {
        znak = x - y;
        return znak;

    } else if (znak == '*') {
        znak = x * y;
        return znak;

    } else if (znak == '/') {
        znak = x / y;
        return znak;

    } else if (znak == '%') {
        znak = x % y;
        return znak;

    } else if (znak == '^') {
        znak = x ** y;
        return znak;

    } else {        
        return 'Данное выроженние не доступно';
    }

}

n = doMath(+prompt('Введите число'), prompt('Введите знак (+, -, *, /, %, ^)'), +prompt('Введите число'));
console.log(n);

