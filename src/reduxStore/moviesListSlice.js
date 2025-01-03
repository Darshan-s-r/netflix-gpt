import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
  name:"moviesList",
  initialState: {
    nowPlayingMovies : [],
    movieTrailer : null
  },
  reducers:{
    addNowPlayingMovies : (state, action)=>{
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer : (state, action)=>{
      state.movieTrailer = action.payload;
    }
  }
})

export default moviesListSlice.reducer;

export const {addNowPlayingMovies, addMovieTrailer} = moviesListSlice.actions;