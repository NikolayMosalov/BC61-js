// ## 5. Функція startTimer повинна логувати кожен елемент масиву один раз на секунду. Коли черга дійде до останнього елемента масиву, продовжити логувати у зворотному порядку поки не дійде до першого елемента, потім зупинити процес.
function startTimer(array) {
  let index = 0;
  let reverse = false;

  const intervalId = setInterval(() => {
    console.log(array[index]);
    if (!reverse) {
      index += 1;
      if (index === array.length) {
        index -= 1;
        reverse = true;
      }
    } else {
      index -= 1;
      if (index < 0) {
        console.log("Finish");
        clearInterval(intervalId);
      }
    }
  }, 1000);
}

// Приклад виклику функції startTimer з масивом ['a', "b", 'c', "d", 'f']
startTimer(["a", "b", "c", "d", "f"]);
