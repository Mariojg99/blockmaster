import React from 'react'
import  CardListMovie  from './CardListMovie'
import { CarouselMovies } from './CarouselMovies'

export const Home = () => {
  return (
    <div>
        <CarouselMovies />
        <div className='mt-5'>
            <CardListMovie />
        </div>
    </div>
  )
}
