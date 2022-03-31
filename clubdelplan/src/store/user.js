import { createSlice } from '@reduxjs/toolkit'

const userInitialState = { login: false}

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: {
    change:(state) =>{
      state.value = true
    }
  },
})

// export const { change } = userSlice.actions
export default userSlice.reducer