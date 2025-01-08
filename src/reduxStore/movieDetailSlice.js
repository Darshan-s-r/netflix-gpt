import { createSlice } from "@reduxjs/toolkit";

const movieDetailSlice = createSlice({
  name:"movieDetail",
  initialState:{
    movieInfo:null,
    movieVideos:null,
    nowPlayingVideo:null,
    playVideo:false,
  },
  reducers:{
    setMovieInfo: (state, action)=>{
      state.movieInfo = action.payload;
    },
    setMovieVideos:(state, action)=>{
      state.movieVideos = action.payload
    },
    setNowPlayingVideo:(state, action)=>{
      state.nowPlayingVideo = action.payload
    },
    setPlayVideo:(state, action)=>{
      state.playVideo = action.payload
    }
  }
})

export default movieDetailSlice.reducer;

export const {setMovieInfo, setMovieVideos, setNowPlayingVideo, setPlayVideo} = movieDetailSlice.actions;