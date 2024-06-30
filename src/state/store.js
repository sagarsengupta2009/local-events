import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from './eventsSlice';

export const store = configureStore({
    reducer: {
        events: eventsReducer
    }
});

export default store;

// import { createStore, applyMiddleware } from 'redux';
// import reducer from './reducer';
// import { thunk } from 'redux-thunk';

// const store = createStore(reducer, applyMiddleware(thunk));

// export default store;