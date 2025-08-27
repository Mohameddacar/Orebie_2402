import { createSlice } from '@reduxjs/toolkit'

export const breadcrumb = createSlice({
  name: 'bread',
  initialState: {
    value: null,
    daybeforeyesterday: null,
    prevalue: null,
    currentvalue: null
  },
  reducers: {
    activeButton: (state,action) => {
      state.prevalue = state.currentvalue;
      state.currentvalue = action.payload;
    },
  },
})

export const { activeButton } = breadcrumb.actions
export default breadcrumb.reducer
