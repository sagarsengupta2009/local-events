import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    error: null
};

const eventsSlice = createSlice({
    name: "allEvents",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllEvents.pending, (state, action) => {
            console.log('pending');
            state.loading = true;
        })
        builder.addCase(fetchAllEvents.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
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

export default eventsSlice.reducer;