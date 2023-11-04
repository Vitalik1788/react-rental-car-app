import { createSlice } from '@reduxjs/toolkit';
import { addToFavorite, getCars, removeFromFavorite } from './carsOperation';

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
      .addCase(removeFromFavorite.fulfilled, (state, { payload }) => {
      state.favorite = state.favorite.filter((obj) => obj.id !== payload)
    })
  },
});

export const carsReducer = carsSlice.reducer;
