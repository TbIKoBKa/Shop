import { createSlice } from "@reduxjs/toolkit";
import themes from "./themes";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        id: 0,
        props: themes.light
    },
    reducers: {
        toggleTheme: (state) => {
            state.id = state.id === 0 ? 1 : 0;
            state.props = state.id === 0 ? themes.light : themes.dark;
        }
    }
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer