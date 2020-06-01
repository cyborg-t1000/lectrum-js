/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

const f = function (a, b, c) {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
        throw new Error("One of arguments is not a number");
    }

    return (a - b) / c;
}

console.log(f(9, 3, 2)); // 3

exports.f = f;
