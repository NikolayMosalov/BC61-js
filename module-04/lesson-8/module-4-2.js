//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].
// const getNewArray = (arr, pow) => arr.map((el) => Math.pow(el, pow));

// const res = getNewArray([1, 2, 3, 4, 5], 2);

// console.log("getNewArray :>> ", res);

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];
// const flatArray = (arr) => arr.flatMap(({ values }) => values);

// const res = flatArray(data);
// console.log(res);

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const checkAge = (array) => array.some(({ age }) => age < 20);

// const res = checkAge(people);
// console.log(res);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const checkEvenArray = (array) => array.every(number => number % 2 === 0);

// const numbers = [2, 4, 6, 8, 10];

// const res = checkEvenArray(numbers);
// console.log(res);

//TODO:=========task-05=================
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const oddNumberInArray = (array) => array.find(number => number % 2 !== 0);
// console.log('numbers: ', numbers);
// console.log('oddNumber: ', oddNumberInArray(numbers));

//TODO:=========task-06=================
// Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 4.

// const arr = [1, 2, 3, 4, 5];

// const getNumber = (array, value) => array.find(number => number > value);

// const res = getNumber(arr, 1);
// console.log('object :>> ', res);

//! sort
//TODO:=========task-07=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].
// const sortedArray = (array) => [...array].sort((a, b) => a - b);
// const numbersArray = [4, 2, 5, 1, 3];
//
// const res = sortedArray(numbersArray);
// console.log(res);
// console.log(numbersArray);
//TODO:===============task-08===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].
// const sortedArray = (array) => [...array].sort((a, b) => b.localeCompare(a));
// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const res = sortedArray(stringArray);
// console.log(res);
//
//TODO:===============task-09===============================
//  Відсортуйте масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19} за віком у порядку зростання. Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const ageSortedUsers = (array) => [...array]
//     .sort((a, b) => a.age - b.age)
//     .find(user => user.age === 27);

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const res = ageSortedUsers(users);
// console.log(res);

//! filter
//TODO:=========task-10=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const getAge = (array, value) => array.filter(({age}) => age > value);

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const res = getAge(user, 25);
// console.log('object :>> ', res);

//TODO:=========task-11=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];

// const sum = (arr) => arr.reduce((acc, number) => (acc += number), 0);

// const sum = (arr) =>
//   arr.reduce((acc, number) => {
//     acc.push(number * 2);
//     return acc;
//   }, []);

// const sum = (arr) => arr.map((number) => number * 2);

// const res = sum(numbers);
// console.log(res);

//TODO:=========task-12=================
// У вас є масив чисел, і вам потрібно знайти середнє значення цих чисел. Напишіть функцію, яка приймає масив чисел і повертає середнє значення.

const arr = [1, 2, 3, 4, 5];

// // const averageValue = (arr) =>
// //   arr.reduce((acc, number, idx, array) => {
// //     acc += number;
// //     if (idx === array.length - 1) {
// //       return acc / array.length;
// //     }
// //     return acc;
// //   }, 0);

// const averageValue = (arr) =>
//   arr.reduce((acc, number) => acc + number / arr.length, 0);

// const res = averageValue(arr);
// console.log(res);
