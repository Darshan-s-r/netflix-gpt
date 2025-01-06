import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import moviesListReducer from './moviesListSlice'
import GptReducer from './GptSclice'
const store =  configureStore({
  reducer:{
      user : userReducer,
      moviesList : moviesListReducer,
      GptResult : GptReducer,
  }
}) 

export default store