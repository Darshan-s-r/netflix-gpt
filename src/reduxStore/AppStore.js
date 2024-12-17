import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import nowPlayingMoviesReducer from './nowPlayingMoviesSlice'

const store =  configureStore({
  reducer:{
      user : userReducer,
      nowPlayingMovies : nowPlayingMoviesReducer,
  }
}) 

export default store