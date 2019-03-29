import { combineReducers } from 'redux';
import viewsReducer from './views.reducer';
import countryReducer from './country.reducer';
import notificationReducer from './notification.reducer';

export default combineReducers({
  views: viewsReducer,
  countries: countryReducer,
  notification: notificationReducer,
});
