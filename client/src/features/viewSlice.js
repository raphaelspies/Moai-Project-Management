import { createSlice } from '@reduxjs/toolkit'

export const viewSlice = createSlice({
  name: 'view',
  initialState: {
    value: 'login'
  },
  reducers: {
    setView: (state, action) => {
    state.value = action.payload
    }
  }
})

export const { setView } = viewSlice.actions;
export default viewSlice.reducer;