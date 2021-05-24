
function initSlider(size) {

    initSlider.prototype.plus = function() {

        return ++size;
    }

    initSlider.prototype.minus = function() {

        return --size;
    }

    initSlider.prototype.reset = function() {

        return size = 0;
    }



}

var slider =  new initSlider(2);

console.log(slider.plus(), 'plus');
console.log(slider.plus(), 'plus');
console.log(slider.plus(), 'plus');
console.log(slider.minus(), 'minus');
console.log(slider.minus(), 'minus');
console.log(slider.minus(), 'minus');
console.log(slider.reset(), 'reset');
console.log(slider.plus(), 'plus');
console.log(slider.plus(), 'plus');    