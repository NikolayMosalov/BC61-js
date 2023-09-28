// ## 2. Theme switcher
//
// - Використовуй html з файлу [themeSwitch.html](./themeSwitch.html)
// - Використовуй local storage для зберігання вибраної теми (dark / light)
//

const themeSwitcher = document.querySelector("#theme-switch");
const bodyEl = document.body;
themeSwitcher.addEventListener("click", onCheckBoxChange);
document.addEventListener("DOMContentLoaded", setThemeOnLoad);
// light theme is default, that's why themeSwitcher is unchecked
themeSwitcher.checked = false;

const LS_KEY = "Theme Switcher";

function savedLS(key, value) {
  localStorage.setItem(key, value);
}

function chengeClass(a, b) {
  bodyEl.classList.replace(a, b);
}

function chengeDarkTheme() {
  chengeClass("light", "dark");
  savedLS(LS_KEY, "dark");
}

function chengeLightTheme() {
  chengeClass("dark", "light");
  savedLS(LS_KEY, "light");
}

function onCheckBoxChange() {
  if (themeSwitcher.checked) {
    chengeDarkTheme();
  } else {
    chengeLightTheme();
  }

  // if you change theme to dark, add 'dark' class and remove previus, add this change to local storage
  // if you select light theme do the same work but add 'light' class
}

function setThemeOnLoad() {
  const savedData = localStorage.getItem(LS_KEY);
  if (savedData === "dark") {
    chengeClass("light", "dark");
    themeSwitcher.checked = true;
  } else {
    chengeClass("dark", "light");
  }

  // this helpful function should call every time when you update page, to check what theme was seted to local storage
  // you should get data from LS and set saved theme to body
  // don't forget about themeSwitcher, if current theme is dark, it should be checked
}
