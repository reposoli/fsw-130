import { createSlice } from '@reduxjs/toolkit';

export const mediaSlice = createSlice({
  name: 'media',
  initialState: {
    movies: [],
    tvShows: []
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = [...state.movies, action.payload];
    },
    addTvShows: (state, action) => {
      state.tvShows = [...state.tvShows, action.payload];
    },
  },
});

export const { addMovies, addTvShows } = mediaSlice.actions;
export const selectMovies = state => state.media.movies;
export const selectTvShows = state => state.media.tvShows;

export default mediaSlice.reducer;