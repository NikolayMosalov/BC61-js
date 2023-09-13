//TODO:=========task-01=================
// Створити об'єкт, який представляє користувача. У об'єкті повинні бути наступні поля: ім'я, прізвище, вік, email та метод, який виводить
// повну інформацію про користувача.

// const user = {
//     userName: "Tom",
//     lastName: "Ford",
//     age: 34,
//     email: "tom@gmail.com",

//     showUser(name = this.userName, age = this.age){
//       console.log(this);
//       console.log(`Hello, ${name}, you are ${age} y.o.`);
//     },

//     modify(params, value){
//         if(params !== "userName" && params !== "lastName"){
//             return alert("Params are not valid");
//         }
        
//         if(value[0] === value[0].toUpperCase() && value.length >= 3){
//            return this[params] = value;
//         }
//         alert("Value are not valid!")
//     },
// };
// user.modify("userName", "Rich");
// user.showUser();

//TODO:=========task-02=================
// Для обьекта "user", написати метод для зміни ім'я або прізвища(змінити можна лише якесь з цих полів, змінювати або додавати нові
//потрібно заборонити) з перевіркою на валідність даних(Перша літера має бути у верхньому реєстрі, довжина слова не менше 3 літер)



//TODO:=========task-03=================
// Створити глобальну функцію для обьекта "user", що може додавати властивості об'єкту, в контексті якого вона буде викликана. Додати цю функцію як метод об'єкта user, та додати за допомогою неї властивість friends із значенням:

// const addProperty = function (key, value) {
//     this[key] = value;
// }
  

// user.addProperty = addProperty;
// user.addProperty('friends', [
//   {
//     firstName: 'Mary',
//     lastName: 'Smith',
//     age: 32,
//     email: 'marysmith@hotmail.com',
//   },
//   {
//     firstName: 'Alex',
//     lastName: 'Johnson',
//     age: 45,
//     email: 'alex.johnson@yahoo.com',
//   },
//   {
//     firstName: 'Emily',
//     lastName: 'Davis',
//     age: 19,
//     email: 'emilydavis@gmail.com',
//   },
// ]);
// user.addProperty("mood", "happy")
// console.log(user);

//TODO:=========task-04=================
//  Викликати метод user.showUser() таким чином, щоб він вивів результатом  ({name: 'Bob', lastName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'})

// const obj = {
//   userName: 'Bob',
//   lastName: 'Lasso',
//   age: 50,
//   email: 'BodLasso@gmail.com',
// };

// user.showUser.call(obj);


//TODO:=========task-05=================
//  Викличте функцію showFullName у контексті об'єкта user

// function showFullName(message, number) {
//   console.log(`${message}, ${this.userName} ${this.lastName}, ${number}`);
// }

// showFullName.call(user, 'Hello', 10);
// showFullName.apply(obj, ['Hello', 20]);

//TODO:=========task-06=================
// Виправте помилки, щоб код працював

// const product = {
//   price: 5000,

//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(callback) {
//   callback();
// }

// callAction(product.showPrice.bind(product));
// //? answer

// const product = {
//   price: 5000,

//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(callback, contecst) {
//   callback.call(contecst);
// }

// callAction(product.showPrice, product);
