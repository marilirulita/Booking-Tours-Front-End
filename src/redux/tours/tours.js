const ADD_TOUR = 'ADD_TOUR';
const REMOVE_TOUR = 'REMOVE_TOUR';
const GET_API_DATA_TOUR = 'GET_API_DATA_TOUR';

const initialState = [];

// Action Creators
const addTour = (payload) => ({
  type: ADD_TOUR,
  payload,
});

const removeTour = (payload) => ({
  type: REMOVE_TOUR,
  payload,
});

const getApiData = (payload) => ({
  type: GET_API_DATA_TOUR,
  payload,
});

const tourReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOUR:
      return [...state, action.payload];
    case REMOVE_TOUR:
      return state.filter((tour) => tour.id !== action.payload);
    case GET_API_DATA_TOUR:
      return [...action.payload];
    default:
      return state;
  }
};

export default tourReducer;