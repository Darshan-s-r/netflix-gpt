import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'UserSlice',
  initialState: {
    user:null,
    language:'En',
    browsePage : true,
  },
  reducers:{
    addUser: (state, action)=>{
       state.user = action.payload;
    },
    removeUser:(state)=>{
        state.user = null;
    },
    setLanguage: (state, action)=>{
      state.language = action.payload;
    },
    setBrowsePage: (state, action)=>{
      state.browsePage = action.payload;
    }
  }
})

export const {addUser, removeUser, setLanguage, setBrowsePage} = UserSlice.actions

export default UserSlice.reducer