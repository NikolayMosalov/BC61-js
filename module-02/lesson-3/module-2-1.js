// ! Масиви
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-рол');
// const index = styles.indexOf('Блюз');
// styles[index] = 'Класика';
// styles.shift();
// styles.unshift('Реп', 'Реггі');
// console.log(styles.includes('Класика') && styles.includes('Реп'));

// const i = styles.indexOf('Класика');
// styles.splice(i, 1);
// console.log(i);
// console.log(styles);

// const newArray = ['Рок', 'Поп'];
// const newArray1 = ['Фонк'];
// const resultArray = styles.concat(newArray, newArray1);
// console.log(resultArray);

//TODO:=========task-1=================
//Перетворити рядок, що містить слова, розділені комами, в масив слів і вивести кожне слово в окремому рядку.

// const str = 'JavaScript, HTML, CSS, React';

// const strArray = str.split(', ')

// for (const item of strArray) {
// console.log(item);
// }

//TODO:=========task-2=================
// Знайти кількість слів у рядку, використовуючи методи масивів та цикл for...of.

// const message = 'JavaScript is a popular programming language.';
// const words = message.split(' ');
//                       const total = words.length;
// let total = 0;
// for (const word of words) {
// total += 1
// }
//  console.log(total);
//
//TODO:=========task-3=================
// Об'єднати масив слів в рядок, розділений комами та пробілами.

// const words = ['JavaScript', 'HTML', 'CSS', 'React'];
// const str = words.join(', ')
// console.log(str);

//TODO:=========task-4=================
// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." .Результат повинен бути розділений комами та пробілами.(використати indexOf)

// const arr = ["JavaScript", "HTML", "CSS", "React"];
// const substring = "S";
// // console.log(arr[1].indexOf(substring));
// const filteredArr = [];
// for (const item of arr) {
//   if (item.indexOf(substring) !== -1) {
//     filteredArr.push(item);
//   }
// }
// console.log(filteredArr);
// const joinedArray = filteredArr.join(', ');
// console.log(
//   `Масив елементів, що містять підстроку ${substring} : ${joinedArray}`
// );

//TODO:=========task-5=================
// Перевірити, чи містить масив заданий елемент. Якщо містить, видалити його, якщо ні - додати в кінець масиву.

// const arr = ['JavaScript', 'HTML', 'CSS'];
// const elem = 'SS';
// const index = arr.indexOf(elem);

// let found = false;

// for (let index = 0; index < arr.length; index += 1) {
//   if (arr[index] === elem) {
//     arr.splice(index, 1);
//     found = true;
//     break;   }
// }

// if (!found) {
//   arr.push(elem); }

// console.log(arr);



// const index = arr.indexOf(elem);
// index === -1 ? arr.push(elem) : arr.splice(index, 1);

// arr.includes(elem) ? arr.splice(arr.indexOf(elem), 1) :  arr.push(elem);


// console.log(arr);
