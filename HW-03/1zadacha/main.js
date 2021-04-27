var arr = [];
arr.length = 10;

for (var i = 0, size = arr.length; i < size; i++) {

    arr[i] = Math.round(Math.random() * 10);

    if (i % 2 !== 0) {
        arr[i] = 0;  
    }
}

console.log(arr);

