import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import ordersSlice from "../features/ordersSlice";


export const store = configureStore({
  reducer: {
    // user: todo,
    orders: ordersSlice,
  },
});