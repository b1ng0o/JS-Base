'use strict';

function getNumber(num) {
    if (999 < num < 0 || !Number.isInteger(num)) {
        console.log('Число должно быть целым в диапозоне от 0 до 999')
        return {}
    }
    return {
        hundreds: Math.floor(num / 100),
        tens: Math.floor(num / 10) % 10,
        units: num % 10
    }
}

console.log(getNumber(543));
console.log(getNumber(543.6));