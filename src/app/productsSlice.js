import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import formatDate from "../lib/formatDate";
import upStringFirst from "../lib/upStringFirst";
import data from './product_data'

export const productsSlice = createSlice({
    name: 'shop',
    initialState: {
        products: data,
        reviewsShow: false,
        reviewsProductId: '',
        addReviewFormShow: false
    },
    reducers: {
        addReview: (state, action) => {
            let { message, pros, cons, from, rating } = action.payload;
            let prosArray = pros.length > 0 ? pros.split(',').map(item => upStringFirst(item.trim())) : []
            let consArray = cons.length > 0 ? cons.split(',').map(item => upStringFirst(item.trim())) : []
            let newReview = {
                id: v4(),
                message,
                pros: prosArray,
                cons: consArray,
                rating,
                from,
                date: formatDate(new Date())
            }
            state.products = state.products.map(item => {
                if(item.id === state.reviewsProductId) {
                    item.reviews = [...item.reviews, newReview]
                    item.rating = Math.round(item.reviews.reduce((total, current) => total + current.rating, 0) / item.reviews.length)
                }
                return item;
            })
            state.addReviewFormShow = false
        },
        setReviewsProductId: (state, action) => {
            state.reviewsProductId = action.payload
        },
        toggleReviewsShow: (state) => {
            state.reviewsShow = !state.reviewsShow
        },
        toggleAddReviewFormShow: (state) => {
            state.addReviewFormShow = !state.addReviewFormShow
        },
    }
})

export const { 
    addReview,
    setReviewsProductId,
    toggleReviewsShow,
    toggleAddReviewFormShow
} = productsSlice.actions

export default productsSlice.reducer