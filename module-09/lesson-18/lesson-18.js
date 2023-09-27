//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {
//   return 'hello world';
// }

// function greet() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('hello world');
//         }, 2000)
//     })
// }

// greet().then(console.log).catch(console.log)

//TODO:====================02==========================
/**
 * Перероби код так, щоб усі дані збиралися
 * одноразово і приходили у вигляді масиву
 */

// const getData = () =>
//     new Promise((res) => {
//         setTimeout(() => {
//             const data = 1;
//             //   console.log(data);
//             res(data);
//         }, 1000);
//     });

// const getNewData = () =>
//     new Promise((res) => {
//         setTimeout(() => {
//             const data = 2;
//             //   console.log(data);
//             res(data);
//         }, 1000);
//     });

// const getAnotherData = () =>
//     new Promise((res) => {
//         setTimeout(() => {
//             const data = 3;
//             //   console.log(data);
//             res(data);
//         }, 1000);
//     });

// const getLastData = () =>
//     new Promise((res) => {
//         setTimeout(() => {
//             const data = 4;
//             //   console.log(data);
//             res(data);
//         }, 1000);
//     });
//? var - 1
// const arr = [];

// getData()
//   .then((respons) => {
//     arr.push(respons);

//     return getNewData();
//   })
//   .then((respons) => {
//     arr.push(respons);

//     return getAnotherData();
//   })
//   .then((respons) => {
//     arr.push(respons);

//     return getLastData();
//   })
//   .then((respons) => {
//     arr.push(respons);
//     console.log(arr);
//   });

//? var - 2

// Promise
//     .all([getData(), getNewData(), getAnotherData(), getLastData()])
//     .then(console.log);

//TODO:====================03==========================
/**
 * Функція countWithDelay приймає приймає 3 аргументи:
 * 1) кількість секунд перед тим як спрацює ф-ція logCount
 * 2) скільки разів має відпрацювати logCount
 * 3) затримка між викликами ф-ції
 *
 * logCount повинна логувати кількість викликів
 */

// function countWithDelay(delay, times, interval){
//     let count = 0;

//     function logCount(){
//         count +=1;

//         if(count === times) return;

//         setTimeout(logCount, interval);
//         console.log(count);
//     }
//     createPromise(delay, logCount);
// }

// function createPromise(delay, callback){
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), delay);
//     }).then(() => callback());
// }

// countWithDelay(1000, 5, 3000);

//TODO:====================04==========================
/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */

const value = prompt("Paste value");
checkValue(value).then(console.log).catch(console.log);

function checkValue(value) {
  return new Promise((resolve, reject) => {
    if (!value || isNaN(value)) {
      return reject("error");
    }
    if (value % 2 === 0) setTimeout(() => resolve("even"), 1000);
    setTimeout(() => resolve("odd"), 2000);
  });
}
