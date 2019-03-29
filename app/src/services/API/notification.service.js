
import BaseService from './base.service';

class NotificationService {

  constructor() {
    this.baseModuleUrl = '/notifications';
  }

  async getNotifications() {
    const url = this.baseModuleUrl;
    return await BaseService.get(url);
  }

}

export default new NotificationService;
