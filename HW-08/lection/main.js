function counter() {
    var i = 0;
    // LE-counter = { i: 0, scope: window}
    //  console.log(++i);
     function g() {
    // LE-anonyme = {scope: LE-counter }

        console.log(++i, 'i');
    }

    g();
    g();
}

var interate =  counter();
// counter = null; 
// counter();
// counter();
// counter();
console.log(interate, 'interate');


interate();
interate();
interate();
interate();
interate();