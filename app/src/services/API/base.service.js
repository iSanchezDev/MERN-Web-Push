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
   * @param {object} body
   * @param {object} method
   * @param {object} signal = cancel
   */
  static async send(url, body = {}, method = 'POST', signal) {

    const endpoint = API_URL + url;

    return fetch(endpoint, {
      method,
      signal,
      mode: 'cors',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .catch(error => new Error(error))
    .then(response => response);
  }
}

export default BaseService;
