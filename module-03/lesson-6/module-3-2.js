//!  Операції spread і rest
//TODO:============task-1=========================
// Припустимо, є два масиви об'єктів:
// Необхідно створити новий масив об'єктів, що буде містити всі об'єкти з обох масивів, але без дублів.
// Тобто об'єкти з однаковим значенням ключа "id" повинні бути об'єднані в один об'єкт.

// const arr1 = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Mary' },
//   { id: 3, name: 'Bob' },
// ];

// const arr2 = [
//   { id: 2, name: 'Mary1' },
//   { id: 4, name: 'Jane' },
//   { id: 5, name: 'Tom' },
// ];

// function uniq(array1, array2) {
//     const union = [...array1, ...array2];
//     const newObject = {};
//     for (const item of union) {
//         newObject[item.id] = item;
//     }
//     return Object.values(newObject);
// }

// console.log(uniq(arr1, arr2));



//TODO:============task-2=========================
// Напишіть функцію updateObject, яка приймає об'єкт та повертає
// новий об'єкт без зазначених параметрів
// Очікуваний результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}
// function updateObject(obj, ...toDelete) {
//     const newObj = {...obj};
//     for(const key of toDelete) {
//         delete newObj[key];
//     }
//     return newObj;
//     console.log(toDelete);
// }


// console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b', 'a')); // {c: 3}

//! Деструктуризація об'єктів
//TODO:============task-3=================================================================
// Напишіть функцію createPerson(), яка приймає об'єкт параметрів з наступними властивостями:

// firstName (рядок) - ім'я персони
// lastName (рядок) - прізвище персони
// age (число) - вік персони
// gender (рядок) - стать персони
// occupation (рядок) - робота персони

// Функція повинна повернути об'єкт, що містить ці властивості. Якщо якась властивість не передається як параметр, то вона повинна мати значення за замовчуванням. Наприклад, якщо age не передається, то його значення за замовчуванням повинно бути 18.

// Крім того, якщо передається додаткова властивість, яку не передбачено в списку, то вона повинна бути проігнорована.
function createPerson(obj = {}) {
    const { firstName, lastName, age = 18, gender, occupation} = obj;
    return { firstName, lastName, age, gender, occupation };
}
 



// Приклади виклику функції та їх очікувані результати:
const person1 = createPerson({
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  gender: 'male',
  occupation: 'developer',
});
// console.log(person1);
// Очікуваний результат: { firstName: 'John', lastName: 'Doe', age: 25, gender: 'male', occupation: 'developer' }

const person2 = createPerson({
  firstName: 'Jane',
  lastName: 'Doe',
  gender: 'female',
});
// console.log(person2);
// Очікуваний результат: { firstName: 'Jane', lastName: 'Doe', age: 18, gender: 'female', occupation: undefined }

const person3 = createPerson({
  firstName: 'Bob',
  lastName: 'Smith',
  age: 30,
  gender: 'male',
  occupation: 'teacher',
  hobby: 'reading',
});
console.log(person3);

// Очікуваний результат: { firstName: 'Bob', lastName: 'Smith', age: 30, gender: 'male', occupation: 'teacher' }

//! Деструктуризація масивів
// TODO:=========task-4==============
// Потрібно перебрати об'єкти та вивести ім'я кращого співробітника

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

//! Паттерн «Об'єкт параметрів»
// TODO:=========task-5==============
// Перепеши функцію використовуючи Паттерн «Об'єкт параметрів».

// const logFunction = function (
//   firstName,
//   lastName,
//   age,
//   gender,
//   userEmail,
//   userPhoneNumber
// ) {
//   console.log(firstName, lastName, age, gender, userEmail, userPhoneNumber);
// };

// logFunction(
//   'Amelia',
//   'Burgess',
//   30,
//   'female',
//   'apjez@eh.aq',
//   '(096) 35-21-476'
// );

// logFunction()
