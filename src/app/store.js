import { configureStore } from "@reduxjs/toolkit";
import productReducer from './createSlice'

export default configureStore({
    reducer: {
        shop: productReducer,
    },
})