import {
  createNotification,
  getNotificationById,
  updateNotification,
  deleteNotification,
  getNotifications
} from './notification.fetch';


describe(('NOTIFICATION CRUD'), () => {

  const notification = {
    _id: null,
    title: 'Testing API',
    body: 'Jest testing API Rest',
    icon: 'url'
  };

  test('Create', () => {

    return createNotification(notification).then(res => {
       expect(res.status).toBe('ok');
       expect(res.data).toBeDefined();
       expect(res.data._id).toBeDefined();
       expect(res.data.body).toBe(notification.body);
       expect(res.data.icon).toBe(notification.icon);
       expect(res.data.title).toBe(notification.title);
       notification._id = res.data._id; // Save _id
      });
  });

  test('Read', () => {

    return getNotificationById(notification).then(res => {
       expect(res.status).toBe('ok');
       expect(res.data).toBeDefined();
       expect(res.data._id).toBe(notification._id);
       expect(res.data.body).toBe(notification.body);
       expect(res.data.icon).toBe(notification.icon);
       expect(res.data.title).toBe(notification.title);
      });
  });

  test('Update', () => {

    return updateNotification(notification).then(res => {
       expect(res.status).toBe('ok');
       expect(res.data).toBeDefined();
       expect(res.data.message).toBe('updated');
      });
  });

  test('Delete', () => {

    return deleteNotification(notification).then(res => {
       expect(res.status).toBe('ok');
       expect(res.data).toBeDefined();
       expect(res.data.message).toBe('deleted');
      });
  });
});


describe(('LISTING NOTIFICATIONS'), () => {

  test('Get notifications list', () => {

    return getNotifications().then(res => {
       expect(res.status).toBe('ok');
       expect(res.data.length).toBeGreaterThanOrEqual(0);
      });
  });
});
