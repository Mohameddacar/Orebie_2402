import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import breadcrumb from './slices/breadcrumb'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    breadcrumb: breadcrumb,
  },
})

export default store
