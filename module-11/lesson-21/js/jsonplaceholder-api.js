const BASE_URL = "https://jsonplaceholder.typicode.com";
const END_POINT = "/posts";

const refs = {
  list: document.querySelector(".js-gallery"),
  loadMoreBtn: document.querySelector(".js-load-more-btn"),
};

document.addEventListener("DOMContentLoaded", renderPage);
refs.loadMoreBtn.addEventListener("click", onloadMoreBtnClick);

let page = 1;
const totalPost = 100;
const perPage = 7;
const lastPage = Math.ceil(totalPost / perPage);

async function getPost(page) {
  const { data } = await axios.get(`${BASE_URL}${END_POINT}`, {
    params: {
      _page: page,
      _limit: perPage,
    },
  });
  return data;
  //   .then(res=>res.data);
}

async function renderPage() {
  try {
    const respons = await getPost(page);
    const markup = respons
      .map(
        ({ id, title }) =>
          ` <li>
            ${id} - ${title}
            </li>
            `
      )
      .join("");

    refs.list.insertAdjacentHTML("beforeend", markup);

    if (respons.length < perPage) return;
    if (lastPage === page) return;

    refs.loadMoreBtn.classList.remove("is-hidden");
  } catch (error) {
    console.log(error);
  }
}

function onloadMoreBtnClick() {
  page += 1;

  if (lastPage === page) {
    alert("Sorry its all");
    refs.loadMoreBtn.classList.add("is-hidden");
    // refs.loadMoreBtn.style.display = 'none';
  }

  renderPage();
}
