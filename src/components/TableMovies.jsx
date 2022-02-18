import React from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export const TableMovies = () => {

    const {movies} = useSelector(store => store.pelicula);
    console.log(movies)

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Poster</th>
                        <th>Película</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (movies) ?
                            (
                                movies.map((element, index) => (
                                    <tr key={index}>
                                        <td>{element.poster}</td>
                                        <td>
                                            <Card>
                                                <Card.Header as="h5">Featured</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>{element.titulo}</Card.Title>
                                                    <Card.Text>
                                                        <i className="bi bi-star-fill text-warning" />
                                                        <span className='mx-2'>{element.calificacion}</span>
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <p>{element.sinopsis}</p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </td>
                                        <td>
                                            <Button type='button' variant='primary'>
                                                <i className="bi bi-pencil-fill" />
                                            </Button>
                                            <Button type='button' variant='warning'>
                                                <i className="bi bi-trash-fill" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ):
                            <p>Datos no disponibles</p>
                    }
                </tbody>
            </Table>
        </div>
    )
}
