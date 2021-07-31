import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productsSlice'
import themeReducer from './themeSlice'

export default configureStore({
    reducer: {
        shop: productReducer,
        theme: themeReducer
    },
})