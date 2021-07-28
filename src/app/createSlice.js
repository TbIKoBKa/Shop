import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import formatDate from "../lib/formatDate";
import upStringFirst from "../lib/upStringFirst";
import data from './product_data'
import themes from '../app/themes'

export const productsSlice = createSlice({
    name: 'shop',
    initialState: {
        products: data,
        theme: {
            id: 0,
            props: themes.light
        },
        reviewsShow: false,
        reviewsProductId: '',
        addReviewFormShow: false,
        rateReviewFormShow: 1
    },
    reducers: {
        addReview: (state, action) => {
            let { message, pros, cons, from } = action.payload;
            let prosArray = pros.length > 0 ? pros.split(',').map(item => upStringFirst(item.trim())) : []
            let consArray = cons.length > 0 ? cons.split(',').map(item => upStringFirst(item.trim())) : []
            let newReview = {
                id: v4(),
                message,
                pros: prosArray,
                cons: consArray,
                rating: state.rateReviewFormShow,
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
            state.rateReviewFormShow = 1
        },
        setReviewsProductId: (state, action) => {
            state.reviewsProductId = action.payload
        },
        toggleReviewsShow: (state) => {
            state.reviewsShow = !state.reviewsShow
        },
        toggleAddReviewFormShow: (state) => {
            state.addReviewFormShow = !state.addReviewFormShow
            state.rateReviewFormShow = 1;
        },
        setRateReviewFormShow: (state, action) => {
            state.rateReviewFormShow = action.payload;
        },
        toggleTheme: (state) => {
            state.theme.id = state.theme.id === 0 ? 1 : 0;
            state.theme.props = state.theme.id === 0 ? themes.light : themes.dark;
        }
    }
})

export const { 
    addReview,
    setReviewsProductId,
    toggleReviewsShow,
    toggleAddReviewFormShow,
    setRateReviewFormShow,
    toggleTheme
} = productsSlice.actions

export default productsSlice.reducer