import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    error: null
};

const citiesSlice = createSlice({
    name: "cities",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCities.pending, (state) => {
            console.log('pending');
            state.loading = true;
        })
        builder.addCase(fetchCities.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchCities.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    }
})

export const fetchCities = createAsyncThunk(
    "cities/fetchCities",
    async () => {
        const response = await fetch('http://localhost:5000/locations');
        const data = await response.json();
        return data.cities;
    }
);

export default citiesSlice.reducer;