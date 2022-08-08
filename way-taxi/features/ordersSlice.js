import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchOrders = createAsyncThunk(
  "orders/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:4000/users/orders");
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  },
});

export default ordersSlice.reducer;
