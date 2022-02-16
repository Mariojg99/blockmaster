import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import { Banner } from '../styles/CarouselStyleds';
import { CarouselButtons } from './CarouselButtons';

export const CarouselMovies = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Banner
                    className="d-block w-100 bannerMovies"
                    src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/366b43aa-a099-4312-98fb-4e5effaaed61.__CR0,0,970,300_PT0_SX970_V1___.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className='text-start'>
                    <CarouselButtons />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Banner
                    className="d-block w-100 bannerMovies"
                    src="https://pbs.twimg.com/media/FBbzSTGWYBEf5xk.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className='text-start'>
                    <CarouselButtons />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Banner
                    className="d-block w-100 bannerMovies"
                    src="https://pbs.twimg.com/media/EDEngWcW4AMzrMO.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className='text-start'>
                    <CarouselButtons />
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
