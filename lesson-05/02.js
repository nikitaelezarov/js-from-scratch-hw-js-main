/*
Напишите функцию `updateGallery`, которая будет обновлять информацию о произведениях искусства в виртуальной галерее. Функция должна принимать три параметра:

- объект галереи
- название произведения (ключ)
- новое значение

Если произведение с таким названием уже есть в галерее, его значение должно быть обновлено. Если произведения нет, оно должно быть добавлено в объект галерею.

Пример использования функции:

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch'
}

updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')

console.log(gallery)

Ожидаемый вывод:
{
  'Mona Lisa': 'Leonardo da Vinci, 1503-1506',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
  'The Persistence of Memory': 'Salvador Dali'
}
*/

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
}
console.log("До обновления:", gallery)

function updateGallery(gallery,artworkName,newValue) {
    //обновляем произведение если уже есть// Просто обновляем значение - если ключа нет, он будет создан
    if(artworkName in gallery){
        console.log(`Обновляем существующее произведение: "${artworkName}"`);
        gallery[artworkName] = newValue;
    }else{
        console.log(`Добавляем новое произведение: "${artworkName}"`);
        gallery[artworkName] = newValue;
    }
}
updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')

console.log("После обновления:",gallery)


// function updateGallery(gallery, artworkName, newValue) {
//     // Обновляем значение произведения искусства
//     gallery[artworkName] = newValue;
// }
// updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
// updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')
// console.log("После обновления:",gallery)
