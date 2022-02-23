import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// for get data as AsyncThunk becuse gives us promise(pending and fulfiled and rejected )
export const getData = createAsyncThunk("data/getData", async () => {
  return await axios
    .get("http://localhost:6200/")
    .then((response) => response.data)
    .catch((err) => console.log("error :(", err));
});
// use in promise function asyncThunk
const dataSlice = createSlice({
  name: "data",
  initialState: {
    card: [],
    status: null,
  },
  extraReducers: {
    //    promise us if worked
    [getData.fulfilled]: (state, { payload }) => {
      // push in the card
      state.card = payload;
      state.status = " sucess (:";
    },
    // promise us if load
    [getData.pending]: (state, actions) => {
      state.status = "loading..../:";
    },
    // promise us if dont work ): I hope does not get here
    [getData.rejected]: (state, actions) => {
      state.status = "falid I want you to try again ):";
    },
  },
});

export default dataSlice.reducer;
