import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./postSlice";
export let store = configureStore({
    reducer: {
        posts: postsReducer,
    }
})