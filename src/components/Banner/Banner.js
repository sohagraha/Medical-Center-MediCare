import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://www.whizlabs.com/blog/wp-content/uploads/2019/01/best-digital-marketing-courses.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://www.creativecirclebd.com/wp-content/uploads/2018/01/Graphic-Design.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://www.internetcreation.net/wp-content/uploads/2015/04/banner-web-design.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;