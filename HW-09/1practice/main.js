var list = [];

list.myPush = function() {
    console.log(this, 'thist');

    this[this.length] = arguments;

}

list.myPush(15, 14);

console.log(list);

// obj = {
//     m1: function() {
//         console.log ('m1');
//         return this;
//     },

//     m2: function() {
//         console.log ('m2');
//         return this;
//     },

//     m3: function() {
//         console.log ('m3');
//         return this;
//     }
// }