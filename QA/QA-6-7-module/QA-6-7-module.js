//TODO:=========task-01=================
// Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію createMarkup(), яка буде повертати розмітку. Додай розмітку на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.

const films = [
  {
    title: 'Tetris',
    imgUrl: 'https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg',
    id: 'film_1',
  },
  {
    title: 'Avatar: The Way of Water',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg',
    id: 'film_2',
  },
  {
    title: 'Operation Fortune: Ruse de guerre',
    imgUrl: 'https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg',
    id: 'film_3',
  },
  {
    title: 'Babylon',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg',
    id: 'film_4',
  },
  {
    title: 'The Whale',
    imgUrl: 'https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg',
    id: 'film_5',
  },
];

const listEl = document.querySelector('.js-film-list')

document.addEventListener('DOMContentLoaded', createMarkup);



// Приклад елементу списку
{
  /* <li id="${id}">
     <img src="${imgUrl}" alt="${title}" />
     <p>${title}</p>
</li> */
}

const watchedFilms = ['film_2', 'film_4', 'film_5'];


function createMarkup(e) {

  const markup = films.map(({ title, imgUrl, id }) => {
    return `
    <li id="${id}">
     <img src="${imgUrl}" alt="${title}" />
     <p>${title}</p>
    </li>
    `
  })
    .join('')
  
  listEl.insertAdjacentHTML('afterbegin', markup)

  watchedFilms.forEach(id => {
    const filmEl = listEl.querySelector(`#${id}`)

    if (filmEl) {
      filmEl.style.opacity = 0.5; 
    }
  });

};

// createMarkup(films);






//TODO:====================task-02================TODOS=====================
/**
  |============================
  | Список справ todos:
  | 1 - Напиши скрипт для застосунку todos. Реалізуй методи додавання та видалення щоденних справ.
  | 2 - Реалізуй перевірку на неможлівість додати пусту справу до списку справ. 
  | Виконуй завдвння послідовно: 
  | - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
  | - Додай слухачі подій з відповідними подіями
  | - Пропиши три функції, які тобі допоможуть це реалізувати 
  | - Функція обробник на додавання елементів "onClickSubmit". Її завдання, зчитати значення з інпуту, виконай за допомогою "currentTarget.elements", також не забувай
  | про метод trim(), який видаляє пробіли. Ця функція повинна робити перевірку на пустий інпут, створювати обьект, додавати до масиву нову todos і чистити інпут. Також
  | запускати функцію рендера сторінкі.
  | - Функція "onBtnClick", яка буде видаляти todos. Вона повинна знайти id todos, яку потрібно видалити. Значення id можно считати з дата атрибуту за допомогою 
  | "target.dataset.id", але не забувай, що там буде рядок і можно використати метод "parseInt". Для видалення можно використати метод "filter". Після видалення ми 
  | повинні відрендорити сторінку за допомогою функції "updateList".
  | - І сама функція "updateList". Ії завдання створити розмітку за допомого метода createElement і setAttribute, додати на сторінку за допомогою метода "append". Не 
  | забувай чистити розмітку перед її вставкою.
  |============================
*/


const formElem = document.querySelector('.js-todos__form');
const listElem = document.querySelector('.js-todos-list');
const pElem = document.querySelector('.js-text');
let items = [];

formElem.addEventListener('submit', onClickSubmit);

listElem.addEventListener('click', onBtnClick);

document.addEventListener('DOMContentLoaded', showMessage);

function onBtnClick(e) {
  if(e.target.nodeName !== 'BUTTON') return;

  const todoId = Number.parseInt(e.target.dataset.id);
  items = items.filter(item => item.id !== todoId)

  const updateList = items.map(item => createTodo(item));
  listElem.innerHTML = updateList.join('');
  showMessage();
}

