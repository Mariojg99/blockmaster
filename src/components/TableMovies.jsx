import React from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export const TableMovies = () => {

    const {movies} = useSelector(store => store.pelicula);
    console.log(movies)

    return (
        <div>
            <Table striped bordered hover variant="dark" className='text-center'>
                <thead>
                    <tr>
                        <th>Poster</th>
                        <th>Nombre</th>
                        <th>Género</th>
                        <th>Calificación</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (movies) ?
                            (
                                movies.map((element, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img src={element.poster} alt={element.titulo} width="80px"/>
                                        </td>
                                        <td>{element.titulo}</td>
                                        <td>{element.genero}</td>
                                        <td>
                                            <i className="bi bi-star-fill text-warning" />
                                            <span className='mx-2'>{element.calificacion}</span>
                                        </td>
                                        <td className='text-center'>
                                            <Button type='button' variant='secondary'>
                                                <i className="bi bi-pencil-fill" />
                                            </Button>
                                            <Button type='button' variant='warning' className='mx-1'>
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
