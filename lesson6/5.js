/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение

const reduce = function (arr, callBack, accum) {
    let start = 0;

    if (!Array.isArray(arr)) throw new Error('First argument is not a array');
    if (typeof callBack !== "function") throw new Error('Second argument is not a function');
    if (typeof accum === "undefined") {
        let accum = arr[0];
        start = 1;
    }
    for (let i = start; i < arr.length; i++) {
        accum = callBack(accum, arr[i], i, arr);
    }

    return accum;
}

const result = reduce(
    array,
    (accumulator, element, index, arrayRef) => {
        console.log(`${index}:`, accumulator, element, arrayRef);

        return accumulator + element;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;
