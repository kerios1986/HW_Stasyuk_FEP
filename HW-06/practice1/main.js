function inArray(string, arr) {
    
    if (!string || !arr) {
        return 'Вы не задали массив или текст'
    }

    for (var i = 0, size = arr.length; i < size; i++){
        if (string === arr[i]) {
            return true;
        }
    }
    
    return false;
}

string = 'hello';
arr = ['svnj', 'hello', 'cvpoq'];

var test = inArray(string, arr);
console.log(test);



