// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
         if (a >= b && a >= c) {
             return a;
         }else if (b >= a && b >= c) {
             return b;
         }else{
             return c;
         }
}

// function findLargest(a, b, c) {
//     return Math.max(a, b, c);
// }

console.log(findLargest(10, 25, 15)); // 25
console.log(findLargest(-5, 0, 5));   // 5
console.log(findLargest(100, 100, 50)); // 100