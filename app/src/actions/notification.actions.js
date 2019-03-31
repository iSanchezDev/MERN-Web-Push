
import NotificationService from '../services/API/notification.service'
import {message} from 'antd';

// Redux Pure functions
const setNotifications = (notifications) => ({
  type: 'SET_NOTIFICATIONS',
  notifications
});

const pushNotifications = (notification) => ({
  type: 'PUSH_NOTIFICATIONS',
  notification
});

const sliceNotifications = (notificationId) => ({
  type: 'DELETE_NOTIFICATIONS',
  notificationId
});


export const getNotifications = () => async dispatch => {
  try {
    const response = await NotificationService.getNotifications();
    dispatch(setNotifications(response.data));
  } catch (e) {
    console.error(e);
  }
};

export const saveNotification = (data) => async dispatch => {
  try {
    const response = await NotificationService.saveNotification(data);

    if (response.status === 'error') {
      message.error('Error saving ', data.title, );
      return
    }

    dispatch(pushNotifications(response.data));
  } catch (e) {
    message.error('Error saving ', data.title, );
  }
};

export const deleteNotification = (id) => async dispatch => {
  try {
    const response = await NotificationService.deleteNotification(id);

    if (response.status === 'error') {
      message.error('Error on delete');
      return
    }

    dispatch(sliceNotifications(id));
  } catch (e) {
    message.error('Error on delete', );
  }
};
