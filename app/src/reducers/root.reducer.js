import { combineReducers } from 'redux';
import notificationReducer from './notification.reducer';

export default combineReducers({
  notification: notificationReducer,
});
