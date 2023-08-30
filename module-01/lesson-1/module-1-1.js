/*
  Оператори порівняння (<, >, <=, >=, ==, ===, !=, !==) 
 */

/*
  Результатом порівняння буде бульове значення.
  Рядки порівнюються по unicode.
  При порівнянні рядків рядки порівнюються посимвольно.
  При порівнянні різних типів, операнди приводяться до числа.
  null не дорівнює нічому окрім себе, як і undefined.
 */

/*
  Приведення різних типів до:

  true --> 1
  false --> 0
  '' --> 0
  null --> 0
  undefined --> 0
 */

//? Оператор менше (<)
// console.log(2 < 12);
// console.log(12 < 2);
// console.log('a' < 'b');
// console.log('b' < 'a');
// console.log('A' < 'a');
// console.log('apple' < 'ananana');
// console.log('bananana' < 'apple');
// console.log(true < false);
// console.log(false < true);

//? Оператор більше (>)
// console.log(10 > 20);
// console.log(20 > 10);

//? Оператор менше або дорівнює (<=)
// console.log(4 <= 6);
// console.log(5 <= 5);
// console.log(5 <= 4);

//? Оператор більше або дорівнює (>=)
// console.log(5 >= 3);
// console.log(5 >= 5);
// console.log(3 >= 4);

//? Рівність (==)
// console.log('123' == 123);
// console.log(true == '1');
// console.log(4 == 5);

//? Строга рівність (===)
// console.log('123' === 123);
// console.log(null === null);
// console.log(null === undefined);
// console.log(2 + 2 === 4);

//? Нерівність (!=)
// console.log('4' != 4);

//? Строга нерівність (!==)
// console.log('4' !== 4);

//! variebles

/*
  Примітивні типи даних: number, string, boolean, null та undefined.
 */

/*
  Виведення даних: console.log та alert. Вкладка Console в Chrome Devtools.
 */

// console.log('Hello');
// console.log('5');
// console.log(5);

// alert('Hello');
// alert(5);

/*
  Змінні: оголошення let та const.
 */

// let userFirstName;

// console.log(userFirstName);

// userFirstName = 'Denis';

// console.log(userFirstName);

// const userLastName = 'Hunter';

// console.log(userLastName);

// userLastName = 'Carson';

// console.log(userLastName);
/*
  Отримання даних: prompt та confirm.
 */

// const userFirstName = prompt('Ваше ім`я?');

// console.log(userFirstName);

// const isAdult = confirm('Вам є 18?');

// console.log(isAdult);
