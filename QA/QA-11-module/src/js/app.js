import { UnsplashAPI } from './unsplash-api';
import refs from './refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import createGalleryCard from '../templates/gallery-card.hbs';

const unsplashApi = new UnsplashAPI(12);

refs.form.addEventListener('submit', onSubmitForm);

async function onSubmitForm(e) {
  e.preventDefault();
  const searchQuery = e.target.elements['user-search-query'].value.trim();

  if (!searchQuery) {
    return Notify.failure('Your query is empty!=)');
  }

  unsplashApi.query = searchQuery;

  try {
    const response = await unsplashApi.getPhotos();

    Notify.success(`We find ${response.total} images`);

    refs.list.innerHTML = createGalleryCard(response.results)

  } catch (error) {
    Notify.failure('Oppps, something wrong!');
  }
}




