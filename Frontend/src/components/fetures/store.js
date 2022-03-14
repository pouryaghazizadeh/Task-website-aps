import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../fetures/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});