import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { startLoadingGifs } from '../store/gifs/thunks';

export const useFetchGifs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        //Thunk
        dispatch( startLoadingGifs() );
    }, []);
}