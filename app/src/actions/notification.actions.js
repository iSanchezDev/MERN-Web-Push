
import NotificationService from '../services/API/notification.service'


// Redux Pure functions
const setNotifications = (notifications) => ({
  type: 'SET_NOTIFICATIONS',
  notifications
});

/**
 * Sync and async action creators
 */
export const getNotifications = () => async dispatch => {
  try {
    const response = await NotificationService.getNotifications(id);
    dispatch(setNotifications(response.data));
  } catch (e) {
    console.error(e);
  }
};
