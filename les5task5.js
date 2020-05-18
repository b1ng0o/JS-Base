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

/**
 * 
 * @param {Number} arg1
 * @param {Number} arg2
 * @param {string} operation
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return add(arg1, arg2);
        case "-":
            return sub(arg1, arg2);
        case "/":
            return div(arg1, arg2);
        case "*":
            return mult(arg1, arg2);
        default:
            throw new Error("Введеной Вами операции не существует")
    };
};


console.log(mathOperation(4, 6, "+"));
console.log(mathOperation(4, 6, "-"));
console.log(mathOperation(4, 6, "*"));
console.log(mathOperation(4, 6, "/"));
console.log(mathOperation(4, 6, "+7+"));