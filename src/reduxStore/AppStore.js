import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import moviesListReducer from './moviesListSlice'
import GptReducer from './GptSclice'
import MovieDetailReducer from './movieDetailSlice'
const store =  configureStore({
  reducer:{
      user : userReducer,
      moviesList : moviesListReducer,
      GptResult : GptReducer,
      movieDetail : MovieDetailReducer,
  }
}) 

export default store