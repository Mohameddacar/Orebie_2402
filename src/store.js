import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import breadcrumb from './slices/breadcrumb'
import categorySlice from './slices/categorySlice'
import { addtocart } from './slices/addtocart'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    breadcrumb: breadcrumb,
    category: categorySlice,
    addtocart: addtocart,
  },
})

export default store
