
function initSlider(size) {
    
    initSlider.prototype.plus = function() {
        return ++size;
    }

    initSlider.prototype.minus = function() {
        return --size;
    }
}

var slider =  new initSlider(2);

console.log(slider.plus(), 'plus');
console.log(slider.plus(), 'plus');
console.log(slider.plus(), 'plus');
console.log(slider.minus(), 'minus');
console.log(slider.minus(), 'minus');
console.log(slider.minus(), 'minus');    