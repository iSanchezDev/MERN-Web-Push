
import {
  SET_NOTIFICATIONS,
  PUSH_NOTIFICATION,
  DELETE_NOTIFICATIONS
} from './../actions/types';

const initialState = {
  list: []
};


const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATIONS:
      return {
        ...state,
        list: action.notifications
      };
      case PUSH_NOTIFICATION:
      return {
        ...state,
        list: state.list.concat(action.notifications)
      };
      case DELETE_NOTIFICATIONS:
      return {
        ...state,
        list: _.filter(state.list, item => item._id !== action.notificationId)
      };
    default:
      return state
  }
};

export default notificationReducer;
