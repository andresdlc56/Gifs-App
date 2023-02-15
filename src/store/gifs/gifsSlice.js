import { createSlice } from '@reduxjs/toolkit';

export const gifsSlice = createSlice({
    name: 'gifs',
    initialState: {
        data: []
    },
    reducers: {
        //Cambiar el initialState por los valores en payload
        setGifs: (state, action ) => {
            state.data = action.payload
        },
    },
});


// Action creators are generated for each case reducer function
export const { setGifs } = gifsSlice.actions;