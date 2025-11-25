/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
]
//создание счётчика с первой картинки то есть индекс текущего изображения
let currentImageIndex = 0;
// Находим элементы
const webTechImage = document.getElementById('web-tech-image')
const prevButton = document.getElementById('prev-button')
const nextButton = document.getElementById('next-button')
// Добавляем обработчики событий
prevButton.addEventListener('click', prevImage)//к кнопке назад по клику
nextButton.addEventListener('click', nextImage)//к кнопке вперед по клику
// Функция обновления изображения
function updateImage() {
    webTechImage.src = WEB_TECH_IMAGES[currentImageIndex]
}

// Функция для следующего изображения
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % WEB_TECH_IMAGES.length
    updateImage()
}

// Функция для предыдущего изображения
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + WEB_TECH_IMAGES.length) % WEB_TECH_IMAGES.length
    updateImage()
}
// Инициализация - показываем первое изображение при загрузке страницы
updateImage()


// //Решение другим способом!!!
// nextButton.addEventListener('click', ()=> {
//     currentImageIndex++;
//     if (currentImageIndex >= WEB_TECH_IMAGES.length) {
//         currentImageIndex = 0;
//     }
//     updateImage()
// })
// prevButton.addEventListener('click', ()=> {
//     currentImageIndex--;
//     if (currentImageIndex < 0){
//         currentImageIndex = WEB_TECH_IMAGES.length - 1;
//     }
//     updateImage()
// })

// // Как найти?
//
// // С чем работать? Какие свойства за что отвечают и какие методы что позволяют делать?
//
//
// // Как найти? => document
// // По какому критерию будем искать?
//
// // Поиск элемента DOM дерева
// // по id (!!!)
// const title = document.getElementById("course-title")
//
// // по тэгу (возвращает "псевдомассив") (HTMLCollection (динамическая))
// const listItems = document.getElementsByTagName("li")
//
// // по селектору (возвращает "псевдомассив")  (NodeList (статичный))
// const lessons = document.querySelectorAll(".item")
//
// // по селектору (возвращает один эемент(первый))
// const currentLesson = document.querySelector(".lesson-list .current")
//
// // Созданеие элемента
// const newLesson = document.createElement("li")
//
// // Добавление элемента на страницу
// const list = document.querySelector(".lesson-list")
// list.append(newLesson)
// list.prepend(newLesson)
//
// //Изменения элементов
// // Текстовое содержимое
// // новый текст textContent
// newLesson.textContent = "Новый урок"
//
// // поменять текст textContent
// newLesson.textContent = "Совсем новый урок"
//
// // Созданеие элемента с помощью HTML
// // innerHTML для добавления HTML
// const btnText = "Add lesson"
// document.body.innerHTML = document.body.innerHTML + `
//     <div>
//         <button id="add-btn" class="button">${btnText}</button>
//     </div>
// `
// // innerHTML для добавления текста
// const currentTitle = document.getElementById("course-title")
// currentTitle.innerHTML = "InnerHTML для добавления текста"
//
//
// //Изменение внешнего вида элемента
// // точечно
// currentTitle.style.backgroundColor = "green"
// currentTitle.style.fontSize = "50px"
//
// // через классы
// const currentNewLesson = document.querySelector(".lesson-list").children[0]
// currentNewLesson.classList.add("item")
// currentNewLesson.classList.remove("item")
//
// const button = document.getElementById("color-button")
// button.addEventListener("click", function () {
//     const img = document.createElement("img")
//     img.setAttribute("src", "https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg")
//     img.setAttribute("alt", "Картинка")
//     img.setAttribute("id", "qwer")
//     img.style.width = "200px"
//     document.body.append(img)
//     img.addEventListener("click", function(){
//         img.remove()
//     })
// })
