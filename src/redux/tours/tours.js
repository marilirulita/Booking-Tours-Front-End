const ADD_TOUR = 'ADD_TOUR';
const REMOVE_TOUR = 'REMOVE_TOUR';
const GET_API_DATA_TOUR = 'GET_API_DATA_TOUR';
const URL = 'http://127.0.0.1:3000/tours';

const initialState = [];

// Action Creators
export const addTour = (payload) => ({
  type: ADD_TOUR,
  payload,
});

export const removeTour = (payload) => ({
  type: REMOVE_TOUR,
  payload,
});

export const getApiDataTour = (payload) => ({
  type: GET_API_DATA_TOUR,
  payload,
});

export const tourReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOUR:
      return [...state, action.payload];
    case REMOVE_TOUR:
      return state.filter((tour) => tour.id !== action.payload);
    case GET_API_DATA_TOUR:
      return [action.payload];
    default:
      return state;
  }
};

export const GetTeamsAPI = (num) => async (dispatch) => {
  const response = await fetch(URL.concat('/').concat(num), {
    method: 'GET',
  });
  const tours = await response.json();
  dispatch(getApiDataTour(tours));
};
