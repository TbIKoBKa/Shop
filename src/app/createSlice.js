import { createSlice } from "@reduxjs/toolkit";
import data from './product_data'

export const productsSlice = createSlice({
    name: 'shop',
    initialState: {
        products: data,
        theme: 'light',
        reviewsShow: false,
        reviewsProductId: '',
        addReviewFormShow: false
    },
    reducers: {
        addReview: (state, action) => {
            state.products.map(item => {
                if(item.id === action.payload.id)
                    item.reviews = [...item.reviews, action.payload.review];
                return item
            })
        },
        setReviewsProductId: (state, action) => {
            state.reviewsProductId = action.payload
        },
        toggleReviewsShow: (state) => {
            state.reviewsShow = !state.reviewsShow
        },
        toggleAddReviewFormShow: (state) => {
            state.addReviewFormShow = !state.addReviewFormShow
            console.log(state.addReviewFormShow);
        }
    }
})

export const { addReview, setReviewsProductId, toggleReviewsShow, toggleAddReviewFormShow } = productsSlice.actions

export default productsSlice.reducer