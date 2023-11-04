import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6543bfb301b5e279de20e540.mockapi.io/api';

export const getCars = createAsyncThunk(
  "cars/getAllCars",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/cars?limit=12&page=1');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadMore = createAsyncThunk(
  "cars/loadMore",
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/cars?limit=12&page=${page}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const addToFavorite = createAsyncThunk(
  "cars/addCar",
  async (car, { rejectWithValue }) => {
    try {
      if (car) {
        return car;
      }
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
)

export const removeFromFavorite = createAsyncThunk(
  "cars/removeCar",
  async (carId, { rejectWithValue }) => {
    try {
      if (carId) {
        return carId;
      }
    } catch (error) {
      rejectWithValue(error.message)
    }
  }
)

