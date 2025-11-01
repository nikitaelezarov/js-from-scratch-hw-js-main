/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(array) {
    let uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
        // Используем функцию includesElement для проверки наличия элемента
        if (!includesElement(uniqueArray, array[i])) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}
function includesElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}

console.log(findUniqueElements([1, 2, 3, 2, 1, 4]))//[1, 2, 3, 4]
console.log(findUniqueElements(['a', 'b', 'a', 'c'])); // ['a', 'b', 'c']

// С помощью Set (более современный способ):
// function findUniqueElements(array) {
//     return Array.from(new Set(array));
//     // или: return [...new Set(array)];
// }
// console.log(findUniqueElements([1, 2, 3, 2, 1, 4])); // [1, 2, 3, 4]

// С помощью метода filter:
// function findUniqueElements(array) {
//     return array.filter((element, index) => array.indexOf(element) === index);
// }
// console.log(findUniqueElements([1, 2, 3, 2, 1, 4])); // [1, 2, 3, 4]

// С помощью reduce:
// function findUniqueElements(array) {
//     return array.reduce((unique, item) => {
//         return unique.includes(item) ? unique : [...unique, item];
//     }, []);
// }
// console.log(findUniqueElements([1, 2, 3, 2, 1, 4])); // [1, 2, 3, 4]