/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
    // Проверяем, что входное значение - строка
    if (typeof str !== 'string') {
        return false;
    }
    // Убираем пробелы с начала и конца
    const trimmedStr = str.trim();
    // Проверяем, что строка не пустая
    if (trimmedStr === '') {
        return false;
    }
    // Пробуем преобразовать строку в число
    let num = Number(trimmedStr);
    // Проверяем, что преобразование было успешным:
    // 1. Это не NaN (isNaN проверяет, является ли значение NaN)
    // 2. Это конечное число (isFinite исключает Infinity и -Infinity)
    // 3. Преобразованное число, преобразованное обратно в строку, совпадает с исходной строкой
    //    (это исключает случаи вроде "123abc" → 123)
    // 4. Для чисел в научной нотации делаем более гибкую проверку
    if (!isNaN(num) && isFinite(num)) {
        // Основная строгая проверка
        if (String(num) === trimmedStr) {
            return true;
        }

        // Для научной нотации: сравниваем числовые значения
        // Например: '1.23e4' → 12300 → '12300'
        // Но также '1.23e4' может преобразоваться в '1.23e4'
        const numStr = String(num);

        // Проверяем, совпадают ли числовые значения
        if (Number(numStr) === Number(trimmedStr)) {
            return true;
        }

        // Проверяем научную нотацию без плюса
        // '1.23e+4' → '1.23e4'
        const normalizedOriginal = trimmedStr.toLowerCase().replace('e+', 'e');
        const normalizedNum = numStr.toLowerCase().replace('e+', 'e');

        if (normalizedOriginal === normalizedNum) {
            return true;
        }
    }
    return false;

}

console.log(isNumeric("123")) // Ожидаемый результат: true
console.log(isNumeric("12.3")) // Ожидаемый результат: true
console.log(isNumeric("123abc")) // Ожидаемый результат: false
console.log(isNumeric("abc")) // Ожидаемый результат: false
console.log(isNumeric(" ")) // Ожидаемый результат: false
console.log(isNumeric("1.23e4"))//ожидаемый результат true
