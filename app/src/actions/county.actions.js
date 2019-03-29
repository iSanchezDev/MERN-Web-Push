
import CountryService from '../services/API/country.service'


// Redux Pure functions
const setCountries = (countries) => ({
  type: 'SET_COUNTRIES',
  countries
});

/**
 * Sync and async action creators
 */
export const getCountries = () => async dispatch => {
  try {
    const response = await CountryService.getCountries();
    dispatch(setCountries(response));
  } catch (e) {
    console.error(e);
  }
};
