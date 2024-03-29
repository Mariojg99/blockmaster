import React from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { CalificacionDiv } from '../styles/CardStyleds'

export const CardMovie = ({ id, poster, calificacion }) => {

  return (
    <div>
      <Card className="bg-dark text-white mb-4" id={id} style={{ width: "150px" }}>
        <Card.Img src={poster} alt={id} />
        <Card.ImgOverlay className='mt-3 p-0'>
          <Card.Text>
            <CalificacionDiv>
              <i className="bi bi-star-fill text-warning mx-1" />
              <span>{calificacion}</span>
            </CalificacionDiv>
          </Card.Text>

        </Card.ImgOverlay>
      </Card>
    </div>
  )
}
