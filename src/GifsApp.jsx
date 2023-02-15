import { Navbar } from "./components/ui/Navbar";
import { useFetchGifs } from "./hooks";

export const GifsApp = () => {

    useFetchGifs();

    return (
        <Navbar />

        
    )
};
