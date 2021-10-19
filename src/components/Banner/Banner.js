import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        // Carousel 
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://t4.ftcdn.net/jpg/02/61/21/59/240_F_261215958_AEUFA4GKuGJn3tyMh7OvUU75wOEMQgjQ.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://t4.ftcdn.net/jpg/02/75/88/05/360_F_275880540_UEZz9qPAqlowxiF1XT1gGwJYGf86HAHc.webp"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://t4.ftcdn.net/jpg/02/31/14/81/240_F_231148129_WULlhk5TXuYw0uICad4DheRl6YfsWmjs.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;