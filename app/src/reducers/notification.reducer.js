
import {
  SET_NOTIFICATIONS
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
    default:
      return state
  }
};

export default notificationReducer;
