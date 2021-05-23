var mass = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]];

newArr = [];
function arrayFiller(arr) {

    for(var i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {
            arrayFiller(arr[i]);
        } else {          
            newArr[newArr.length] = arr[i];
        }
    } 

    return newArr;
}

var test = arrayFiller(mass);
console.log(test, 'Тест');
