import { getApiDataTour } from './tours';

// Here is the file for the fetch request to the API
export const fetchApiDataTours = () => async (dispatch) => {
  const result = await fetch(
    'http://localhost:3000/tours',
  );
  const resultJson = await result.json();
  dispatch(getApiDataTour(resultJson));
};

export const page = 'This is a page';
