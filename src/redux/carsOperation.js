import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://6543bfb301b5e279de20e540.mockapi.io/api';


export const getCars = createAsyncThunk(
  "cars/getAllCars",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/cars');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)