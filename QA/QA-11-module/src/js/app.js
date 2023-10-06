import { UnsplashAPI } from './unsplash-api';
import refs from './refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import createGalleryCard from '../templates/gallery-card.hbs';

const unsplashApi = new UnsplashAPI(12);
let isFirstLoad = true;
let counter = 1;

const observer = new IntersectionObserver(
  (entries, observer) => {
    if (entries[0].isIntersecting) {
      loadMoreData();
    }
  },
  {
    root: null,
    rootMargin: '600px',
    threshold: 1,
  }
);

refs.form.addEventListener('submit', onSubmitForm);

async function onSubmitForm(e) {
  e.preventDefault();

  isFirstLoad = true;

  const searchQuery = e.target.elements['user-search-query'].value.trim();
  unsplashApi.page = 1;

  if (!searchQuery) {
    return Notify.failure('Your query is empty!=)');
  }

  unsplashApi.query = searchQuery;

  try {
    const response = await unsplashApi.getPhotos();

    console.log(response.results.length);
    if (response.results.length === 0) {
      Notify.warning(`No results ${searchQuery}`);
      refs.list.innerHTML = '';
      return;
    }

    Notify.success(`We find ${response.total} images`);

    refs.list.innerHTML = createGalleryCard(response.results);

    if (response.total > unsplashApi.perPage) {
      observer.observe(refs.scrollTarget);
    }
  } catch (error) {
    Notify.failure('Oppps, something wrong!');
  }
}

async function loadMoreData() {
  unsplashApi.page += 1;

  try {
    const response = await unsplashApi.getPhotos();

    refs.list.insertAdjacentHTML(
      'beforeend',
      createGalleryCard(response.results)
    );

    if (unsplashApi.page === response.total_pages) {
      observer.unobserve(refs.scrollTarget);
      Notify.info(`We're sorry, but you've reached the end of search results.`);
    }
  } catch (error) {
    Notify.failure('Oppps, something wrong!');
  }
}

// async function loadMoreData() {
//   if (isFirstLoad) {
//     return (isFirstLoad = false);
//   }
//   unsplashApi.page += 1;
//   try {
//     const response = await unsplashApi.getPhotos();
//     refs.list.insertAdjacentHTML(
//       'beforeend',
//       createGalleryCard(response.results)
//     );
//     if (unsplashApi.page === response.total_pages) {
//       observer.unobserve(refs.scrollTarget);
//       Notify.info(`We’re sorry, but you’ve reached the end of search results.`);
//     }
//   } catch (error) {
//     Notify.failure('Oppps, something wrong!');
//   }
// }

// async function loadMoreData() {
//   try {
//     if (unsplashApi.page > 1) {
//       const response = await unsplashApi.getPhotos();
//       refs.list.insertAdjacentHTML(
//         'beforeend',
//         createGalleryCard(response.results)
//       );
//       if (unsplashApi.page === response.total_pages) {
//         observer.unobserve(refs.scrollTarget);
//         Notify.info(
//           `We’re sorry, but you’ve reached the end of search results.`
//         );
//       }
//     }
//     unsplashApi.page += 1;
//   } catch (error) {
//     Notify.failure('Oppps, something wrong!');
//   }
// }

// async function loadMoreData() {
//   unsplashApi.page += 1;
//   try {
//     if (unsplashApi.page > 2) {
//       unsplashApi.page = 1;
//       unsplashApi.page += counter;
//       const response = await unsplashApi.getPhotos();
//       counter += 1;
//       refs.list.insertAdjacentHTML(
//         'beforeend',
//         createGalleryCard(response.results)
//       );
//       if (unsplashApi.page === response.total_pages) {
//         observer.unobserve(refs.scrollTarget);
//         Notify.info(
//           `We're sorry, but you've reached the end of search results.`
//         );
//       }
//     }
//   } catch (error) {
//     Notify.failure('Oppps, something wrong!');
//   }
// }

// async function loadMoreData() {
//   unsplashApi.page += 1;

//   try {
//     if (unsplashApi.page > 2) {
//       const response = await unsplashApi.getPhotos();

//       refs.list.insertAdjacentHTML(
//         'beforeend',
//         createGalleryCard(response.results)
//       );

//       if (unsplashApi.page === response.total_pages) {
//         observer.unobserve(refs.scrollTarget);
//         Notify.info(
//           `We're sorry, but you've reached the end of search results.`
//         );
//       }
//     }
//   } catch (error) {
//     Notify.failure('Oppps, something wrong!');
//   }
// }
