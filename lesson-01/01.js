// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0;
const result = 20;
 let count = 1; // создаю счётчик
 while (count <= result) {//пример 1 < 20 цикл начался пока true
     sum += count;// считаю сумму
     count += 1;// считаю счётчик
 }
console.log(sum, count); // вывод суммы и счётчика