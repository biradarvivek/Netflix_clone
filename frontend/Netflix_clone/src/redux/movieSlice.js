// import { createSlice } from "@reduxjs/toolkit";

// const movieSlice = createSlice({
//   name: "movie",
//   initialState: {
//     nowPlayingMovies: [],
//     popularMovie: [],
//     topRatedMovies: [],
//     upComingMovies: [],
//     toggle: false,
//     trailerMovie: null,
//   },
//   reducers: {
//     getNowPlayingMovies: (state, action) => {
//       state.nowPlayingMovies = action.payload;
//     },
//     getPopularMovie: (state, action) => {
//       state.popularMovie = action.payload;
//     },
//     getTopRatedMovies: (state, action) => {
//       state.topRatedMovies = action.payload;
//     },
//     getupComingMovies: (state, action) => {
//       state.upComingMovies = action.payload;
//     },
//     setToggle: (state) => {
//       state.toggle = !state.toggle;
//     },
//     getTrailerMovie: (state, action) => {
//       state.trailerMovie = action.payload;
//     },
//   },
// });

// export const {
//   getNowPlayingMovies,
//   getPopularMovie,
//   getTopRatedMovie,
//   getUpcomingMovie,
//   setToggle,
//   getTrailerMovie,
// } = movieSlice.actions;
// export default movieSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovie: null,
    topRatedMovies: null,
    upcomingMovies: null,
    toggle: false,
    trailerMovie: null,
    open: false,
    id: "",
  },
  reducers: {
    // actions
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    getPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    getTopRatedMovie: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getUpcomingMovie: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
    getTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    getId: (state, action) => {
      state.id = action.payload;
    },
  },
});
export const {
  getNowPlayingMovies,
  getPopularMovie,
  getTopRatedMovie,
  getUpcomingMovie,
  setToggle,
  getTrailerMovie,
  setOpen,
  getId,
} = movieSlice.actions;
export default movieSlice.reducer;
