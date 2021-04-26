var arr = [1, 5, 6, 2, 4];

for (i = 0, size = arr.length; i < size / 2; i++) {
    var item = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = item;
    
}

console.log(arr, 'Перевернутый массив');