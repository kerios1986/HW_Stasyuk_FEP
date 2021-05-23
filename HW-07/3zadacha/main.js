var obj = { 
    a: 10, 
    b: 12, 
    c: { f: 13 } 
};

var newObj = {};
function convert(obj) {    
  
    for(var key in obj) {

        if (typeof obj[key] === 'object' && obj[key] !== null) {
            convert(obj[key]);
        } else {            
            newObj[key] = obj[key];  
        }
    }

    return newObj;
}

var test = convert(obj);
console.log(test, 'test');
