const ADD_RESERVATION = 'ADD_RESERVATION';
const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
const GET_API_DATA_RESERVATION = 'GET_API_DATA_RESERVATION';
const URL = 'http://127.0.0.1:3000/user_tours';

const initialState = [];

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

export const GetReservationsAPI = (id) => async (dispatch) => {
  const response = await fetch(URL.concat('/').concat(id), {
    method: 'GET',
  });
  const tours = await response.json();
  dispatch(getApiDataReservation(tours));
};
