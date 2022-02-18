import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { FormMovie } from './FormMovie';

export const ModalRegistroMovies = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="warning" onClick={handleShow}>
          Registrar Película
        </Button>
  
        <Modal show={show} onHide={handleClose}>
            <div  className='bg-dark'>
                <Modal.Header closeButton className='text-warning'>
                    <Modal.Title>Registro de Películas</Modal.Title>
                </Modal.Header>
                <Modal.Body className='py-4 px-5'>
                    <FormMovie />
                </Modal.Body>
            </div>
        </Modal>
      </>
    );
}
