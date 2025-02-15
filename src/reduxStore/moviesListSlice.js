import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
  name:"moviesList",
  initialState: {
    nowPlayingMovies : [],
    movieTrailer : null,
    popularMovies: [],
    topRatedMovies : [],
    upComingMovies : [],
  },
  reducers:{
    addNowPlayingMovies : (state, action)=>{
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer : (state, action)=>{
      state.movieTrailer = action.payload;
    },
    addPopularMovies : (state, action)=>{
      state.popularMovies = action.payload;
    },
    addTopRatedMovies : (state, action)=>{
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies : (state, action)=>{
      state.upComingMovies = action.payload;
    }
  }
})

export default moviesListSlice.reducer;

export const {addNowPlayingMovies, addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpComingMovies} = moviesListSlice.actions;