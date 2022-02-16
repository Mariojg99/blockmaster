import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import { CarouselButtons } from './CarouselButtons';

export const CarouselMovies = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 bannerMovies"
                    src="https://blogdesuperheroes.es/TDK/BDS_TDK_Banner3.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className='text-start'>
                    <CarouselButtons />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 bannerMovies"
                    src="https://blogdesuperheroes.es/imagen-noti/bds_first-class_poster-091.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className='text-start'>
                    <CarouselButtons />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 bannerMovies"
                    src="https://i0.wp.com/4.bp.blogspot.com/-P9tOPd8w8yo/UHJEkMD72RI/AAAAAAAAALo/CdS4xz4MxA0/s1600/hobbit_an_unexpected_journey_movie_banner_poster%2B%25282%2529.jpg?ssl=1"
                    alt="Third slide"
                />

                <Carousel.Caption className='text-start'>
                    <CarouselButtons />
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
