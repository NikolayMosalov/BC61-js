

export function createClock (rootSelector){
const markup = `<div class="clock__container">
<div class="clock__items js-clock-items">
  <div class="clock__item js-clock__hours">00</div>
  <div class="clock__item js-clock__minutes">00</div>
  <div class="clock__item js-clock__seconds">00</div>
</div>
</div>
`
rootSelector.insertAdjacentHTML('afterend', markup)
const clockEl = document.querySelector('.js-clock-items')
startClock(clockEl)

}

const timeZone = -new Date().getTimezoneOffset() / 60 
console.log(timeZone);

function startClock(rootSelector) {
setInterval(() => {
    const currentDate = Date.now()

const {hours, minutes, seconds} = convertMs(currentDate)

const hoursEl = rootSelector.querySelector('.js-clock__hours');
const minutesEl = rootSelector.querySelector('.js-clock__minutes');
const secondsEl = rootSelector.querySelector('.js-clock__seconds');

hoursEl.textContent = addLeadingZero(hours + timeZone);
minutesEl.textContent = addLeadingZero(minutes);
secondsEl.textContent = addLeadingZero(seconds);
}, 1000);    

}


function addLeadingZero(value) {
 return String(value).padStart(2, 0);
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }