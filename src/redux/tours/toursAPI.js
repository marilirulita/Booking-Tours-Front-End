import { getApiDataTour, getApiDataTourDetail } from './tours';

const URL = 'http://127.0.0.1:3000/tours';

// Fetch function to get all tour data from the API
export const fetchApiDataTours = () => async (dispatch) => {
  const result = await fetch(URL);
  const resultJson = await result.json();
  dispatch(getApiDataTour(resultJson));
};

// Fetch function to get a single tour data from the API
export const GetTeamsAPI = (num) => async (dispatch) => {
  const response = await fetch(URL.concat('/').concat(num), {
    method: 'GET',
  });
  const tours = await response.json();
  dispatch(getApiDataTourDetail(tours));
};
