import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

export const CarouselButtons = () => {
  return (
      <>
          <Button size='lg' variant='warning'>
              <Row>
                  <Col sm={2}>
                      <i className="bi bi-play-circle-fill"></i>
                  </Col>
                  <Col sm={10}>
                      VER AHORA
                  </Col>
              </Row>
          </Button>
          <Button size='lg' variant='outline-warning' className='mx-2'>
              <Row>
                <Col sm={2}>
                      <i className="bi bi-plus"></i>
                  </Col>
                  <Col sm={10}>
                      VER MÁS TARDE
                  </Col>
              </Row>
          </Button>
      </>


  )
}
