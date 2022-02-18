import React from 'react'
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { registerMovieAsync } from '../actions/actionMovies'
import { fileUpload } from '../helpers/fileUpload'
import { useForm } from '../hooks/useForm'

export const FormMovie = () => {

    const dispatch = useDispatch();

    const { values, handleInputChange, reset } = useForm({
        titulo: '',
        genero: '',
        calificacion: '',
        urlTrailer: '',
        sinopsis: '',
        poster: ''
    });

    let {titulo, genero, calificacion, urlTrailer, sinopsis, poster} = values;
    
    
    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(registerMovieAsync(titulo, genero, calificacion, urlTrailer, sinopsis, poster));
        reset();
        console.log(titulo, genero, calificacion, urlTrailer, sinopsis, poster);
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
            .then(resp => {
                poster = resp
                console.log(resp);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

  return (
    <div>
        <form onSubmit={handleRegistro}>

            {/* titulo */}
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                    <i className="bi bi-film" />
                </InputGroup.Text>
                <FormControl
                    type='text'
                    placeholder="Título"
                    aria-label="titulo"
                    aria-describedby="basic-addon1"
                    name='titulo'
                    value={titulo}
                    onChange={handleInputChange}
                />
            </InputGroup>

              <Row className="mb-3">

                    {/* genero */}
                  <Col>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon2">
                            <i className="bi bi-menu-button-wide"/>
                        </InputGroup.Text>

                        <Form.Select aria-label="Default select example" name='genero' value={genero} onChange={handleInputChange}>
                                <option>Género</option>
                                <option value="accion">Acción</option>
                                <option value="aventuras">Aventuras</option>
                                <option value="ficcion">Ciencia Ficción</option>
                                <option value="comedia">Comedia</option>
                                <option value="documental">Documental</option>
                                <option value="Drama">Drama</option>
                                <option value="fantasia">Fantasía</option>
                                <option value="musical">Musical</option>
                                <option value="suspenso">Suspenso</option>
                                <option value="terror">Terror</option>
                        </Form.Select>  
                    </InputGroup>
                  </Col>
                  
                  {/* calificacion */}
                  <Col>
                      <InputGroup>
                          <InputGroup.Text id="basic-addon3">
                              <i className="bi bi-star-fill" />
                          </InputGroup.Text>
                          <FormControl
                              type='text'
                              placeholder="Calificación"
                              aria-label="calificacion"
                              aria-describedby="basic-addon3"
                              name='calificacion'
                              value={calificacion}
                              onChange={handleInputChange}
                          />
                      </InputGroup>
                  </Col>
              </Row>

              {/* url trailer */}
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon4">
                    <i className="bi bi-link-45deg" />
                </InputGroup.Text>
                <FormControl
                    type='text'
                    placeholder="Url del tráiler"
                    aria-label="Username"
                    aria-describedby="basic-addon4"
                    name='urlTrailer'
                    value={urlTrailer}
                    onChange={handleInputChange}
                />
            </InputGroup>

            {/* sinopsis */}
            <InputGroup>
                  <InputGroup.Text>
                    <i className='bi bi-card-text' />
                  </InputGroup.Text>
                  <FormControl as="textarea"
                      aria-label="With textarea"
                      placeholder='Sinopsis'
                      name='sinopsis'
                      value={sinopsis}
                      onChange={handleInputChange}
                  />
            </InputGroup>

            {/* poster */}
            <Form.Group controlId="formFile" className="mt-3 fileSelector">
                  <Form.Control type="file"
                      placeholder='Poster'
                      name='poster'
                      value={poster}
                      onChange={handleFileChange}
                  />
              </Form.Group>

              {/* boton submit */}
            <Button type='submit' variant='warning' className='w-100 mt-3'>Agregar</Button>

        </form>
    </div>
  )
}
