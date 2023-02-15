//Helper que se comunica con la api
import { getGifs } from "../../helpers/getGifs"
import { setGifs } from "./gifsSlice";

//
export const startLoadingGifs = () => {    
    return async(dispatch) => {
        const result = await getGifs();

        dispatch( setGifs(result) );
    }
}