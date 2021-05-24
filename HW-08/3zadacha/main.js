function initSlider(size) {    
    var i = size;

    initSlider.prototype.reset = function() {
        return size = 0;
    }

    initSlider.prototype.valid = function() {
        if (size == 0) {
            return size = i;
        }

        if (size == i) {
            return size = 0;
        }  
        
        if (size !== 0 || size !== i) {
            return 'Валидация не сработала'
        }
    }

    initSlider.prototype.plus = function() {
        return ++size;
    }

    initSlider.prototype.minus = function() {
        return --size;
    }

}

var size = 3;
var slider =  new initSlider(size);

console.log(slider.minus(), 'minus');
console.log(slider.minus(), 'minus');
console.log(slider.minus(), 'minus');
console.log(slider.valid(), 'valid');

// console.log(slider.reset(), 'reset');

console.log(slider.plus(), 'plus');
console.log(slider.plus(), 'plus');
console.log(slider.plus(), 'plus');
console.log(slider.reset(), 'reset');
console.log(slider.plus(), 'plus');

// console.log(slider.valid(), 'valid');
// console.log(slider.plus(), 'plus');
// console.log(slider.plus(), 'plus');    