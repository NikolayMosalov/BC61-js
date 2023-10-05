import { UnsplashAPI } from './unsplash-api';
import refs from './refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import createGalleryCard from '../templates/gallery-card.hbs';

const unsplashApi = new UnsplashAPI(12);
let firstLoad = false;


const observer = new IntersectionObserver(
  (entries, observer) => {
    if (entries[0].isIntersecting && firstLoad) {
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
  const searchQuery = e.target.elements['user-search-query'].value.trim();
  unsplashApi.page = 1;
  firstLoad = false;

  if (!searchQuery) {
    return Notify.failure('Your query is empty!=)');
  }

  unsplashApi.query = searchQuery;

  try {
    const response = await unsplashApi.getPhotos();

    Notify.success(`We find ${response.total} images`);

    refs.list.innerHTML = createGalleryCard(response.results)

    // if (response.total > unsplashApi.perPage) {
    //   observer.observe(refs.scrollTarget)
    // }
    observer.observe(refs.scrollTarget)
    firstLoad = true;

  } catch (error) {
    Notify.failure('Oppps, something wrong!');
  }
};

async function loadMoreData() {
  unsplashApi.page += 1;


  try {
    const response = await unsplashApi.getPhotos();

  
    refs.list.insertAdjacentHTML('beforeend', createGalleryCard(response.results));

    if (unsplashApi.page === response.total_pages) {
      
      observer.unobserve(refs.scrollTarget)
      Notify.info(`We're sorry, but you've reached the end of search results.`)
    }

  } catch (error) {
    Notify.failure('Oppps, something wrong!');
  }
 

}




