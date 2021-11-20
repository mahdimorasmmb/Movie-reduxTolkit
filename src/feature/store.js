import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./movies/movieSlics";

export const store = configureStore({
  reducer: moviesReducer,
});
