
function sum(n) {
    if (n === 1) {
        return 1;
    }

    console.log(n);
    return sum(n - 1);
}

var result = sum(5);

console.log(result, 'result');



function sum2(n) {
    if (n === 5) {
        return 5;
    }

    console.log(n);
    return sum2(n + 1);
}

var result = sum2(1);

console.log(result, 'result');