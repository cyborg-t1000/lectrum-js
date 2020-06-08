/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

const createArray = function (fill, cnt) {
    if (typeof fill !== 'number' && typeof fill !== 'string' && typeof fill !== 'object' && !Array.isArray(cnt)) throw new Error('First argument is invalid');
    if (typeof cnt !== 'number') throw new Error('Second argument is not a number');

    const result = Array(cnt).fill(fill);

    return result;
}

//const result = createArray('x', 5);

const result = createArray([1,23], 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
