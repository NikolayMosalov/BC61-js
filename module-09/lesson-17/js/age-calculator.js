// ## 2. Потрібно створити калькулятор віку. Є контейнер з заголовком "калькулятором віку" і input з введенням дати. Якщо ми натиснемо на input дати, ми зможемо вибрати дату нашого дня народження. Наприклад, якщо ми виберемо дату 17.06.1998 року і натиснемо на "Розрахувати вік", побачимо, що вік розраховується на основі цієї дати і нам у результаті покажеться, що `Your age is 25 years old`; Якщо нічого не введено, то виводь `alert("Please enter your birthday")`Використовуй доповіжні функції для роботи.

// ### Викоритовуй шаблон форми з файлу [lesson-17.html](./lesson-17.html).


const btnEl = document.querySelector('.js-form-btn');
const inputEl = document.querySelector('.js-input');
const resultEl = document.querySelector('.js-form-result');

function calculateAge() {
    const clientDate = new Date(inputEl.value);
    const currentDate = new Date();
    const diff = currentDate - clientDate;

    const result = getAge(diff);

    resultEl.textContent = `Your age is ${result} years old`;
}

function getAge(ms) {
    return Math.floor(ms / (1000 * 60 * 60 * 24 * 365.25));
}

btnEl.addEventListener('click', calculateAge);