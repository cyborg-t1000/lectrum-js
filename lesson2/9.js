// Отсортируйте массив по убыванию.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
// const arr = [1, 2, 3, 4, 5, 6];
// [6,5,4,3,2,1]

////////////////// Решение //////////////////

const arr = [1, 2, 3, 4, 5, 6];

let swapped;
do {
    swapped = false;
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] < arr[j + 1]) {
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
            swapped = true;
        }
    }

} while(swapped);

console.log(arr);