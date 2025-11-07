/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
    resources: {
        gold: 250,
        lumber: 100,
    },
    addResource(resource, amount) {
        // Проверяем, существует ли такой ресурс
        if (!(resource in this.resources)) {
            console.log("Invalid resource")
            return;
        }else{
            // Добавляем указанное количество к ресурсу
            this.resources[resource] += amount;
            console.log(`добавлено ${amount} ${resource}. новое amount: ${this.resources[resource]}`);
        }
    }
}
// // Добавляем новые свойства в объект resources
// game.resources.stone = 75
// game.resources.food = 25
// console.log(game.resources);
// // Используем метод addResource
// game.addResource("gold", 50)
// game.addResource("lumber", 25)
// console.log(game.resources);
// // Используем отрицательное значение
// game.addResource("food", -5)
// console.log(game.resources.food);
console.log(game.resources);

