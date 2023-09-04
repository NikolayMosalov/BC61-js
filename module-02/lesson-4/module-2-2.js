// ! function

//TODO:=========task-01=================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив

// const numbers = [2, 5, 35, 56, 12, 1, 24, 7, 80, 3];
// 
// function findSmallerNumber(arr) {
    // 
    // if (!Array.isArray(arr)) {
        // return console.log( 'not array')
    // }
// 
    // let min = arr[0];
// 
    // for (const number of arr) {
        // if (number < min) {
            // min = number;
        // }
    // }
    // return min;
// }
// 
// console.log(findSmallerNumber(numbers));
// 
//TODO:============task-02==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа
// function min(a, b) {
    // if (typeof a !== "number" || typeof b !== "number") {
        // return console.log("not a number")
    // }
    // if (a < b) {
        // return a
    // }
    // return b
// return a < b ? a : b
// }
// const result = min(16, 2);
// console.log(result);
// 
//TODO:============task-03==============
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// const musicGenres = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];

//TODO:=============task-04=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

//TODO:=========task-05=================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// console.log(calculateAverage(10, 10, 20, 200));

//TODO:============task-06==============
// Знайти перший парний елемент масиву, який більший за 10, використовуючи цикл for з оператором break та continue.

// const numbers = [5, 11, 21, 8, 7, 15, 11, 11];

// console.log(getOddNumbers(numbers));

//TODO:=============task-07=================
// Написати функцію, яка приймає рядок і повертає кількість голосних літер у цьому рядку.

// const str = 'This is a new line';

// console.log(countVowels(str));
