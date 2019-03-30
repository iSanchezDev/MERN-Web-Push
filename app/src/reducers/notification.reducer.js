
import {
  SET_NOTIFICATIONS,
  PUSH_NOTIFICATION
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
    default:
      return state
  }
};

export default notificationReducer;
