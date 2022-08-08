import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import ordersSlice from "../features/ordersSlice";
import userSlice from "../features/userSlice";


export const store = configureStore({
  reducer: {
    user: userSlice,
    orders: ordersSlice,
  },
});