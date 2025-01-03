import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import moviesListReducer from './moviesListSlice'
const store =  configureStore({
  reducer:{
      user : userReducer,
      moviesList : moviesListReducer,
  }
}) 

export default store