// import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// // export const getPhotos = createAsyncThunk(
// //   'photos/getPhotos',
// //   async () => {
// //     const response = await fetch("http://localhost:6200/");
// //     const formattedResponse = await response.json();
// //     return formattedResponse
// //   }
// // )

// export const getDataHome = createAsyncThunk(
//   "home/getDataHome",
//   async () => {
//     try{
//       const { data } = await axios.get("http://localhost:6200/");
//       console.log(data);
//       return data
//     }
//     catch(err) {
//       console.error(err)
//     }
//   }
// )

// export const homeSlice = createSlice({
//   name: "home",
//   initialState: {
//     data: [],
//     status: null,
//   },
//   reducer: {
//     [getDataHome.pending]: (state, action) => {
//       state.status = "loading";
//     },
//     [getDataHome.fulfilled]: (state, { payload }) => {
//       state.data = payload;
//       state.status = "success";
//     },
//     [getDataHome.rejected]: (state, action) => {
//       state.status = "failed";
//     },
//   },
// });

// export default homeSlice.reducer;


// tools
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// fetch data home 
export const getDataHome = createAsyncThunk("home/getDataHome", async () => {
  try {
    const { data } = await axios.get("http://localhost:6200/");
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
});
// home slice
const homeSlices = createSlice({
  name: "home",
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: {
    [getDataHome.pending]: (state, action) => {
      state.status = "loading";
    },
    [getDataHome.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [getDataHome.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});


export default homeSlices.reducer;