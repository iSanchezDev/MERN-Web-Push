
import CountryService from '../services/API/country.service'


const setCountries = (countries) => ({
  type: 'SET_COUNTRIES',
  countries
});


export const getCountries = () => async dispatch => {
  try {
    const response = await CountryService.getCountries();
    dispatch(setCountries(response));
  } catch (e) {
    console.error(e);
  }
};
