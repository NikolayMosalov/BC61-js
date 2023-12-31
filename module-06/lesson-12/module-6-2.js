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
  userInput: document.querySelector(".js-username-input"),
  form: document.querySelector(".js-contact-form"),
  span: document.querySelector(".js-username-output"),
};
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
//     !refs.userInput.value.trim() ?  refs.userInput.style.outline = '3px solid red' : refs.userInput.style.outline = '3px solid green';
// })
//TODO:===========3===============

// const onBlur = () => {
//     !refs.userInput.value.trim() ?  refs.userInput.style.outline = '3px solid red' : refs.userInput.style.outline = '3px solid lime';
//     console.log(123);
// }
// refs.userInput.addEventListener('blur', onBlur)
//TODO:===========4===============

// const OnSubmit = (e) => {
//   e.preventDefault();

//   const { accept, userName } = e.target.elements;

//   if (!userName.value.trim() || !accept.checked) {
//     return alert("invalid arguments");
//   }

//   const userData = {
//     userName: userName.value,
//   };
//   console.log(userData);

//   //   e.currentTarget.reset();
//   refs.form.reset();

//   refs.span.textContent = "Anonymous";
// };

// const OnInputChange = () => {

//   refs.span.textContent = refs.userInput.value || "Anonymous";
// };

// refs.form.addEventListener("input", OnInputChange);
// refs.form.addEventListener("submit", OnSubmit);

//TODO:=========task-02=================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на "Розкрити", у разі повторного натискання текст знову стає доступним і кнопка набуває початкового вигляду.

// const buttonElem = document.querySelector('.js-password-button');
// const inputElem = document.querySelector(".js-password-input");

// buttonElem.addEventListener("click", () => {
//   if( inputElem.type === "text"){
//     inputElem.type = "password";
//     buttonElem.textContent = "Розкрити";
//   } else {
//     inputElem.type = "text";
//     buttonElem.textContent = "Приховати";
//   }

// });


//TODO:=========task-03=================
// Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey

// const container = document.querySelector('.eventThumb');


// const onKeyDownPress = ({key, code}) => {
//   const markUp = `
//     <ul class="eventList">
//       <li class="eventKey"><b>Key</b>: ${key}</li>
//       <li class="eventCode"><b>Code</b>: ${code}</li>
//     </ul>
//   `; 
//   container.insertAdjacentHTML('afterbegin', markUp);
// }

// document.addEventListener('keydown', onKeyDownPress);
//TODO:=========task-04=================
// Кнопка "Зменшити" робить квадрат меншим на 20 пікселів, кнопка "Збільшити" - робить більшим на 10 пікселів.

// const btnIncrease = document.querySelector('.js-increase');
// const btnDecrease = document.querySelector('.js-decrease');
// const divElement = document.querySelector('.box')

// const onClick = (event) => {
//   // console.log(divElement.offsetWidth);
//   const { offsetWidth } = divElement;
//   if (event.target.id === "increase") {
//     divElement.style.width = `${offsetWidth + 20}px`; 
//     divElement.style.height = `${offsetWidth + 20}px`;
//     return;
//   }
//     divElement.style.width = `${offsetWidth - 20}px`; 
//     divElement.style.height = `${offsetWidth - 20}px`;
// }

// btnIncrease.addEventListener('click', onClick)
// btnDecrease.addEventListener('click', onClick)
//TODO:=========task-05=================
// При кліку на коло воно має слідувати за курсором. При повторному кліку воно стає в початкове положення.
