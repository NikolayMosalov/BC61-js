import { UnsplashAPI } from './unsplash-api';

const unsplashApi = new UnsplashAPI(20);

unsplashApi.getPhotos().then(console.log);
