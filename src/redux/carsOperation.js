import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCars = createAsyncThunk(
  'cars/getAllCars',
  async (page = 1, { rejectWithValue }) => {
    try {
      const url = new URL(
        'https://6543bfb301b5e279de20e540.mockapi.io/api/cars'
      );
      url.searchParams.append('page', page);
      url.searchParams.append('limit', 12);
      const { data } = await axios.get(`${url}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadMore = createAsyncThunk(
  'cars/loadMore',
  async (page=2, { rejectWithValue }) => {
    try {
      const url = new URL(
        'https://6543bfb301b5e279de20e540.mockapi.io/api/cars'
      );
      url.searchParams.append('page', page);
      url.searchParams.append('limit', 12);
      const { data } = await axios.get(`${url}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'cars/addCar',
  async (car, { rejectWithValue }) => {
    try {
      if (car) {
        return car;
      }
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const removeFromFavorite = createAsyncThunk(
  'cars/removeCar',
  async (carId, { rejectWithValue }) => {
    try {
      if (carId) {
        return carId;
      }
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
