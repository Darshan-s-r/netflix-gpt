import {createSlice } from '@reduxjs/toolkit'

const GptSlice = createSlice({
  name:'GptResult',
  initialState : {
    names: [],
    movies : []
  },
  reducers:{
    addNames:(state, action)=>{
        state.names = action.payload
    },
    addMovies : (state, action)=>{
      state.movies = action.payload
    }
  }
})

export default GptSlice.reducer;
export const {addNames, addMovies} = GptSlice.actions