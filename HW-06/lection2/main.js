var obj1 = {
     x: 10,
     y: 20
};

var obj2 = {
    z: 30       
};


function assignObjects(obj1, obj2) {
    var newObj = {};

    for(var key in obj1) {
        console.log(key, 'key');

        newObj[key] = obj1[key];
    }

    for(var key in obj2) {
        console.log(key, 'key');

        newObj[key] = obj2[key];
    }

    return newObj;
}

var fff = assignObjects(obj1, obj2);
console.log(fff);