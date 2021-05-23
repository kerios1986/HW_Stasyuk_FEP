function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

var test = factorial(+prompt('Веддите число n!')); 

console.log('Факториал числа n! =', test);