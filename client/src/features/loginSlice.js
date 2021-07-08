import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    value: false,
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.value = action.payload
    },

    setLoggedOut: (state) => {
      state.value = false
    },
  }
})

export const { setLoggedIn, setLoggedOut } = loginSlice.actions;
export default loginSlice.reducer;