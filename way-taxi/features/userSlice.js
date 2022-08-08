// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'

// let axiosConfig = {
//     headers: {
//         "Content-Type": "application/json"
//     }
//   };


// export const registration = createAsyncThunk("user/registration", async ({ email, password }, thunkAPI) => {
//     try {
//         const response = await axios.post("http://localhost:4000/registration", { email, password },
//         axiosConfig)
//         return response.data;
//     } catch (error) {
//         thunkAPI.rejectWithValue(error.message)
//     }
// })


// let axiosConfig1 = {
//     headers: {
//         "Content-Type": "application/json"
//     }
//   };


// export const logining = createAsyncThunk("user/login",
// async ({ email, password }, thunkAPI) => {
//     try {
//         const response = await axios.post("http://localhost:4000/login", { email, password } , axiosConfig1)
//         if (data.message) {
//             return thunkAPI.rejectWithValue(data.message);
//           } else {
//             localStorage.setItem("isActivated", data?.user?.isActivated);
//             localStorage.setItem("user", data.user.id);
//             localStorage.setItem("email", data.user.email)
//             localStorage.setItem("token", data.accessToken);
//             return thunkAPI.fulfillWithValue(response.data);
//           }
//     } catch (error) {
//         thunkAPI.rejectWithValue(error.message)
//     }
// })

// export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
//     localStorage.clear();
//   });


// export const userSlice = createSlice({
//     name: "users/loginAndRegister",
//     initialState: {
//         signingUp: false,
//         signingIn: false,
//         error: null,
//         loading: false,
//         user: localStorage.getItem("user"),
//         token: localStorage.getItem("token"),
//         email: localStorage.getItem("email"),
//         isActivated: localStorage.getItem("isActivated"),
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//         .addCase(registration.fulfilled, (state, action) => {
//           state.signingUp = true;
//           state.loading = false
//         })
//         .addCase(registration.rejected, (state, action) => {
//           state.signingUp = false;
//           state.error = action.payload;
//           state.loading = false
  
//         })
  
//         .addCase(registration.pending, (state, action) => {
//           state.loading = true
//           state.signingUp = false;
//         })
  
//         .addCase(logining.fulfilled, (state, action) => {
//           state.signingIn = true;
//           state.error = null;
//           state.token = action.payload.accessToken;
//           state.isActivated = action.payload.user.isActivated;
//           state.user = action.payload.user.id;
//           state.email = action.payload.user.email;
//         })
//         .addCase(logining.rejected, (state, action) => {
//           state.signingIn = false;
//           state.error = action.payload;
//         })
//         .addCase(logining.pending, (state, action) => {
//           state.loading = true
//           state.signingIn = false;
//         })
  
//         .addCase(logout.fulfilled, (state, action) => {
//           state.signingIn = null;
//           state.error = null;
//           state.token = null;
//           state.user = null;
//           state.email = null;
//         })
//         .addCase(logout.rejected, (state, action) => {
//           state.error = "Ошибка при выходе";
//         });
//     }
// });

// export default userSlice.reducer;