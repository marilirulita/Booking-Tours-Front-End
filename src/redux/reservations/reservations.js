const ADD_RESERVATION = 'ADD_RESERVATION';
const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
const GET_API_DATA_RESERVATION = 'GET_API_DATA_RESERVATION';

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
      return [...action.payload];
    default:
      return state;
  }
};
