import { useEffect } from 'react';

import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = () => {
    
    const getData = async() => {
        const resul = await getGifs();
        console.log(resul);
    }

    useEffect(() => {
        getData();
    }, []);
}