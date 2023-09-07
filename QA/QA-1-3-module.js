//TODO:=========task-1=================
// Перевірити два масиву і дізнатися, чи вони рівні

//* Оцікуваний результат - true, true, false, false

// const arr1 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr2 = [6, 'dream', -30, 11, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];

// const arr3 = [4, 232, 6, -30, 'color', 324, 'list', 1, 11, 9, 'dream', 34, 0];
// const arr4 = ['color', 6, -30, 11, 9, 1, 'dream', 324, 34, 4, 232, 0, 'list'];

// const arr5 = [1, 4, 6, 'color', 'list', 11, 9, 'dream', 34, 0, -30, 'lesson'];
// const arr6 = [6, 324, 'dream', -30, 9, 8, 34, 'color', 4, 232, 0, 'list', 11];

// const arr7 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr8 = [6, 'dream', -30, 10, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];

// function compareArrays(arr1, arr2) {

// if (arr1.length !== arr2.length) {
//     return false;
//     }

//    for (const i of arr1) {
//     if (!arr2.includes(i)) {
//         return false;
//     }
//     }

//     return true;

// }

// console.log(compareArrays(arr1, arr2));
// console.log(compareArrays(arr3, arr4));
// console.log(compareArrays(arr5, arr6));
// console.log(compareArrays(arr7, arr8));

//TODO:=============task-2==================================================================
// Написати функцію, яка приймає масив чисел та повертає новий масив, який містить всі числа,
// які є дублікатами в початковому масиві. Якщо немає дублікатів, функція повертає порожній масив.

//* Оцікуваний результат - [1, 5, 22, 10, 44, 45]

// const array = [
//   48, 1, 5, 25, 22, 10, 44, 102, 100, 22, 53, 6, 3, 10, 45, 12, 0, 22, 13, 22,
//   45, 55, 33, 23, 5, 21, 2, 44, 1,
// ];
// function findDuplicate(array) {
//     let newArray = [];

//     for(let i = 0; i < array.length; i += 1) {
//       const dublicate = array[i];
//       let count = 0;
//         for(let j = i; j < array.length; j +=1)  {
//             const item = array[j];
//             if(item === dublicate) {
//                 count += 1;
//                 if(count === 2) {
//                     !newArray.includes(item) && newArray.push(item);
//                     continue
//                 }
//             }
//         }

//     }
//     return newArray;
// }

// const result = findDuplicate(array);
// console.log(result);

//TODO:============task-3==================================================
// Створіть масив об'єктів "продуктів" з властивостями "назва", "ціна" та "кількість".
// Напишіть функцію "calculateTotalPrice", яка буде повертати загальну вартість всіх товарів в масиві.

//* Оцікуваний результат - store1=> 25, store2=> 304, store3=> 3024

// const store1 = [
//   { name: 'Молоко', price: 2, quantity: 3 },
//   { name: 'Хліб', price: 1, quantity: 2 },
//   { name: 'Сир', price: 12, quantity: 1 },
//   { name: 'Яблука', price: 1, quantity: 5 },
// ];

// const store2 = [
//   { name: 'Молоко', price: 22, quantity: 3 },
//   { name: 'Хліб', price: 14, quantity: 2 },
//   { name: 'Сир', price: 120, quantity: 1 },
//   { name: 'Яблука', price: 18, quantity: 5 },
// ];

// const store3 = [
//   { name: 'Молоко', price: 212, quantity: 3 },
//   { name: 'Хліб', price: 314, quantity: 2 },
//   { name: 'Сир', price: 1120, quantity: 1 },
//   { name: 'Яблука', price: 128, quantity: 5 },
// ];

// function calculateTotalPrice(array) {
//     let total = 0;
//     for (const {price, quantity} of array) {
//          total += price * quantity;

//     }
//     return total;
// }

// const sum1 = calculateTotalPrice(store1);
// const sum2 = calculateTotalPrice(store2);
// const sum3 = calculateTotalPrice(store3);

// console.log('store1=>', sum1);

// console.log('store2=>', sum2);

// console.log('store3=>', sum3);

//TODO:============task-4=====================================
// * Задача: є масив об'єктів, кожен об'єкт містить інформацію про певний товар: назву товару, його ціну та кількість.
// * Необхідно вивести інформацію про ті товари, ціна яких менше 50 гривень та кількість більше 5 одиниць.

// const basket = {
//   products: [
//     { name: 'product 1', price: 20, quantity: 10 },
//     { name: 'product 2', price: 30, quantity: 4 },
//     { name: 'product 3', price: 40, quantity: 6 },
//     { name: 'product 4', price: 50, quantity: 3 },
//     { name: 'product 5', price: 60, quantity: 2 },
//   ],
//   getProductsByPrice(maxPrice, minQuantity) {
//     const newArr = [];

//     for (const item of this.products) {
//       const { price, quantity } = item;

//       if (price < maxPrice && quantity > minQuantity) {
//         newArr.push(item);
//       }
//     }

//     return newArr;
//   },
// };

// const result = basket.getProductsByPrice(50, 5);
// console.log(result);

