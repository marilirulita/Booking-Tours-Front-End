const ADD_RESERVATION = 'ADD_RESERVATION';
const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
const GET_API_DATA_RESERVATION = 'GET_API_DATA_RESERVATION';
const URL = 'https://tourify-app.herokuapp.com/user_tours';
const initialState = [];
const user = JSON.parse(localStorage.getItem('user'));

export const addReservation = (payload) => ({
  type: ADD_RESERVATION,
  payload,
});

export const removeReservation = (payload) => ({
  type: REMOVE_RESERVATION,
  payload,
});

export const getApiDataReservation = (payload) => ({
  type: GET_API_DATA_RESERVATION,
  payload,
});

export const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION:
      return [...state, action.payload];
    case REMOVE_RESERVATION:
      return state.filter((reservation) => reservation.id !== action.payload);
    case GET_API_DATA_RESERVATION:
      return [...action.payload];
    default:
      return state;
  }
};

export const GetReservationsAPI = (token) => async (dispatch) => {
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });
  const tours = await response.json();
  if (response.status === 200) {
    dispatch(getApiDataReservation(tours));
  }
};

export const PostReservationsAPI = (data) => async () => {
  const reservationData = {
    user_id: user.user.user_id,
    tour_id: data.tour_id,
    reservation_date: data.reservation_date,
    persons_number: data.persons_number,
  };
  const response = await fetch(URL, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: user.token,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(reservationData),
  });
  if (response.status === 201) {
    GetReservationsAPI();
  }
};

export const deleteReservationApi = (id) => async (dispatch) => {
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: user.token,
    },
  });
  dispatch(removeReservation(id));
};
