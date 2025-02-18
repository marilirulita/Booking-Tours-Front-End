import {
  getApiDataTour, getApiDataTourDetail, removeTour, addTour,
} from './tours';

const URL = 'http://127.0.0.1:3000/tours';

export const fetchApiDataTours = () => async (dispatch) => {
  const result = await fetch(URL);
  const resultJson = await result.json();
  if (result.status === 200) {
    dispatch(getApiDataTour(resultJson));
  }
};

export const GetToursAPI = (num) => async (dispatch) => {
  const response = await fetch(URL.concat('/').concat(num), {
  });
  if (response.status === 201) {
    const tours = await response.json();
    dispatch(getApiDataTourDetail(tours));
  }
};

export const postTourApi = (newTour, token, userId, id) => async (dispatch) => {
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
    fetchApiDataTours();
  } else {
    const proTour = { ...newTour, userId, id };
    dispatch(addTour(proTour));
  }
};

export const deleteTourApi = (id, token) => async (dispatch) => {
  const response = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  if (response.status === 204) {
    dispatch(removeTour(id));
  } else {
    dispatch(removeTour(id));
  }
};
