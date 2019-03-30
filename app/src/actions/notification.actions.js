
import NotificationService from '../services/API/notification.service'


// Redux Pure functions
const setNotifications = (notifications) => ({
  type: 'SET_NOTIFICATIONS',
  notifications
});

const pushNotifications = (notifications) => ({
  type: 'PUSH_NOTIFICATIONS',
  notifications
});

/**
 * Sync and async action creators
 */
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
    dispatch(pushNotifications(response.data));
  } catch (e) {
    console.error(e);
  }
};
