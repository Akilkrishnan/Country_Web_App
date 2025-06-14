import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../../Countries/Slices/Country_Slices.jsx';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  }
});

export default store;
