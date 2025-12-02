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
    return !isNaN(num) &&
        isFinite(num) &&
        (String(num) === trimmedStr ||
        String(num).replace(/e\+?/, 'e') === trimmed.toLowerCase().replace(/e\+?/, 'e'));
}

console.log(isNumeric("123")) // Ожидаемый результат: true
console.log(isNumeric("12.3")) // Ожидаемый результат: true
console.log(isNumeric("123abc")) // Ожидаемый результат: false
console.log(isNumeric("abc")) // Ожидаемый результат: false
console.log(isNumeric(" ")) // Ожидаемый результат: false
