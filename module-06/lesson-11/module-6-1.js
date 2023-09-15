//TODO:=========task-01=================
// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

//TODO:===========1===============
const bodyElem =document.body;
console.log(bodyElem);
//TODO:===========2===============
const titleEl = document.querySelector('#title');
console.log(titleEl);
//TODO:============3==============
const listEl = document.querySelector('.list');
console.log(listEl);
//TODO:============4==============
const itemsEl = document.querySelectorAll('[data-topic]');
console.log([itemsEl]);
//TODO:===========5===============
const firstItemEl = document.querySelector('[data-topic]');
console.log(firstItemEl);
//TODO:===========6===============
const lastItemEl = itemsEl[itemsEl.length-1];
console.log(lastItemEl);
//TODO:===========7===============
const firstSibling = titleEl.nextElementSibling;
console.log(firstSibling);
//TODO:===========8===============
const allTitles = document.querySelectorAll('h3');
allTitles.forEach  (li => console.log(li));
//TODO:===========9===============
allTitles.forEach  (li => li.classList.add('active'));
//TODO:===========10===============
const navLiEl = document.querySelector('li[data-topic="navigation"]');
console.log(navLiEl);
//TODO:===========11===============
navLiEl.style.backgroundColor = 'yellow';
//TODO:===========12===============
navLiEl.lastElementChild.textContent = 'Я змінив<span> тут текст</span>';
//TODO:===========13===============
const currentTopic = "manipulation";
const topicEl = document.querySelector(`[data-topic=${currentTopic}]`);
console.log(topicEl);
//TODO:===========14===============
topicEl.style.backgroundColor = `blue`;
//TODO:===========15===============
const completedEl = document.querySelector('.completed');
console.log(completedEl);
//TODO:===========16===============
completedEl.parentNode.remove()
//TODO:===========17===============
const parEl = document.createElement('p')
parEl.textContent = "Об'єктна модель документа (Document Object Model)";
titleEl.after(parEl)
//TODO:===========18===============
// const liEl = document.createElement('li');

// const subtitle = document.createElement('h3');
// subtitle.textContent = "Властивість innerHTML";

// const pEl = document.createElement('p');
// pEl.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

// liEl.appendChild(subtitle);
// liEl.appendChild(pEl);

// console.log(liEl);

// listEl.append(liEl);
//TODO:===========19===============
const markup = `
<li>
  <h3>Властивість innerHTML</h3>
  <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
</li>
`;
// listEl.innerHTML = markup;
listEl.insertAdjacentHTML('beforeend', markup);
//TODO:===========20===============
listEl.innerHTML = '';








//TODO:=========task-02=================
/**
 * Вам надано кілька масивів з різними фруктами (назва у масиві вказує на те, куди потрібно помістити елементи відносно ul).
 * `Створи` html - елемент списку і `додай` його у розмітку.Попрактикуйся з методами`append`, `prepend`, `after`, `before`
 * заповнивши ними список елементами з масивів.Для зручності створи допоміжну функцію`elementsOfIngridients`,
 * яка повертатиме масив елементів(масив з лішками).
 */

// const appendFruitList = ['apple🍎', 'banana🍌'];
// const prependFruitList = ['grapes🍇', 'orange🍊'];
// const beforeFruitList = ['strawberry🍓', 'cherry🍒'];
// const afterFruitList = ['peach🍑', 'kiwi🥝'];

// const elementsOfIngridients = (array) => {
//   return array.map((el) => {
//     const liEl = document.createElement("li");
//     liEl.textContent = el;
//      return liEl;
//   });
 
// }
// console.log(elementsOfIngridients(appendFruitList))

// listEl.append(...elementsOfIngridients(appendFruitList));
// listEl.prepend(...elementsOfIngridients(prependFruitList));
// listEl.before(...elementsOfIngridients(beforeFruitList));
// listEl.after(...elementsOfIngridients(afterFruitList));

//TODO:=========task-03=================
// 3. Вставте даний текст в html документ, а потім виділіть усі слова, які мають більше 8 символів у тексті абзацу (наприклад, жовтим фоном).

const text = `Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;



const words = text.split(/\s+/); // Розбиваємо текст на слова за допомогою роздільників (пробіли, коми, крапки і т.д.)
const paragraphEl = document.createElement('p');

words.forEach(word => {
  if (word.length > 8) {
    const spanEl = document.createElement('span');
    spanEl.style.backgroundColor = 'yellow';
    spanEl.textContent = word + ' ';
    paragraphEl.appendChild(spanEl);
  } else {
    paragraphEl.innerHTML += word + ' ';
  }
});

console.log(paragraphEl);

listEl.after(paragraphEl);
// console.log(words);

//TODO:=========task-04=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// const BLOCKS = 100;

// //TODO:=========task-05=================
// Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію createMarkup(), яка буде повертати розмітку. Додай розмітку на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.

// const films = [
//   {
//     title: 'Tetris',
//     imgUrl: 'https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg',
//     id: 'film_1',
//   },
//   {
//     title: 'Avatar: The Way of Water',
//     imgUrl: 'https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg',
//     id: 'film_2',
//   },
//   {
//     title: 'Operation Fortune: Ruse de guerre',
//     imgUrl: 'https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg',
//     id: 'film_3',
//   },
//   {
//     title: 'Babylon',
//     imgUrl: 'https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg',
//     id: 'film_4',
//   },
//   {
//     title: 'The Whale',
//     imgUrl: 'https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg',
//     id: 'film_5',
//   },
// ];

// Приклад елементу списку
{
  /* <li id="${id}">
     <img src="${imgUrl}" alt="${title}" />
     <p>${title}</p>
</li> */
}

// const watchedFilms = ['film_2', 'film_4', 'film_5'];

// function createMarkup() {}
