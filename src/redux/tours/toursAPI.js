import {
  getApiDataTour, getApiDataTourDetail, addTour, removeTour,
} from './tours';

const user = JSON.parse(localStorage.getItem('user'));
const URL = 'https://tourify-app.herokuapp.com/tours';

// Fetch function to get all tour data from the API
export const fetchApiDataTours = () => async (dispatch) => {
  const result = await fetch(URL);
  const resultJson = await result.json();
  if (result.status === 200) {
    dispatch(getApiDataTour(resultJson));
  }
};

// Fetch function to get a single tour data from the API
export const GetToursAPI = (num) => async (dispatch) => {
  const response = await fetch(URL.concat('/').concat(num), {
    method: 'GET',
    headers: {
      Authorization: user.token,
    },
  });
  const tours = await response.json();
  dispatch(getApiDataTourDetail(tours));
};

// Fetch function to create a new tour
export const postTourApi = (newTour, token) => async (dispatch) => {
  const response = await fetch(URL, {
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
  if (response.status === 201) {
    dispatch(addTour(newTour));
  }
};

// Fetch function to delete a single tour data from the API
export const deleteTourApi = (id, token) => async (dispatch) => {
  console.log(id, token);
  const response = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  console.log(response);
  if (response.status === 204) {
    dispatch(removeTour(id));
  }
  // dispatch(removeTour(id));
};
