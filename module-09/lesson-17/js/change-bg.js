// ## 3. Напишіть changeBackground() встановлює фонове зображення на body. Викоритовуй масив картинок, які повинні кожні 5 секунд змінюватися, тобто через кожні 5 секунд має викликатися функція changeBackground. Якщо ми дійшли до кінця масива, то починай спочатку. Для цього створи лічильник, аби слідкувати, яка картинка зараз показується.

// Стиль для body для плавного переходу

const images = [
  'url("https://picsum.photos/id/1015/1920/1080")',
  'url("https://picsum.photos/id/1018/1920/1080")',
  'url("https://picsum.photos/id/1025/1920/1080")',
];

const body = document.body;
let counter = 0;

body.style.backgroundImage = images[images.length - 1];

function changeBackground() {
  body.style.backgroundImage = images[counter];
  counter += 1;
  if (images[counter] === undefined) {
    counter = 0;
  }
  //   counter = (counter + 1) % images.length;
}

setInterval(changeBackground, 2000);
