



// ## 1. Напиши скрипт для віджета календаря. В кінцевому результаті повинна відображатися сьогоднішня дата у календарику. Використовуй `new Date()` для отримання поточного року, місяця, дня тижня та самого дня. Задай відповідні дані у відповідні елементи на html сторінці.

// ### Викоритовуй шаблон календаря з файлу [lesson-17.html](./lesson-17.html).
import { createClock } from "./clock.js";
console.log(createClock);
const monthNameEl = document.querySelector(".js-month");
const dayNameEl = document.querySelector(".js-day");
const dayNumEl = document.querySelector(".js-day-number");
const yearEl = document.querySelector(".js-year");



document.addEventListener('DOMContentLoaded', renderPage)

function renderPage () {
    createClock(dayNameEl) 
}

// const currentDate = new Date().getDay();
// console.log(currentDate);

// const month = ['January', 'February', 'March', 'April', 'May' , 'June', 'July', 'August', 'September'];
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// console.log(days[currentDate]);

const currentDate = new Date();
console.log(currentDate);

const year = currentDate.toLocaleDateString("uk-UA", {
  year: "numeric",
});

const month = currentDate.toLocaleDateString("uk-UA", {
  month: "long",
});
const weekDay = currentDate.toLocaleDateString("uk-UA", {
  weekday: "long",
});
const day = currentDate.toLocaleDateString("uk-UA", {
  day: "numeric",
});

monthNameEl.textContent = month;
dayNameEl.textContent = weekDay;
dayNumEl.textContent = day;
yearEl.textContent = year;

