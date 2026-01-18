import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./redux/slices/quoteSlice";

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});
