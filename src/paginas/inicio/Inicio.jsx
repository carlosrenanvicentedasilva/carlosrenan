import Carousel from "../../componentes/carousel/Carousel";
import "./InicioStyles.css";

export default function Inicio(){
    return(
        <div className="container-fluid container-fluid-inicio">
            <Carousel />
            <Carousel />
            <Carousel />
            <Carousel />
        </div>
    )
}