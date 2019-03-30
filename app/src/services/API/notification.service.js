
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
}

export default new NotificationService;
