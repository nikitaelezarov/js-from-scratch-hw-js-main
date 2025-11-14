/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/
// const filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
// const filtered = filterArray.filter((element,index) =>{
//     return element % 2 !== 0 && element >= 5;
// })
// console.log(filtered);
//
//
// // const filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// // const filtered = [];
// //
// // for (let i = 0; i < filterArray.length; i++) {
// //     if (filterArray[i] % 2 !== 0 && filterArray[i] >= 5) {
// //         filtered.push(filterArray[i]);
// //     }
// // }
// //
// // console.log(filtered); // [5, 7, 9, 11, 13, 15, 17, 19]
function filter(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        // Вызываем callback для каждого элемента
        // Если callback возвращает true, добавляем элемент в результат
        if (callback(array[i], i)) {
            result.push(array[i]);
        }
    }

    return result;
}