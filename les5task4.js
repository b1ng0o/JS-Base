"use strict";
/**
         * Функция сложения
         * @param {Number} arg1 Число 1
         * @param {Number} arg2 Число 2
         *
         */
function add(arg1, arg2) {
    let result = 0
    result = arg1 + arg2;
    return result;
};
/**
 * Функция вычитания
 * @param {Number} arg1 Число 1
 * @param {Number} arg2 Число 2
 *
 */
function sub(arg1, arg2) {
    let result = 0
    result = arg1 - arg2;
    return result;
};
/**
 * Функция умножения
 * @param {Number} arg1 Число 1
 * @param {Number} arg2 Число 2
 *
 */
function mult(arg1, arg2) {
    let result = 0
    result = arg1 * arg2;
    return result;
};
/**
 * Функция деления
 * @param {Number} arg1 Число 1
 * @param {Number} arg2 Число 2
 *
 */
function div(arg1, arg2) {
    let result = 0
    if (arg2 == 0) {
        return "Делить на ноль нельзя!";
    };
    result = arg1 / arg2;
    return result;
};

console.log(add(3, 4)); // 7
console.log(sub(3, 4)); // -1
console.log(mult(3, 4)); //12
console.log(div(3, 4)); //0.75
console.log(div(3, 0)); //Делить на ноль нельзя!