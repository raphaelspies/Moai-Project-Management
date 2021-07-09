import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    value: false,
  },
  reducers: {
    setSelectedMsg: (state, action) => {
      state.value = action.payload
    },

    unselectMsg: (state) => {
      state.value = false
    },
  }
})

export const { setSelected, unselect } = messageSlice.actions;
export default messageSlice.reducer;