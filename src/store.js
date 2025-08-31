import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import breadcrumb from './slices/breadcrumb'
import categorySlice from './slices/categorySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    breadcrumb: breadcrumb,
    category: categorySlice,
  },
})

export default store
