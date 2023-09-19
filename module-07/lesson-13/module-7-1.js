// Модуль 7. Заняття 13. Поширення подій.

//TODO:=========task-01=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу html та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */

const listEl = document.querySelector('.js-accordion-list');

function onBtnClick(event) {
    const btn = event.target;
    if(btn.nodeName !== 'BUTTON') return;
    btn.nextElementSibling.classList.toggle('active');   
}

listEl.addEventListener('click', onBtnClick);

//TODO:=========task-02=======Pagination==========
/**
 * Викоритовуй шаблон пагінації з файлу html для розробки функціоналу пагінатора.
 * Використовуй поширення подій.Додавай клас`active` на поточну сторінку. Створи допоміжну функцію`updateActivePage`, яка повинна обновляти активний клас.
 * Функція`handleClick`повинна викликатися коли відбувається клік на елементі`pagination`.
 */

const ulElem = document.querySelector('.js-pagination');

ulElem.addEventListener('click', (e) => {
    if (e.target.nodeName !== "LI") return;

    const clickedElem = e.target;
    const activeElem = ulElem.querySelector('.active');

    if (clickedElem.dataset.type === "page") {
        activeElem.classList.remove('active');
        clickedElem.classList.add('active');
        return;
    }

    if (clickedElem.dataset.type === "prev" && activeElem.previousElementSibling.dataset.type === "page") {
        activeElem.classList.remove('active');
        activeElem.previousElementSibling.classList.add('active');
        return;
    }

    if (clickedElem.dataset.type === "next" && activeElem.nextElementSibling.dataset.type === "page") {
        activeElem.classList.remove('active');
        activeElem.nextElementSibling.classList.add('active');
    }
});
