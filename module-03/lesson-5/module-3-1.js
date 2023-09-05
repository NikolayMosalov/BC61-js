//!  Літерал об'єкта
//!  Властвості та методи об'єкта
//!  this в методах об'єкта при зверненні до властивостей

//TODO:============task-1=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

// Створити обьект human
// const human = {
//     userName: "Bobbi",
//     hobby: "reading",
//     age: 30,
//     greet(){
//         console.log(this.userName);
//     },
// }

// // Додати поле mood зі значенням 'happy'
// human["mood"] = "happy";
// human.mood = "sad";

// // Замінити hobby на 'skydiving'
// human["hobby"] = "skydiving";
// console.log(human.greet());
// // ! this
// console.log(this);

// const Yuriy = Object.create(human);
// Yuriy.userName = "Yuriy";
// console.log(Yuriy.greet());
// console.log(human.greet());

//TODO:============task-2==============================================
// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина".
//Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини
//та ширини.

// const square = {
//     width: 23,
//     height: 43,

//     calculateArea(){
//         return this.width * this.height;
//     }
// }

// console.log(square.calculateArea());

//TODO:============task-3==============================================
// Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct", який буде перевіряти, чи є певний товар в наявності на складі магазину.

// const store = {
//     products: ['banana', 'kiwi', 'apple'],

//     hasProduct(productName) {
//         return this.products.includes(productName);
//     },
//     addProduct(newProduct) {
//         this.products.push(newProduct);
//         console.log(this.products);
//     }

// }
// store.addProduct('orange');

// console.log(store.hasProduct('orange'));

//TODO:============task-4==============================================
// 4. Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.

// const cart = {
//     products: ['banana', 'kiwi', 'apple'],
//     price: [20, 50, 35],

//     calculateTotal() {
//         let total = 0;
//         for (const item of this.price) {
//             total += item;
//         }
//         return total;
//     }
// }


// console.log('object :>> ', cart.calculateTotal());

//! Перебір об'єктів: for...in і методи Object.keys|values|entries
//TODO:============task-5======================================================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// const obj = {
//   name: 'Igor',
//   car: 'Mercedes',
//   carColor: 'black',
// };

// ? Варіант 1

// ? Варіант 2

// console.log(getBool(obj, 'car')); // true

//TODO:============task-6======================================================
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

//TODO:============task-7======================================================
// Напишіть функцію, яка приймає як параметр об'єкт
// та формує об'єкти у новому масиві у форматі [key, value]

// const user = {
//   name: 'John',
//   surName: 'Stones',
//   age: 20,
//   hobby: 'tenis',
//   haveCar: true,
//   merried: false,
// };

//TODO:============task-8======================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// console.log(multiplyNumeric(menu));

// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu',
// };

//! Робота з масивом об'єктів
//TODO:============task-9==============================
// Створіть масив об'єктів "студентів" з властивостями "ім'я", "прізвище" та "середній бал".
// Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом.

// const students = [
//   { name: 'Андрій', surname: 'Іванов', grade: 4.5 },
//   { name: 'Олександр', surname: 'Петров', grade: 3.9 },
//   { name: 'Марія', surname: 'Сидорова', grade: 4.8 },
//   { name: 'Ірина', surname: 'Федорова', grade: 4.2 },
// ];

// console.log(findTopStudent(students));

//TODO:============task-10==================================================
// Створіть масив об'єктів "книг" з властивостями "назва", "автор" та "рік видання". Напишіть функцію "findBooksByAuthor",
//яка буде повертати масив книг відповідного автора.

// const books = [
//   { title: 'Війна і мир', author: 'Лев Толстой', year: 1869 },
//   {
//     title: 'Преступление и наказание',
//     author: 'Федор Достоевский',
//     year: 1866,
//   },
//   {
//     title: 'Гаррі Поттер і філософський камінь',
//     author: 'Джоан Роулінг',
//     year: 1997,
//   },
//   { title: 'Мастер и Маргарита', author: 'Михаил Булгаков', year: 1967 },
//   { title: '1984', author: 'Джордж Оруелл', year: 1949 },
// ];

// const arr = findBooksByAuthor(books, 'Джоан Роулінг');
// console.log(arr);
