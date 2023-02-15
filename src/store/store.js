import { configureStore } from "@reduxjs/toolkit";

import { gifsSlice } from "./gifs/gifsSlice";

export const store = configureStore({
    reducer: {
        gifs: gifsSlice.reducer,
    }
});