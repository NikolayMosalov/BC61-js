// - Використовуй html з файлу [counter.html](./counter.html)
// - Отримай всі кнопки з атрибутом data-action
// - До відповідної кнопки, з відповідним data-action застосовувуй свій функціонал:
// - При кліку на кнопку data-action="save" зберігай значення counter у local storage
// - При кліку на кнопку data-action="clear-save" видаляй збережене значення counter з local storage
// - При кліку на кнопку data-action="decrease" зменшуй counter на 1
// - При кліку на кнопку data-action="increase" збільшуй counter на 1
// - При кліку на кнопку data-action="reset" роби counter = 0

const controlsBtnEl = document.querySelector('.js-counter-controls');

const saveBtnEl = document.querySelector('.js-save');

const displayEl = document.querySelector('.js-counter-value');

controlsBtnEl.addEventListener('click', onControlsBtnClick);
saveBtnEl.addEventListener('click', onSaveBtnClick);

document.addEventListener('DOMContentLoaded', renderPage);

let counter = 0;
const LS_KEY = "counter";

function onControlsBtnClick(e){
    const clickBtn = e.target.dataset.action;

    if(clickBtn === "decrease"){
        counter -= 1;
    }
    if(clickBtn === "increase"){
        counter += 1;
    }
    if(clickBtn === "reset"){
        counter = 0;
    }

    showDisplay();   
}

function onSaveBtnClick(e){

    const clickBtn = e.target.dataset.action;

    if(clickBtn === "save"){
        localStorage.setItem(LS_KEY, counter);
    }
    
    if(clickBtn === "clear-save"){
        localStorage.removeItem(LS_KEY);
    }
}

function showDisplay(){
    displayEl.textContent = counter;
}

function renderPage(){
    const savedData = localStorage.getItem(LS_KEY);

    if(savedData){
        counter = savedData;
        showDisplay();
    }
}
