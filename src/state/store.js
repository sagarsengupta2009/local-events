import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from './eventsSlice';
import citiesReducer from "./citiesSlice";

export const store = configureStore({
    reducer: {
        events: eventsReducer,
        cities: citiesReducer
    }
});

export default store;