import React from "react"
import carousel01 from "../../img/carousel01.png";
import "./CarouselStyles.css"

export default function Carousel() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={carousel01} className="d-block w-100 carousel-foto" alt="1"/>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src={carousel01} className="d-block w-100 carousel-foto" alt="2"/>
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                    <img src={carousel01} className="d-block w-100 carousel-foto" alt="3"/>
                </div>
            </div>
        </div>
    )
}