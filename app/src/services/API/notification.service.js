
import BaseService from './base.service';

class NotificationService {

  constructor() {
    this.baseModuleUrl = '/notifications';
  }

  async getNotifications() {
    const url = this.baseModuleUrl;
    return await BaseService.get(url);
  }

  async saveNotification(data) {
    const url = this.baseModuleUrl;
    return await BaseService.send(url, data, 'POST');
  }

  async updateNotification(data) {
    const {title, body, icon} = data;
    const url = this.baseModuleUrl + `/${data._id}`;
    return await BaseService.send(url, {title, body, icon}, 'PUT');
  }

  async deleteNotification(id) {
    const url = this.baseModuleUrl + `/${id}` ;
    return await BaseService.send(url, null, 'DELETE');
  }
}

export default new NotificationService;
