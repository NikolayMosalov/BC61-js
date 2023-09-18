// Модуль 6. Заняття 12. DOM i events

//TODO:=========task-01=================
/**
 *!  Form Events, Input, Focus, Blur and Submit.

*? Викоритовуй шаблон форми з файлу html.

** 1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо ж символів менше аніж 6, то клас `error`

** 2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

** 3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

** 4 - При події `submit`. Відміни поведінку браузера по змовчуванню. Дістань данні з інпуту і чек боксу, зроби перевірку, що інпут не порожній, також, що нажатий чек бокс у положення true, якщо користувач все виконав вірно, збери данні (userName) у обьект і виведи у консоль. У разі, якщо користувач не виконав одну із умов, виведи повідомлення. Також реалізуй додавання ім`я користувача у span, замість слова "Anonymous". Якщо користувач ввів ім`я, а потім видали, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous". При відправці форми, очисти інпут, верни чек бокс у положення false, верни дефолтне значення "Anonymous" у span.
 */

// find refs
const refs = {
    userInput: document.querySelector('.js-username-input'),
    form: document.querySelector('.js-contact-form'),



}
// console.log(refs.userInput);

//TODO:===========1===============
//  refs.userInput.addEventListener('input',() => {
//     console.log(refs.userInput);
//     if(refs.userInput.value.length > 6) {
//         refs.userInput.classList.add('success');
//         refs.userInput.classList.remove('error');
        
//     } else {
//         refs.userInput.classList.remove('success');
//         refs.userInput.classList.add('error');
//     }
//  } );
//TODO:===========2===============
// refs.userInput.addEventListener('focus', () => {
//     !refs.userInput.value ?  refs.userInput.style.outline = '3px solid red' : refs.userInput.style.outline = '3px solid green';
// })
//TODO:===========3===============

// const onBlur = () => {
//     !refs.userInput.value ?  refs.userInput.style.outline = '3px solid red' : refs.userInput.style.outline = '3px solid lime';
//     console.log(123);
// }
// refs.userInput.addEventListener('blur', onBlur)
//TODO:===========4===============

//TODO:=========task-02=================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на "Розкрити", у разі повторного натискання текст знову стає доступним і кнопка набуває початкового вигляду.

//TODO:=========task-03=================
// Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey

//TODO:=========task-04=================
// Кнопка "Зменшити" робить квадрат меншим на 20 пікселів, кнопка "Збільшити" - робить більшим на 10 пікселів.

//TODO:=========task-05=================
// При кліку на коло воно має слідувати за курсором. При повторному кліку воно стає в початкове положення.

