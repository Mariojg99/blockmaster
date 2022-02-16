import React from 'react'
import { CalificacionDiv } from '../styles/CardStyleds'

export const CardMovie = ({id, poster, calificacion}) => {
  return (
    <div>
        <img src={poster} alt={id} width={150} />
        <CalificacionDiv>
            <p>{calificacion}</p>
        </CalificacionDiv>
    </div>
  )
}
