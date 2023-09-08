//TODO:============task-01=========================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
// const name = prompt("Enter your name");
// if ( name === ""  ){
// alert("Errow")
// }
// callback(name)
// }
// function greet(name) {
// console.log(`Hallo ${name}`);
// }
// letMeSeeYourName(greet);

//TODO:============task-02=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.

// function performOperation(a, b, callback) {
//   callback(a * b);
// }
// function callbackFunction(number) {
//   if (number % 2 === 0) {
//     return console.log(Math.pow(number, 2));
//   }
//   return console.log(Math.sqrt(number));
// }

// const result = performOperation(3, 5, callbackFunction);
// console.log(result);

//? =========== Стрілочна функція ============

// const performOperation = (a, b, callback) => callback(a * b);

// const callbackFunction = (number) =>
//   number % 2 === 0 ? Math.pow(number, 2) : Math.sqrt(number);

// const result = console.log(performOperation(3, 5, callbackFunction));
// console.log(result);

//TODO:============task-03=========================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// function makeProduct(name, price, callback) {
//     const id = Date.now();
//     const product = {
//         id,
//         name,
//         price,
//     }
//     callback(product);
// }
// const showProduct = ({id, name, price}) => console.log(`id: ${id}, product: ${name}, price: ${price}`);
   
// makeProduct('beer', 45, showProduct);

//TODO:============task-04=========================
//Напишіть функцію each(array, callback), яка
//першим параметром приймає масив, а другим - функцію,
//Яка застосовується до кожного елементу масиву.
//Функція each повинна повернути новий масив, елементами
//якого будуть результати виклику callback
//callback функції повинна множити елементи на 2
//! Використай анонімну колбєк функцію

// const numbers = [3, 5, 6, 34, 8, 83, 12, 34];

// const result = each(array, (value) => value * 2);
// console.log(result);

//TODO:============task-05=========================
// Напишіть функцію, яка приймає масив чисел і колбек-функцію. Функція повинна повернути новий масив, у якому кожен елемент масиву перетворено згідно з логікою, яка визначається в колбек-функції. Колбек-функція приймає число, і повертає його ж, помножене на рандомне число від 1 до цього числа.

// const numbers = [1, 2, 3, 4, 5];

// const result = transformArray(numbers, transformedNumbers);
// console.log(result);

//TODO:============task-06=========================
// Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.

// const numbers = [1, 3, 5, 7, 9, 20];
// const words = ['apple', 'banana', 'orange', 'pear'];

//! Зауважте, що використання методу forEach не дозволяє прямо вийти з циклу після знаходження першого підходящого елемента. Тому ми використовуємо додаткову змінну result, щоб зберегти перший підходящий елемент та перевіряти, чи він вже був знайдений. forEach нічого не повертає, а просто перебирає масив!

// const res1 = findElement(numbers, isEven);
// console.log(res1);

// const res2 = findElement(words, startsWithO);
// console.log(res2);
