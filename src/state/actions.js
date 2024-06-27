import { FETCH_EVENT_REQUEST, FETCH_EVENT_SUCCESS, FETCH_EVENT_FAILURE } from './actionTypes';
import store from './store';

export const fetchEventRequest = () => ({
    type: FETCH_EVENT_REQUEST
});

export const fetchEventSuccess = (data) => ({
    type: FETCH_EVENT_SUCCESS,
    payload: data
});

export const fetchEventFailure = (error) => ({
    type: FETCH_EVENT_FAILURE,
    payload: error
});

// export const fetchData = () => {
//     return async (dispatch) => {
//         store.dispatch(fetchEventRequest());
//         try {
//             const response = await fetch('https://api.example.com/data');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch data');
//             }
//             const data = await response.json();
//             store.dispatch(fetchEventSuccess(data));
//         } catch (error) {
//             store.dispatch(fetchEventFailure(error.message));
//         }
//     };
// };