//TODO:============task-5===================================
//* У вас є масив об'єктів, який представляє собою список студентів, де кожен студент представлений об'єктом з властивостями "ім'я", "прізвище",
//* "рік народження" та "список курсів". Напишіть функцію, яка бере цей масив об'єктів та повертає новий масив, який містить об'єкти студентів, що належать
//* до певного списку курсів, переданого як параметр. Кожен об'єкт у новому масиві має містити тільки ім'я та прізвище студента.

// const academia = {
//   students: [
//     {
//       name: "John",
//       surname: "Doe",
//       birthYear: 2000,
//       courses: ["Math", "Physics"],
//     },
//     {
//       name: "Jane",
//       surname: "Doe",
//       birthYear: 2001,
//       courses: ["Chemistry", "Biology"],
//     },
//     {
//       name: "Bob",
//       surname: "Smith",
//       birthYear: 2002,
//       courses: ["Math", "Art"],
//     },
//     {
//       name: "Alice",
//       surname: "Johnson",
//       birthYear: 2003,
//       courses: ["Physics", "Chemistry"],
//     },
//   ],
//   getStudentsByCourses(arr) {
//     const newArr = [];
//     for (let i = 0; i < this.students.length; i += 1) {
//       for (let j = 0; j < this.students[i].courses.length; j += 1) {
//         if (arr.includes(this.students[i].courses[j])) {
//           newArr.push({
//             name: this.students[i].name,
//             surname: this.students[i].surname,
//           });
//           break;
//         }
//       }
//     }
//     return newArr;
//   },
// };

// const result = academia.getStudentsByCourses(["Math", "Physics"]);
// console.log(result);

//TODO:=========task-6=============Робота з базою данних================
// Попрацюй з колекцією данних

const filmoteka = [
  {
    id: 1,
    title: "Duna",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 10,
    actors: [
      "Amelia Gibson",
      "Cameron Clayton",
      "Viola Vasquez",
      "Lula Collins",
      "Victor Nichols",
    ],
    adult: false,
  },
  {
    id: 2,
    title: "Venom",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 8,
    actors: [
      "Inez Greer",
      "Barry Curtis",
      "Blanche Rios",
      "Glen Perry",
      "Logan Powers",
    ],
    adult: true,
  },
  {
    id: 3,
    title: "Luca",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 9,
    actors: [
      "Marguerite Gibbs",
      "Lora Alvarez",
      "Jorge Simpson",
      "Thomas Hall",
      "Darrell Hunter",
    ],
    adult: false,
  },
  {
    id: 4,
    title: "Free Guy",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 6,
    actors: [
      "Calvin Andrews",
      "Mamie Myers",
      "Madge Townsend",
      "Ralph Kim",
      "Jorge Reese",
    ],
    adult: true,
  },
  {
    id: 5,
    title: "Saw",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 7,
    actors: [
      "Adele Marsh",
      "Melvin Burgess",
      "Jesus Reese",
      "Harriet Moreno",
      "Curtis Cox",
    ],
    adult: true,
  },
];

//TODO:==========================
// Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив із усіма назвами фільмів.

//* Оцікуваний результат -  ['Duna', 'Venom', 'Luca', 'Free Guy', 'Saw']
// function getAllTitlesOfFilms(array) {
//   const newArray = [];
//   for (const film of array) {
//     newArray.push(film.title);
//   }
//   return newArray;
// }
// const result = getAllTitlesOfFilms(filmoteka);
// console.log(result);

//TODO:==========================
// Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.
// function findFilmByName(films, filmTitle) {
//     const newArr = [];
//     for (const film of films) {
//         if (film.title === filmTitle) {
//             newArr.push(film) ;
//         }
//     }
//     return newArr;
// }
// //* Оцікуваний результат -  Обьект фільма

// const result = findFilmByName(filmoteka, 'Venom');
// console.log(result);

//TODO:==========================
// Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.

// const result = getAdultFilms(filmoteka);
// console.log(result);

//TODO:==========================
// Напишіть функцію getNotAdultFilms(films), яка повертає масив усіх фільмів без обмеження.

// const result = getNotAdultFilms(filmoteka);
// console.log(result);

//TODO:=========task-7========Робота з базою данних=========
// Попрацюй з колекцією данних

// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

//TODO:==========================
// Отримати масив об'єктів користувачів за кольором очей (eyeColor).

// console.log(getUsersByColor(users, 'brown'));
// console.log(getUsersByColor(users, 'blue'));
// console.log(getUsersByColor(users, 'green'));

//TODO:==========================
// Отримати масив імен користувачів за статтю (поле gender)

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//TODO:==========================
// Отримати масив тільки неактивних користувачів (поле isActive).

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//TODO:==========================
// Отримати масив користувачів віком від min до max

// console.log(getUsersWithAge(users, 30, 40)); //[объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//TODO:==========================
// Отримати загальну суму балансу (поле balance) всіх користувачів.

// console.log(calculateTotalBalance(users)); // 20916

//TODO:==========================
// Масив імен всіх користувачів, у яких є товарищь із зазначеним ім'ям.

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
