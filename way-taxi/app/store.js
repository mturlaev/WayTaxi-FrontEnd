import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import ordersSlice from "../features/ordersSlice";
import ratingAndComment from "../features/ratingAndComment";
import userSlice from "../features/userSlice";


export const store = configureStore({
  reducer: {
    user: userSlice,
    orders: ordersSlice,
    raitAndCom: ratingAndComment
  },
});