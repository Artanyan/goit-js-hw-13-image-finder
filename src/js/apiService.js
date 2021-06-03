import axios from 'axios';

export class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.key = '21926064-24ac70c74b5af685f398413a7';
  }

  async fetchItems() {
    axios.defaults.baseURL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
    const response = await axios.get(
      `&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`,
    );

    return response.data.hits;
  }
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }

  nextPage() {
    this.page += 1;
  }
}
