import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

let allEvents = [];
const initialState = {
    data: [],
    loading: false,
    error: null
};

const eventsSlice = createSlice({
    name: "allEvents",
    initialState,
    reducers: {
        filterOnLocation: (state, action) => {
            !action.payload ?
                state.data =
                allEvents :
                state.data = allEvents.filter(item => {
                    return item.city === action.payload;
                });
        },
        filterOnCategory: (state, action) => {
            state.data = allEvents.filter(item => {
                return item.category === action.payload;
            });
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllEvents.pending, (state) => {
            console.log('pending');
            state.loading = true;
        })
        builder.addCase(fetchAllEvents.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            allEvents = current(state).data;
        })
    }
})

export const fetchAllEvents = createAsyncThunk(
    "allEvents/fetchAllEvents",
    async () => {
        const response = await fetch('http://localhost:5000/allEvents');
        const data = await response.json();
        return data;
    }
);

export const { filterOnLocation, filterOnCategory } = eventsSlice.actions;
export default eventsSlice.reducer;