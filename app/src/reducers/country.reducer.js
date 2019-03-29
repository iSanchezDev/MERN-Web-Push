
import {
  SET_COUNTRIES
} from './../actions/types';

const initialState = [];


const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return action.countries;
    default:
      return state
  }
};

export default countryReducer;
