/* eslint-disable */

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import { tourReducer } from './tours/tours';
import { reservationReducer } from './reservations/reservations';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tours: tourReducer,
    reservations: reservationReducer,
  },
});
