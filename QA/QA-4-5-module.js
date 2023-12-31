//! callback
//TODO:=================task-01=============================
// Є масив чисел. Напишіть функцію, яка приймає масив та два колбеки.
// Перший колбек виконується над усіма елементами масиву перемножуючи їх на 2.
// Другий - над елементами, ділить елементи, що можна розділити без залишку, на 5, та повертає суму усіх елементів масиву.
// Результат першого колбеку повинен передаватися другому колбеку.Функція повинна повертати результат другого колбеку.

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function manipulateArray(arr, callback1, callback2) {
//     const newArray = [];
//     for (const num of arr) {
//         newArray.push(callback1(num));
// }
//     console.log(newArray);

//     let result = 0;
//     for (const num of newArray) {
//         if (num % 5 === 0) {
//             result += callback2(num);;
//         }
//     }
//     return result;
// }

// const multiplyByTwo = (num) => num * 2;

// const divideByFiveAndSum = (num) => num / 5;

// const result = manipulateArray(array, multiplyByTwo, divideByFiveAndSum);
// console.log(result);

//! Замикання
//TODO:=================task-02=============================
// Напишіть функцію makeСhef(сhefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа при її виклику
// Функція makeDish має логірувати "<shef> is cooking <dish>"

/**
 * Параметр сhefName это локальная переменная для функции makeСhef.
 * Это значит что она будет доступна функции makeDish через замыкание.
 */

// function makeСhef(chefName) {
//     return function makeDish(dish) {
//         console.log(`${chefName} is cooking ${dish}`);
//     }
// }
// const chef1 = makeСhef('Ramsy Gordon');
// const chef2 = makeСhef('Vasya')

// chef1('beef wellington');
// chef2('pasta carbonara');

//TODO:====================task-03==========================
// Напишіть функцію для зберігання знижки. Функція повертає:
// Іншу функцію, яка приймає суму покупки
// і повертає фінальну суму із збереженою знижкою.

// function saveDiscount (discount){
//     return function makeDiscount(sum){
//         return sum - sum * (discount/100);
//     }
// }

// const silver = saveDiscount(5);
// const gold = saveDiscount (15);
// const premium = saveDiscount(20);

// console.log(silver);

// const user1 = silver(1000);
// const user2 = gold(1000);
// const user3 = premium(1000);
// console.log(user1);
// console.log(user2);
// console.log(user3);

//! Arrow method
//TODO:=================task-04=============================
// Напиши функцію яка приймає масив чисел і повертає новий масив, унікальних чисел, які не повторюються.

// const numbers = [10, 10, 10, 2, 'a', 4, 7, 7, 6, 6, 'B', 4, 23, 22, 22, 111, 10, 'a'];

// const uniqArray = numbers.filter((number, idx, arr) => arr.indexOf(number) === idx);
// console.log(uniqArray);

// function uniqArray(array) {
//     const uniq = {};
//     for (const number of array) {
//         uniq[number] = number;
//     }
//     return Object.values(uniq);

// console.log(uniq);
// }

// const uniqArray = array => [...new Set(array)];

// const set = new Set(numbers);

// console.log(set);
// const res = uniqArray(numbers);
// console.log(res);
// console.log(numbers);

//TODO:=================task-05=============================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const checkAge = (arr) => arr.some((el) => el.age < 20);

// const res = checkAge(people);
// console.log(res);

//TODO:=================task-06=============================
// У кожному масиві якщо унікальний рядок, у якому не повторюються літери.
// Знайдіть і виведіть цей рядок.

// const findUniq = (arr) =>
//   arr.find((string, idx, array) => {
//     const sortString = string
//       .split("")
//       .sort((a, b) => a.localeCompare(b))
//       .join("");

//     // console.log(array);

//     return array.every(
//       (el, index) =>
//         index === idx || sortString !== el
//             .split("")
//             .sort((a, b) => a.localeCompare(b))
//             .join("")
//     );
//   });

// const stringArr = ["abc", "acb", "bac", "foo", "bca", "cab", "cba"]
// const sortedStringArr = [...stringArr].sort((a,b) => b.localeCompare(a))
// console.log(sortedStringArr);
// console.log(stringArr);

// console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"])); // === 'foo'
// console.log(findUniq(['fghj', 'ghfj', 'abcd', 'jhgf', 'fghj', 'fgjh', 'ghjf'])); // === 'abcd'
// console.log(findUniq(["qwe", "camp", "acmp", "pmac", "camp", "apmc", "pmac"])); // === 'qwe'

//TODO:===============task-07===============================
// Даний словник із міст та дат виступів рок-групи
// Необхідно перетворити словник (key-value) на масив із назв міст
// Виведення міст має бути у хронологічному порядку
// Міста у яких концерт вже пройшов потрібно виключити
// Результат ["Умань", "Харків", "Одеса"]

// const concerts = {
//   Київ: new Date('2020-04-01'),
//   Умань: new Date('2023-10-02'),
//   Вінниця: new Date('2020-04-21'),
//   Одеса: new Date('2023-10-15'),
//   Хмельницький: new Date('2020-04-18'),
//   Харків: new Date('2023-10-10'),
// };

// console.log(new Date('2020-04-01'));

// const concertsToArray = (obj) => Object.keys(obj)
//     .filter((city) => obj[city] > new Date())
//     .sort((a, b) => obj[a] - obj[b]);

// const res = concertsToArray(concerts);
// console.log(res);

//! this and contacts
//TODO:=================task-08=============================
// Виклик checkPassword() у наведеному нижче коді повинен перевірити пароль
// та викликати user.loginOk / loginFail залежно від відповіді.

//? Однак його виклик призводить до помилки. Чому?

// const checkPassword = function (ok, fail, password) {
//   let ok = client.loginOk;
//   let fail = client.loginFail;

//   password === 'rockstar' ? ok() : fail();
// };

// const client = {
//   name: 'Вася',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// checkPassword(client.loginOk.bind(client), client.loginFail.bind(client), 'rockstar');

//! class
//TODO:=================task-09=============================
// Завдання полягає у створенні програми, що дозволяє керувати замовленнями в ресторані.

// #### Для цього потрібно реалізувати клас `Order`, який містить такі приватні властивості:
// - `tableNumber` - номер столика, де зроблено замовлення
// - `items` - масив предметів замовлення, де кожен предмет містить ім'я (name) та ціну (price)
// - `isPaid` - позначає, чи оплачене замовлення (default = false)

// ##### Для класу Order потрібно реалізувати такі методи:
// - `calculateTotal`() - повертає загальну суму замовлення.
// - `markAsPaid`() - позначає замовлення як оплачене
// - `addItem`() - який додає предмет замовлення до масиву "items"
// - `removeItem`() - який видаляє предмет замовленя з масиву "items"
// ##### Додатково можна створити гетери та сетери для отримання номера столика, статусу замовлення та самого замовлення

// #### Також потрібно створити клас `MenuItem`, який містить властивості `name` та `price` для предметів замовлення.

// Create menu items

// Create an order

// Add items to the order

// Calculate the total and mark the order as paid

// console.log(`Order for table ${order.tableNumber} - Total: $${total}`);
// console.log(`Is paid: ${order.isPaid}`);
