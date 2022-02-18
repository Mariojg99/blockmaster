import React, { useEffect } from 'react'
import {  Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { listMoviesAsync } from '../actions/actionMovies'
import { ModalRegistroMovies } from './ModalRegistroMovies'
import { TableMovies } from './TableMovies'

export const RegistroMovies = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listMoviesAsync());
  }, [])
  
  return (
    <Container className='mt-3'>
        <h1 className='text-center'>Agrega una nueva película al catálogo</h1>
        <div className='mt-3'>
            <ModalRegistroMovies />
        </div>
        <div className='mt-3'>
            <TableMovies />
        </div>
    </Container>
  )
}
