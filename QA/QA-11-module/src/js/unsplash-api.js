import axios from 'axios';

export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  constructor(perPage) {
    this.page = 1;
    this.query = null;
    this.perPage = perPage;
  }

  getPhotos() {
    return axios
      .get(`${this.#BASE_URL}/search/photos`, {
        params: {
          query: this.query,
          page: this.page,
          per_page: this.perPage,
          client_id: this.#API_KEY,
        },
      })
      .then(res => res.data);
  }
}
