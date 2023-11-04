import { createSlice } from '@reduxjs/toolkit';
import { addToFavorite, getCars } from './carsOperation';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: null,
    favorite: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(getCars.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getCars.rejected, (state, {payload}) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addToFavorite.fulfilled, (state, { payload }) => {
        state.favorite.push(payload);
    })
  },
});

export const carsReducer = carsSlice.reducer;
