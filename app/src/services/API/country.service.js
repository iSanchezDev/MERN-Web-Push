
import BaseService from './base.service';

class CountryService {

  async getCountries() {
    const endpoint = 'https://mock-countries.herokuapp.com/list/';
    return fetch(endpoint)
      .then(res => res.json())
      .catch(error => new Error(error))
      .then(response => response);
  }
}

export default new CountryService;
