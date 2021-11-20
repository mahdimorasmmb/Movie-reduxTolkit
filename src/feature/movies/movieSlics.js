import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: {},
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.movie = payload;
    },
  },
});

export const { addMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movie;

export default movieSlice.reducer;
