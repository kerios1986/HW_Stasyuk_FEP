var obj1 = {
    x: 10,
    y: 20
};

var obj2 = {
    z: 30       
};

var obj3 = {
    f: 40       
};

var obj4 = {
    r: 50,
    t: 60,
    e: 70       
};


function assignObjects() {

    var newObj = {};
    var copy = {};

    for (var i = 0, size = arguments.length; i < size; i++ ) {
        copy = arguments[i];

        for(var key in copy) {
            console.log(key, 'key');
    
            newObj[key] = copy[key];
        }
    }

    return newObj;
}

var test = assignObjects(obj1, obj2, obj3, obj4);
console.log(test, 'test');