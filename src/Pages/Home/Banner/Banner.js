import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner-1.jpg';
import banner2 from '../../../images/banner-2.jpg';
import banner3 from '../../../images/banner-3.jpg';

const Banner = () => {
    return (
        <Carousel>
            {/* Banner Slider-1 */}
            <Carousel.Item >
                <img className="d-block w-100 banner" src={banner1} alt="First slide" />
                <Carousel.Caption >
                    <h1>Explore new worlds with us</h1>
                    <p>You’ll always have fascinating places to see.</p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Banner Slider-2 */}
            <Carousel.Item>
                <img className="d-block w-100 banner" src={banner2} alt="Second slide" />
                <Carousel.Caption>
                    <h1>Spend Quality Holidays With Us</h1>
                    <p>Perfect World Travel Agency</p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Banner Slider-3 */}
            <Carousel.Item>
                <img className="d-block w-100 banner" src={banner3} alt="Third slide" />
                <Carousel.Caption>
                    <h1>Travel the world one place </h1>
                    <p>Make Your Life Better and Bright!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;