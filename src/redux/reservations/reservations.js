const ADD_RESERVATION = 'ADD_RESERVATION';
const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
const GET_API_DATA_RESERVATION = 'GET_API_DATA_RESERVATION';
const URL = 'http://127.0.0.1:3000/user_tours';
const initialState = [];
const user = JSON.parse(localStorage.getItem('user'));
// Action Creators
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
      // console.log(`My data: ${action.payload.persons_number}`);
      return [...action.payload];
    default:
      return state;
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
    window.location.href = `/TourDetails/${data.tour_id}`;
  }
};

export const GetReservationsAPI = (id) => async (dispatch) => {
  const response = await fetch(URL.concat('/').concat(id), {
    method: 'GET',
  });
  const tours = await response.json();
  dispatch(getApiDataReservation(tours));
};
