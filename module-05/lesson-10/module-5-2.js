//* Модуль 5. Заняття 10. Прототипи та класи
//TODO:=========task-01=================
/**
 * Створи клас для калькулятора, який має такі методи:
 * - метод number, який набуває початкового значення для наступних операцій
 * - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 * - методи add, substruct, divide, multiply
 * Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 */

// class Calculator {

//   constructor() {
//     this.result = 0;
//   }

//   // result = 0;

//   number(num) {
//     this.result = num;
//     return this;
//   }

//   getResult() {
//     return this.result;
//   }

//   add(num) { 
//     this.result += num;
//     return this;
//   }
  
//   substruct(num) {
//     this.result -= num;
//     return this;
//   }

//   divide(num) {
//     this.result /= num;
//     return this;
//   }

//   multiply(num) {
//     this.result *= num;
//     return this;
//   }
// }

// const calculator = new Calculator();
// console.log(calculator);
 
// const res = calculator
//   .number(10)
//   .add(10)
//   .divide(2)
//   .multiply(4)
//   .substruct(5)
//   .getResult();

// console.log(res);

// const res2 = calculator
//   .number(20)
//   .substruct(40)
//   .multiply(-8)
//   .divide(160)
//   .add(20)
//   .getResult();

// console.log(res2);

//! Приватні властивості
//TODO:=========task-02=================
/**
 * Напиши клас Client який створює об'єкт з ​​властивостями login email.
 *
 * Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email
 */
// class Client {
// #login;
// #email;
  // 
// constructor(login, email) {
    // this.#login = login;
    // this.#email = email;
  // }
// 
  // get getLogin() {
  // console.log(this.#login)
  // }
// 
  // set changeLogin(newLogin) {
    // this.#login = newLogin;
  // }
// 
  // get getEmail() {
// console.log(this.#email)
  // }
  // 
  //  set changeEmail(newEmail) {
  //  this.#email = newEmail;
//  }
// }
// 
// const client = new Client("Mango", "mango@gmail.com")
// 
// client.login = 12343;
// console.log(client);


// client.changeEmail = 'mango555@gmail.com';
// console.log(client.getEmail);
// client.changeLogin = '12345';
// console.log(client.getLogin);
// 
//! Статичний метод
//TODO:=========task-04=================
/**
 * Напиши клас Notes який управляє колекцією нотаток у властивості items.
 * Нотатка - це об'єкт із властивостями text і priority.
 * Додай класу статичний метод Priopity, який буде повертати об'єкт із пріоритетами.
 * Додай методи
 * - addNote(note),
 * - removeNote(text)
 * - updatePriority(text, newPriority)
 */

// class Notes {

//   static Priority() {
//     return {
//       LOW: "low",
//       HIGHT: "hight",
//     };
//   }; 

//   constructor() {
//     this.items = [];
//   };

//   addNote(note) {
//     this.items.push(note);
//     console.log(this.items);
//   };

//   removeNote(noteName) {
//     const index = this.items.findIndex(({text}) => text === noteName);
//     console.log(index);
//     if (index !== -1) {
//       this.items.splice(index, 1);
//     console.log(this.items);
//     }
//   };

//   updatePriority({ text, newPriority }) {
//     const index = this.items.findIndex(item => item.text === text);
//     if (index !== -1) {
//       this.items[index].priority = newPriority;
//     }
//   };

// }

// const note1 = new Notes();
// console.log(note1);
// note1.addNote({ text: 'Купити хліб', priority: Notes.Priority().LOW });
// note1.addNote({ text: 'Сходити на практику', priority: Notes.Priority().HIGHT });
// console.table(note1.items);

// note1.removeNote('Купити хліб');
// console.table(note1.items);

// note1.updatePriority({ text: 'Сходити на практику', newPriority: Notes.Priority().LOW });
// console.table(note1.items);
// console.log(note1);
//! Практика наслідування у класах.
//TODO:=========task-05=================
/**
  |============Person================
  | Cтворіть клас `Person`, який містить наступні властивості:
  |  - `name` - ім'я людини;
  |  - `age`- вік людини;
  |  - `gender` - стать людини;
  |  - `email`- електронна пошта людини.
  |
  | ##### Крім того, клас `Person` має мати метод `getDetails()`, який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.
  |============================
*/

/**
  |=============Employee===============
  |Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  |  - salary - зарплата співробітника;
  |  - department - відділ, в якому працює співробітник.
  |  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.
  |============================
*/
