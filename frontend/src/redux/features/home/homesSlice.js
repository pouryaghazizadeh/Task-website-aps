import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getData = createAsyncThunk("data/getData", async () => {
  return axios
    .get("http://localhost:6200/")
    .then((data) => console.log(data))
    .catch((err) => console.log("error :(", err));
});
