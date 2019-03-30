
import {
  SHOW_ADD_NOTIFICATION_VIEW
} from './../actions/types';

const initialState = {
  addNotification: false,
};


const viewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ADD_NOTIFICATION_VIEW:
      return {
        ...state,
        addNotification: action.state
      };
    default:
      return state
  }
};

export default viewsReducer;
