import { createSlice } from "@reduxjs/toolkit";

export const nowPlayingMoviesSlice = createSlice({
  name: "nowPlayingMovies",
  initialState: [],
  reducers : {
    addNowPlayingMovies : (state, action)=>{
        return action.payload;
    }
  }

})

export const {addNowPlayingMovies} = nowPlayingMoviesSlice.actions;

export default nowPlayingMoviesSlice.reducer;
