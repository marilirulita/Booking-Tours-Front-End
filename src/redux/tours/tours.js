const ADD_TOUR = 'ADD_TOUR';
const REMOVE_TOUR = 'REMOVE_TOUR';
const GET_API_DATA_TOUR = 'GET_API_DATA_TOUR';
const GET_API_DATA_TOUR_DETAIL = 'GET_API_DATA_TOUR_DETAIL';

const initialState = [
  {
    id: 1000, title: 'Tour a La Paz', duration: 2, city: 'La Paz, BCN', cost: 200, photo: 'https://a.cdn-hotels.com/gdcs/production50/d1297/745b41fa-f796-425a-8e14-e0d41adabd9e.jpg?impolicy=fcrop&w=800&h=533&q=medium', user_id: 1, description: 'Vaje a la Paz por la costa de Baja California Sur',
  },
  {
    id: 1001, title: 'Viaje a Puerto Penasco', duration: 2, city: 'Puerto Penasco', cost: 250, photo: 'https://www.tribunadesanluis.com.mx/incoming/ax8luc-penasco/ALTERNATES/LANDSCAPE_768/pe%C3%B1asco', user_id: 1, description: 'Tour a Puerto Penasco por la costa de Sonora',
  },
];

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

export const getApiDataTourDetail = (payload) => ({
  type: GET_API_DATA_TOUR_DETAIL,
  payload,
});

export const tourReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOUR:
      return [...state, action.payload];
    case REMOVE_TOUR:
      return state.filter((tour) => tour.id !== action.payload);
    case GET_API_DATA_TOUR:
      return [...state, ...action.payload];
    case GET_API_DATA_TOUR_DETAIL:
      return [action.payload];
    default:
      return state;
  }
};
