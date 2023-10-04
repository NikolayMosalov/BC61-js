// Напиши функціонал, який дозволить додавати улюблені страви у local storage і стилізувати кнопку задопомгою класу checked для того щоб при оновленні сторінки користувач кожного разу бачив, які страви були його улюбленими.
// В будь який момент страву можна видалити з улюблених, просто натиснувши на сердечко, ця дія має видалити клас checked з блоку сердечка та видалити страву з local storage
// Функція setFavoritesOnLoad має запускатися при вході на сторінку та додавати клас checked всім тим сердечкам, чиї id були у local storage в улюблених

const products = [
  {
    id: 1,
    title: "Salad",
    description: "Fresh & sweet",
    url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 2,
    title: "Dessert",
    description: "Fresh & sweet",
    url: "https://images.pexels.com/photos/907142/pexels-photo-907142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 3,
    title: "Sushi",
    description: "Fresh & sweet",
    url: "https://images.pexels.com/photos/792028/pexels-photo-792028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 4,
    title: "Pizza",
    description: "Fresh & sweet",
    url: "https://images.pexels.com/photos/4001871/pexels-photo-4001871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 5,
    title: "Fish",
    description: "Fresh & sweet",
    url: "https://images.pexels.com/photos/840216/pexels-photo-840216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

const LOCALE_KEY = "Locale food";
const listEl = document.querySelector(".products-list");
// const heart = listEl.querySelector("[data-heart]");

document.addEventListener("DOMContentLoaded", setFavoritesOnLoad);

function createMarkup(products) {
  const markup = products
    .map(({ id, title, description, url }) => {
      return `
          <li class="card-item" id="${id}">
             <div class="card__image">
                <img src="${url}" alt="${title}" />
             </div>
             <div class="card__info">
                <div class="car__info--title">
                   <h3>${title}</h3>
                   <p>${description}</p>
                </div>
                <div class="card__info--button">
                  <div data-heart>&#x2764;</div>
                </div>
             </div>
          </li>
    `;
    })
    .join("");

  listEl.innerHTML = markup;
}

function toggleFavourite(event) {
  const heart = event.target;
  const card = heart.closest(".card-item");
  const cardId = card.id;
  const favourites = getFavouritesFromLocalStorage();

  if (favourites.includes(cardId)) {
    const updateFavourites = favourites.filter((id) => id !== cardId);
    setFavouritesToLocalStorage(updateFavourites);
    heart.classList.remove("checked");
  } else {
    const updateFavourites = [...favourites, cardId];
    setFavouritesToLocalStorage(updateFavourites);
    heart.classList.add("checked");
  }
}

function setFavouritesToLocalStorage(value) {
  localStorage.setItem(LOCALE_KEY, JSON.stringify(value));
}

function getFavouritesFromLocalStorage() {
  const favourites = localStorage.getItem(LOCALE_KEY);
  return favourites ? JSON.parse(favourites) : [];
}

function setFavoritesOnLoad() {
  const favourites = getFavouritesFromLocalStorage();
  const hearts = document.querySelectorAll("[data-heart]");
  hearts.forEach((heart) => {
    const card = heart.closest(".card-item");
    const productId = card.id;

    if (favourites.includes(productId)) {
      heart.classList.add("checked");
    }
    heart.addEventListener("click", toggleFavourite);
  });
}

createMarkup(products);
