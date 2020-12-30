import React, { useState } from "react";
import Slider from "react-slick";

// import './styles.scss';

function ImageSlider({images}) {

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1200,
        autoplaySpeed: 4000,
        slidesToScroll: 2,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        buttons: false,
      };

    return (
        <div className="img-slider">
           
            {images.length ? <div>

            <Slider className="img-slider--main" {...settings}>
                {images.map((img, key) => <div key={key}>
                    <a href="https://hotdraw.co.uk" target="_blank">
                        <img src={img} alt="HotDraw Prize" />
                    </a>
                </div>)}
            </Slider>

            </div> : ''}
        </div>
    );
}

export default ImageSlider;
