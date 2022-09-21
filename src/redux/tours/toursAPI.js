import {
  getApiDataTour, getApiDataTourDetail, addTour, removeTour,
} from './tours';

const URL = 'http://127.0.0.1:3000/tours';

// Fetch function to get all tour data from the API
export const fetchApiDataTours = (token) => async (dispatch) => {
  const result = await fetch(URL, {
    headers: {
      Authorization: token,
    },
  });
  const resultJson = await result.json();
  dispatch(getApiDataTour(resultJson));
};

// Fetch function to get a single tour data from the API
export const GetToursAPI = (num) => async (dispatch) => {
  const response = await fetch(URL.concat('/').concat(num), {
    method: 'GET',
  });
  const tours = await response.json();
  dispatch(getApiDataTourDetail(tours));
};

// Fetch function to create a new tour
export const postTourApi = (newTour, token) => async (dispatch) => {
  await fetch(URL, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(newTour),
  });
  dispatch(addTour(newTour));
};

// Fetch function to delete a single tour data from the API
export const deleteTourApi = (id, token) => async (dispatch) => {
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      id,
    }),
  });
  dispatch(removeTour(id));
};
