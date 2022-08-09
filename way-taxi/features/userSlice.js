import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";


const initialState = {
  signingUp: false,
  signingIn: false,
  error: null,
  loading: false,
  user: null,
  token: null,
  email: null,
  isActivated: null,
};

export const registration = createAsyncThunk(
  "user/registration",
  async (
    { email, password, role, phone, name, surname, driversLicense },
    thunkAPI
  ) => {
    try {
      console.log(email, password, role, phone, name, surname, driversLicense )
      const response = await axios.post(
        "http://localhost:4000/registration",
        { email, password, role, phone, name, surname, driversLicense },
        axiosConfig1
      );
      const data = await response.data;
      return data
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

let axiosConfig1 = {
  headers: {
    "Content-Type": "application/json",
  },
};

// export const getToken = createAsyncThunk('getToken', () => {
//     localStorage.getItem("token")
// })
// export const getUser = createAsyncThunk("getUser", () => {
//   localStorage.getItem("user");
// });
// export const getEmail = createAsyncThunk("getEmail", () => {
//   localStorage.getItem("email");
// });
// export const getIsActivated = createAsyncThunk("getIsActivated", () => {
//   localStorage.getItem("isActivated");
// });

export const logining = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        { email, password },
        axiosConfig1
      );
      if (data.message) {
        return thunkAPI.rejectWithValue(data.message);
      } else {
        localStorage.setItem("isActivated", data?.user?.isActivated);
        localStorage.setItem("user", data.user.id);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("token", data.accessToken);
        return thunkAPI.fulfillWithValue(response.data);
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  localStorage.clear();
});
let object = {};

if (typeof window !== "undefined") {
  object = {
    users: localStorage.getItem("user"),
    token: localStorage.getItem("token"),
    email: localStorage.getItem("email"),
    isActivated: localStorage.getItem("isActivated"),
  };
}
console.log(object.usdfs);


export const userSlice = createSlice({
  name: "users/loginAndRegister",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.signingUp = true;
        state.loading = false;
      })
      .addCase(registration.rejected, (state, action) => {
        state.signingUp = false;
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(registration.pending, (state, action) => {
        state.loading = true;
        state.signingUp = false;
      })

      .addCase(logining.fulfilled, (state, action) => {
        state.signingIn = true;
        state.error = null;
        state.token = action.payload.accessToken;
        state.isActivated = action.payload.user.isActivated;
        state.user = action.payload.user.id;
        state.email = action.payload.user.email;
      })
      .addCase(logining.rejected, (state, action) => {
        state.signingIn = false;
        state.error = action.payload;
      })
      .addCase(logining.pending, (state, action) => {
        state.loading = true;
        state.signingIn = false;
      })

      .addCase(logout.fulfilled, (state, action) => {
        state.signingIn = null;
        state.error = null;
        state.token = null;
        state.user = null;
        state.email = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = "Ошибка при выходе";
      });
  },
});

export default userSlice.reducer;
