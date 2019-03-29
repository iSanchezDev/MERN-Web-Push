import { combineReducers } from 'redux';
import countryReducer from './country.reducer';
import notificationReducer from './notification.reducer';

export default combineReducers({
  countries: countryReducer,
  notification: notificationReducer,
});
