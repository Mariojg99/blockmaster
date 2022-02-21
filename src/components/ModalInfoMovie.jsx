import React, { useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap';


export const ModalInfoMovie = ({id, poster, titulo, fecha, sinopsis, calificacion, Children}) => {

    const [show, setShow] = useState(false);

  return (
    <>
        <div onClick={() => setShow(true)}>
            {Children}
        </div>

          <Modal
              show={show}
              size="xl"
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
              id={id}>
                <Modal.Header closeButton className='bg-warning text-black'>
                    <Modal.Title id="example-custom-modal-styling-title"> 
                        <h1>{titulo}</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark p-5'>
                    <Row>
                        <Col sm={3} className='text-center px-2'>
                            <img src={poster} width="250px" className='shadow-lg mb-5 bg-body rounded'/>
                        </Col>
                        <Col className='px-4'>
                            <h2>Fecha de estreno: {fecha}</h2>
                            <div className='fs-3'>
                                <i className="bi bi-star-fill text-warning mx-1" />
                                <span>{calificacion}</span>
                            </div>
                            <p className='mt-3 fs-5'>{sinopsis}</p>
                        </Col>
                    </Row>
                </Modal.Body>
          </Modal>
    </>
  )
}
