//  1. Найди элемент на странице по его ID и измени его текстовое
//     содержимое на что-то новое;

const mainTitle = document.getElementById('main-title');
mainTitle.innerHTML = 'Cтолицы России';


//  2. Используй JavaScript, чтобы изменить фон и цвет 
//     текста элемента с определенным классом;

const firstitem = document.querySelector('.item');
firstitem.style.color = 'red';
firstitem.style.background = 'yellow';


//  3. Напиши код, который создает новый параграф с текстом 
//     и добавляет его в конец документа;
  

const newParagraph = document.createElement('p');
newParagraph.textContent = 'какой-то короткий текст';
document.body.appendChild(newParagraph);


//  4. Напиши функцию, которая удаляет элемент 
//     с указанным ID из документа;
function removeElementById(elementId) {
    if(!elementId) {
    return console.error("ошибка в id")
    }
    
const elementToRemove = document.getElementById(elementId);
elementToRemove.parentNode.removeChild(elementToRemove);

}
removeElementById('remove-me')

//  5. Измени атрибут ссылки на новый URL 
//     и выведи его значение в консоль;

const link = document.querySelector('a');

link.setAttribute('href', 'https://google.com');
console.log(link.getAttribute('href'));


//  6. Создай новый элемент, добавь к нему класс 
//     и добавь его в DOM;

const newElement = document.createElement('p');

newElement.classList.add('exercise6');
 
document.body.appendChild(newElement);




//  7. Переключи класс у существующего элемента 
//     и проверьте его наличие в консоли.

const replacement = document.getElementById('some-link');

replacement.classList.toggle('replacement');

console.log(replacement);

