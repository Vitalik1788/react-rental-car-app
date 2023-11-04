import { createSlice } from '@reduxjs/toolkit';
import { addToFavorite, getCars, loadMore, removeFromFavorite } from './carsOperation';
import { toast } from 'react-toastify';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    favorite: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getCars.fulfilled, (state, { payload }) => {
        return {
          ...state,
          items: payload,
          isLoading: false,
        }
        // state.items.push(payload);
        // state.isLoading = false;        
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
        toast.success("Car added to favorite")
      })
      .addCase(removeFromFavorite.fulfilled, (state, { payload }) => {
      state.favorite = state.favorite.filter((obj) => obj.id !== payload)
      })
      .addCase(loadMore.fulfilled, (state, { payload }) => {
        state.items.push(payload);
    })
  },
});

export const carsReducer = carsSlice.reducer;
