import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default function configureAppStore() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  });
}
