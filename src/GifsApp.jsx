import { Navbar } from "./components/ui/Navbar";
import { useFetchGifs } from "./hooks";

export const GifsApp = () => {

    //Cargando gifs random al iniciar 
    useFetchGifs();

    return (
        <Navbar />

        
    )
};
