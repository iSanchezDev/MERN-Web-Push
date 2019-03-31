import {API_URL} from './config.services';

class BaseService {

  /**
   * Generic API call
   * @param {string} url with params
   */
  static async get(url) {

    const endpoint = API_URL + url;

    return fetch(endpoint)
      .then(res => res.json())
      .catch(error => new Error(error))
      .then(response => response);
  }

  /**
   * Generic API sender media type
   * @param {string} url
   * @param {object} data
   * @param {object} method
   * @param {object} signal = cancel // TODO
   */
  static async send(url, data = {}, method = 'POST', signal) {

    let params;

    if (data) {
      params = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    }

    const endpoint = API_URL + url;

    return fetch(endpoint, {method, ...params})
    .then(res => res.json())
    .catch(error => new Error(error))
    .then(response => response);
  }
}

export default BaseService;
