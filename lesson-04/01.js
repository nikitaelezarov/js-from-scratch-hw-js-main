/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

function includesElement(array, element) {
    let newElement = []
    // Проходим по всем элементам массива с помощью цикла for
    for (let i = 0; i < array.length; i++) {
        // Сравниваем текущий элемент массива с искомым элементом
        if (array[i] === element) {
            // Если нашли совпадение, сразу возвращаем true
            newElement.push(array[i]);
            return true
        }
    }
    return false
}

console.log(includesElement([1, 2, 3], 2)); // true
console.log(includesElement([1, 2, 3], 4)); // false

// Строки
console.log(includesElement(['a', 'b', 'c'], 'b')); // true
console.log(includesElement(['a', 'b', 'c'], 'd')); // false

// Разные типы данных
console.log(includesElement([1, '2', true, null], '2')); // true
console.log(includesElement([1, '2', true, null], 2)); // false (разные типы)

// Пустой массив
console.log(includesElement([], 1)); // false

