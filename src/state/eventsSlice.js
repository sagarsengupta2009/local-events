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
        builder.addCase(fetchAllEvents.fulfilled, (state, action) => {
            state.data = action.payload;
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