function onClickSubmit(e) {
  e.preventDefault();

  const input = e.currentTarget.elements['user-todos'];
  const todos = input.value.trim();

  if(!todos) {
    return alert('Input is empty');
  }
  const isExist = items.some(item => item.text === todos);
  
  if(isExist) {
    return alert('Task is exist');
  }
  
  const todoItem = {
    id: Date.now(),
    text: todos
  }
  items.push(todoItem);
  input.value = '';

  // renderPage();
  listElem.insertAdjacentHTML('beforeend', createTodo(todoItem));
  showMessage();
}

// function renderPage() {
//   const markup = items.map(({ id, text }) => {
//     return `
//       <li class="todos-item">
//       <span class="text">${text}</span>
//       <div>
//         <button type="button" data-id="${id}" class="todos-btn-delete">Видалити</button>
//       </div>
//       </li>
//     `;
//   }).join('')

//   listElem.innerHTML = markup;
// }

function createTodo({id, text}) {
  return `
      <li class="todos-item">
      <span class="text">${text}</span>
      <div>
        <button type="button" data-id="${id}" class="todos-btn-delete">Видалити</button>
      </div>
      </li>
    `;
}

function showMessage() {
  items.length === 0 ? pElem.classList.remove('is-hidden') : pElem.classList.add('is-hidden');
}


//TODO:====================task-03================Find country=====================

// - Використовуй html з файлу [index.html].
// - Використовуй масив країн з файлу [countries-list.js]

// Створи функціонал пошуку країни за її назвою.
// - Є масив об'єктів, де кожен об'єкт це країна з своїм набором значень.
// - Створи функцію `onInputChange`, яка буде викликатися кожного разу коли користувач вводить щось в інпут.
// - Необхідно застосувати прийом `Debounce` на обробнику події, щоб запускати функцію `onInputChange` не одразу, а через 300мс після того, як користувач перестав вводити текст. Використовуй lodash.debounce.
// - Якщо користувач повністю очищає поле пошуку, то розмітка списку країн або інформації про країну зникає.

// - Якщо у масиві країн знайшлося більше однієї країни, під тестовим полем відображається список знайдених країн. Кожен елемент списку складається з прапора та назви країни.

// html
//  <li>
//     <div class="countryFlag">
//     <p class="countryName">Ukraine 🇺🇦</p>
// </li>;

// - Якщо результат запиту - це масив з однією країною, в інтерфейсі відображається розмітка картки з даними про країну: прапор, назва, столиця, населення.
// html
// <li>
//     <div class="previewCard">
//         <div class="countryFlag">
//         <p class="countryName">Ukraine 🇺🇦</p>
//     </div>
//     <p class="countryCapital"><b>Capital </b> Kyiv</p>
//     <p class="countryPopulation"><b>Population: </b>41 342 765</p>
//     <p class="countryArea"><b>Area: </b>603.628</p>
// </li>

// - Якщо країни не було знайдено у масиві, то розмітка списку країн або інформації про країну зникає і показується повідомлення в `errorTextRef` про те що `""Oops, there is no country with that name"${}"`

// function onInputChange() {}

// function createCountryList() {}

// function createCountryCard() {}

const countries = [
  {
    name: 'Ukraine',
    capital: 'Kyiv',
    population: '41 342 465',
    area: '603.628',
    flag: '🇺🇦',
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    population: '47 450 795',
    area: '505.990',
    flag: '🇪🇸',
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    population: '109 035 343',
    area: '300.000',
    flag: '🇵🇭',
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    population: '31 127 674',
    area: '1.246.700',
    flag: '🇦🇴',
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    population: '34 003',
    area: '6.8',
    flag: '🇬🇮',
  },
];

//   `<li>
//     <div class="previewCard">
//         <div class="countryFlag">
//           <p class="countryName">${name} ${flag}</p>
//         </div>
//     </div>
//       <p class="countryCapital"><b>Capital </b> ${capital}</p>
//       <p class="countryPopulation"><b>Population: </b>${population}</p>
//       <p class="countryArea"><b>Area: </b>${area}</p>
// </li>`;
