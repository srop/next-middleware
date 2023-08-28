import { createSlice } from '@reduxjs/toolkit'


export interface UserState {
    username: any | undefined;
    
  }
  const initialState = {
    users: []
  }
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
      addUser: (state:any, action) => {
          state.users = [...state.users, action.payload]
      },
      getUsers: (state, action) => {
        state.users = action.payload;
    },
  }
})

export const { addUser,getUsers} = usersSlice.actions

export default usersSlice.reducer
