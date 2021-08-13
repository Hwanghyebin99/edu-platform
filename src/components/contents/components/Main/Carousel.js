import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

class Carousel extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <Slider {...settings} className="slider-container">
                <div>
                    <h1>EDUCATION</h1>
                </div>
                <div>

                </div>
                <div>
                    
                </div>
            </Slider>
        );
    }
}

export default Carousel;